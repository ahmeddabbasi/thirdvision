import React, { useState, memo, useCallback } from 'react';

interface EmailCaptureModalProps {
  open: boolean;
  onClose: () => void;
}

const EmailCaptureModal: React.FC<EmailCaptureModalProps> = memo(({ open, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      // Call Vercel serverless function
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email
        }),
      });
      
      const data = await res.json();
      
      if (!res.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }
      
      // Redirect immediately to Thank You page
      window.location.href = '/#/thank-you';
    } catch (err) {
      console.error('Subscription error:', err);
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setLoading(false);
    }
  }, [name, email]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="bg-[#141417] border border-white/10 rounded-lg p-8 w-full max-w-md shadow-2xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-white/40 hover:text-accent text-xl font-bold">×</button>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Download the Flight Manual
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            required
            placeholder="Your Full Name"
            className="w-full p-3 border border-white/10 bg-black/30 text-white rounded font-mono text-sm focus:outline-none focus:border-accent"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
          />
          <input
            type="email"
            required
            placeholder="Work Email Address"
            className="w-full p-3 border border-white/10 bg-black/30 text-white rounded font-mono text-sm focus:outline-none focus:border-accent"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="w-full py-3 bg-accent text-black font-bold rounded uppercase tracking-widest hover:bg-white transition-all disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Download Whitepaper'}
          </button>
          {error && <div className="text-red-500 text-xs font-mono mt-2">{error}</div>}
        </form>
        <div className="text-white/40 text-xs mt-4 font-mono">We’ll send your email to our team for access tracking. No spam.</div>
      </div>
    </div>
  );
});

EmailCaptureModal.displayName = 'EmailCaptureModal';

export default EmailCaptureModal;
