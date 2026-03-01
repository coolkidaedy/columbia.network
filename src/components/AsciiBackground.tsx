'use client';

export default function AsciiBackground() {
  return (
    <div className="ascii-art-background">
      <img
        src="/watermark.png"
        alt=""
        aria-hidden="true"
        style={{
          display: 'block',
          width: '750px',
          height: 'auto',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      />
    </div>
  );
}
