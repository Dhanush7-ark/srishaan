export default function Ticker() {
  const items = ['Mutual Funds', 'Equity Advisory', 'Wealth Management', 'Retirement Planning', 'Tax Optimisation', 'Life Insurance', 'Estate Planning', 'Portfolio Review'];
  const sep = <span style={{ color: 'var(--gold)', margin: '0 24px', opacity: .6 }}>◆</span>;
  return (
    <div style={{ borderTop: '1px solid var(--bdr)', borderBottom: '1px solid var(--bdr)', background: 'var(--navy-2)', overflow: 'hidden', padding: '14px 0' }}>
      <div className="ticker-track" style={{ animation: 'tickerScroll 32s linear infinite' }}>
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', fontSize: '12.5px', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', padding: '0 4px' }}>
            {item}{sep}
          </span>
        ))}
      </div>
    </div>
  );
}
