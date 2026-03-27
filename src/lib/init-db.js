import { Client } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

async function createTable() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: { rejectUnauthorized: false }
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL");

    const query = `
      CREATE TABLE IF NOT EXISTS applications (
        id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
        origin TEXT,
        "firstName" TEXT,
        "lastName" TEXT,
        email TEXT,
        phone TEXT,
        nationality TEXT,
        "englishLevel" TEXT,
        "liveInEngland" TEXT,
        "studyLocation" TEXT,
        "residencyStatus" TEXT,
        "callDate" TEXT,
        country TEXT,
        city TEXT,
        "interestedSubject" TEXT,
        status TEXT DEFAULT 'New',
        "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `;

    await client.query(query);
    console.log("Table 'applications' ready.");
  } catch (err) {
    console.error("Error executing query", err.stack);
  } finally {
    await client.end();
  }
}

createTable();
