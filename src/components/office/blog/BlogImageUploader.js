'use client';

import { useCallback, useRef, useState } from 'react';
import { ImagePlus, Loader2, X, UploadCloud } from 'lucide-react';

const ACCEPT = 'image/jpeg,image/png,image/webp,image/gif';
const MAX_MB = 5;

export default function BlogImageUploader({ value = '', onChange, label = 'Featured Image' }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);

  const upload = useCallback(async (file) => {
    setError('');

    if (!file.type.startsWith('image/')) {
      setError('Only image files are allowed');
      return;
    }
    if (file.size > MAX_MB * 1024 * 1024) {
      setError(`File exceeds ${MAX_MB} MB`);
      return;
    }

    setUploading(true);
    try {
      const fd = new FormData();
      fd.append('file', file);

      const res = await fetch('/api/office/upload', { method: 'POST', body: fd });
      const json = await res.json();

      if (!json.success) throw new Error(json.error || 'Upload failed');
      onChange(json.url);
    } catch (err) {
      setError(err.message || 'Upload failed');
    } finally {
      setUploading(false);
    }
  }, [onChange]);

  const handleFiles = useCallback((files) => {
    if (!files || files.length === 0) return;
    upload(files[0]);
  }, [upload]);

  const onInputChange = (e) => handleFiles(e.target.files);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }, [handleFiles]);

  const onDragOver = (e) => { e.preventDefault(); setDragging(true); };
  const onDragLeave = () => setDragging(false);

  const clear = () => {
    setError('');
    onChange('');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>

      {value ? (
        <div className="relative group rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
          <img
            src={value}
            alt="Preview"
            className="w-full max-h-52 object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
            <button
              type="button"
              onClick={clear}
              className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white text-slate-700 rounded-full p-1.5 shadow"
              title="Remove image"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onClick={() => !uploading && inputRef.current?.click()}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && !uploading && inputRef.current?.click()}
          className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed cursor-pointer py-8 px-4 transition-colors ${
            dragging
              ? 'border-brand-primary bg-brand-primary/5'
              : 'border-slate-200 bg-slate-50 hover:border-brand-primary/50 hover:bg-slate-100'
          } ${uploading ? 'opacity-60 cursor-not-allowed' : ''}`}
        >
          {uploading ? (
            <>
              <Loader2 className="w-7 h-7 text-brand-primary animate-spin" />
              <p className="text-sm text-slate-500 font-medium">Uploading…</p>
            </>
          ) : (
            <>
              <UploadCloud className="w-7 h-7 text-slate-400" />
              <p className="text-sm text-slate-500 font-medium text-center">
                Drag & drop or <span className="text-brand-primary font-bold">click to upload</span>
              </p>
              <p className="text-xs text-slate-400">JPEG, PNG, WebP, GIF · max {MAX_MB} MB</p>
            </>
          )}
        </div>
      )}

      {error && <p className="text-xs font-medium text-red-600">{error}</p>}

      {/* Manual URL fallback */}
      <div className="flex items-center gap-2">
        <ImagePlus className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <input
          type="text"
          value={value}
          onChange={(e) => { setError(''); onChange(e.target.value); }}
          className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary/40"
          placeholder="Or paste image URL directly"
        />
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT}
        onChange={onInputChange}
        className="hidden"
      />
    </div>
  );
}
