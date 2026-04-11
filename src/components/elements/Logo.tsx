'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Logo() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href="/"
      className="logo"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="36" height="36" viewBox="0 0 44 44" fill="none">
        <circle
          cx="22" cy="22" r="17"
          stroke="#B0FF96"
          strokeWidth="0.8"
          opacity={hovered ? 0.5 : 0.2}
          strokeDasharray="6 4"
          style={{ transition: 'opacity 0.4s ease' }}
        />
        {[
          { x1: 22, y1: 22, x2: 22, y2: 5 },
          { x1: 22, y1: 22, x2: 37, y2: 31 },
          { x1: 22, y1: 22, x2: 7, y2: 31 },
        ].map((l, i) => (
          <line
            key={i} {...l}
            stroke="#B0FF96"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="20"
            strokeDashoffset={hovered ? 20 : 0}
            opacity={hovered ? 0.2 : 1}
            style={{ transition: `stroke-dashoffset 0.4s ease ${i * 0.05}s, opacity 0.4s ease` }}
          />
        ))}
        <circle
          cx="22" cy="22"
          r={hovered ? 7 : 5}
          fill="#B0FF96"
          style={{ transition: 'r 0.3s ease' }}
        />
        {[
          { cx: 22, cy: 5 },
          { cx: 37, cy: 31 },
          { cx: 7, cy: 31 },
        ].map((c, i) => (
          <circle
            key={i} {...c}
            r={hovered ? 4 : 2.5}
            fill="#B0FF96"
            opacity={hovered ? 1 : 0.6}
            style={{ transition: 'r 0.3s ease, opacity 0.3s ease' }}
          />
        ))}
      </svg>
      <span className="logo__text">
        <span className="logo__accent">Matts</span>DevLab
      </span>
    </Link>
  );
}