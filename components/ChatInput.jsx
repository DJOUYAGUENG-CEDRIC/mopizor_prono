'use client';

import { useState } from 'react';

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export default function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) handleSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Écrivez votre message..."
        disabled={disabled}
        className="flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: '#e7ebf0', color: '#17212b', border: '1px solid #dfe5ea' }}
        onFocus={(e) => { e.target.style.borderColor = '#3390ec'; e.target.style.boxShadow = '0 0 0 2px rgba(51,144,236,0.15)'; }}
        onBlur={(e) => { e.target.style.borderColor = '#dfe5ea'; e.target.style.boxShadow = 'none'; }}
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={!value.trim() || disabled}
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow"
        style={{ background: value.trim() && !disabled ? '#3390ec' : '#a9d1f7', color: '#ffffff', cursor: value.trim() && !disabled ? 'pointer' : 'not-allowed' }}
        aria-label="Envoyer"
      >
        <SendIcon />
      </button>
    </form>
  );
}
