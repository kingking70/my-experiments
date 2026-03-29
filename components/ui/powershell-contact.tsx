'use client';

import { useEffect, useRef, useState } from 'react';

const contactLines = [
  { prompt: true, text: 'say-hello' },
  { prompt: false, text: '' },
  { prompt: false, text: '' },
];

interface Submission {
  message: string;
  email: string;
  status: 'sending' | 'sent' | 'error';
}

export function PowershellContact() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [current, setCurrent] = useState('');
  const [step, setStep] = useState<'message' | 'email'>('message');
  const [pendingMessage, setPendingMessage] = useState('');
  const [history, setHistory] = useState<Submission[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (visibleLines >= contactLines.length) return;
    const delay = visibleLines === 0 ? 600 : visibleLines === 1 ? 300 : 180;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visibleLines]);

  async function handleEnter() {
    if (!current.trim()) return;
    if (step === 'message') {
      setPendingMessage(current.trim());
      setCurrent('');
      setStep('email');
    } else {
      const email = current.trim();
      const entry: Submission = { message: pendingMessage, email, status: 'sending' };
      setHistory((h) => [...h, entry]);
      setCurrent('');
      setPendingMessage('');
      setStep('message');

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: pendingMessage, email }),
        });
        const status = res.ok ? 'sent' : 'error';
        setHistory((h) => h.map((e, i) => i === h.length - 1 ? { ...e, status } : e));
      } catch {
        setHistory((h) => h.map((e, i) => i === h.length - 1 ? { ...e, status: 'error' } : e));
      }
    }
  }

  return (
    <div className="overflow-hidden rounded-sm shadow-2xl shadow-black/40" style={{ fontFamily: 'Consolas, "Courier New", monospace' }}>
      {/* Title bar */}
      <div className="flex items-center justify-between bg-[#1e1e1e] px-3 py-1.5">
        <div className="flex items-center gap-2">
          <div className="flex h-4 w-4 items-center justify-center">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
              <rect width="16" height="16" rx="1" fill="#012456" />
              <text x="2" y="13" fontSize="11" fill="white" fontWeight="bold">_</text>
            </svg>
          </div>
          <span className="text-xs text-[#cccccc]">powdershell</span>
        </div>
        <div className="flex">
          {['─', '□', '×'].map((sym, i) => (
            <div
              key={i}
              className={`flex h-7 w-10 items-center justify-center text-xs text-[#cccccc] ${
                i === 2 ? 'hover:bg-[#c42b1c]' : 'hover:bg-white/10'
              }`}
            >
              {sym}
            </div>
          ))}
        </div>
      </div>

      {/* Shell body */}
      <div
        className="min-h-80 p-4 text-sm leading-relaxed text-[#eeedf0]"
        style={{ backgroundColor: '#012456' }}
        onClick={() => (step === 'message' ? textareaRef : inputRef).current?.focus()}
      >
        {/* Header */}
        <p>SAY HELLO</p>
        <br />
        <p className="mb-4 text-[#10e858]">
          © kingstonkoh.com all rights reserved.
        </p>
        <p>$/ shift + enter for new line on your message...</p>
        <p>$/ enter to submit</p>
        <br/>

        {/* Animated lines */}
        {contactLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            {line.prompt ? (
              <>
                <span className="mr-2 text-[#eeedf0]">kk C:\&gt;</span>
                <span>{line.text}</span>
              </>
            ) : (
              <span>{line.text || '\u00a0'}</span>
            )}
          </div>
        ))}

        {visibleLines >= contactLines.length && (
          <>
            {/* Completed submissions */}
            {history.map((entry, i) => (
              <div key={i}>
                <div className="flex">
                  <span className="mr-2 text-[#eeedf0]">contact me:\&gt;</span>
                  <span>{entry.message}</span>
                </div>
                <div className="flex">
                  <span className="mr-2 text-[#eeedf0]">contact me:\&gt;</span>
                  <span>{entry.email}</span>
                </div>
                <div>&nbsp;</div>
                <p>
                  {entry.status === 'sending' && 'sending...'}
                  {entry.status === 'sent' && "noted. i'll be in touch."}
                  {entry.status === 'error' && 'something went wrong. try again.'}
                </p>
                <div>&nbsp;</div>
              </div>
            ))}

            {/* Pending message already entered, waiting for email */}
            {step === 'email' && (
              <div className="flex">
                <span className="mr-2 text-[#eeedf0]">contact me:\&gt;</span>
                <span>{pendingMessage}</span>
              </div>
            )}

            {/* Active input */}
            <div className="flex items-start">
              <span className="mr-2 mt-px shrink-0 text-[#eeedf0]">contact me:\&gt;</span>
              {step === 'message' ? (
                <textarea
                  ref={textareaRef}
                  value={current}
                  onChange={(e) => {
                    setCurrent(e.target.value);
                    e.target.style.height = 'auto';
                    e.target.style.height = e.target.scrollHeight + 'px';
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && !e.altKey) {
                      e.preventDefault();
                      handleEnter();
                    }
                  }}
                  rows={1}
                  spellCheck={false}
                  className="flex-1 resize-none overflow-hidden bg-transparent text-[#eeedf0] outline-none caret-[#eeedf0] placeholder:text-[#fbfbfb]/40"
                  placeholder="your message... (shift+enter for new line)"
                  style={{ fontFamily: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}
                />
              ) : (
                <input
                  ref={inputRef}
                  type="email"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleEnter(); }}
                  spellCheck={false}
                  className="flex-1 bg-transparent text-[#eeedf0] outline-none caret-[#eeedf0] placeholder:text-[#eeedf0]/40"
                  placeholder="your@email.com"
                  style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
