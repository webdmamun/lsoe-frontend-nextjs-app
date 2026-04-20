import { spawn } from 'node:child_process';

const FILTERED_LINES = new Set([
  '[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`',
]);

const command = process.argv[2];
const args = process.argv.slice(3);

if (!command) {
  console.error('Usage: node scripts/run-with-filtered-output.mjs <command> [...args]');
  process.exit(1);
}

function pipeFiltered(stream, output) {
  let pending = '';

  stream.on('data', (chunk) => {
    pending += chunk.toString();
    const lines = pending.split(/\r?\n/);
    pending = lines.pop() ?? '';

    for (const line of lines) {
      if (!FILTERED_LINES.has(line.trim())) {
        output.write(`${line}\n`);
      }
    }
  });

  stream.on('end', () => {
    if (pending && !FILTERED_LINES.has(pending.trim())) {
      output.write(pending);
    }
  });
}

const child = spawn(command, args, {
  env: {
    ...process.env,
    BROWSERSLIST_IGNORE_OLD_DATA: 'true',
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: 'true',
  },
  stdio: ['inherit', 'pipe', 'pipe'],
});

pipeFiltered(child.stdout, process.stdout);
pipeFiltered(child.stderr, process.stderr);

child.on('error', (error) => {
  console.error(error.message);
  process.exit(1);
});

child.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 1);
});
