import React from 'react';
import '../styles/GearButton.css';

const GearButton = ({ onClick, icon, ariaLabel }) => {
  // Terapkan kelas CSS khusus hanya jika ikon adalah '☀️' (matahari)
  const iconClassName = `gear-center-icon ${icon === '☀️' ? 'sun-icon-rotate' : ''}`;

  return (
    <button className="gear-btn" onClick={onClick} aria-label={ariaLabel || "Toggle theme"}>
      <span className="gear-svg-wrapper">
        <svg className="gear-svg" viewBox="0 0 40 40" width="40" height="40">
          <g>
            {/* Stroke color will be handled by CSS */}
            <circle cx="20" cy="20" r="12" fill="transparent" strokeWidth="2"/>
            {/* Gear teeth */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * Math.PI / 180;
              const x1 = 20 + Math.cos(angle) * 16;
              const y1 = 20 + Math.sin(angle) * 16;
              return (
                <rect
                  key={i}
                  x={x1 - 2}
                  y={y1 - 4}
                  width="4"
                  height="8"
                  rx="1"
                  fill="transparent"
                  /* Stroke color will be handled by CSS */
                  strokeWidth="1"
                  transform={`rotate(${i * 45}, ${x1}, ${y1})`}
                />
              );
            })}
          </g>
        </svg>
        <span className={iconClassName}>{icon}</span>
      </span>
    </button>
)};

export default GearButton;
