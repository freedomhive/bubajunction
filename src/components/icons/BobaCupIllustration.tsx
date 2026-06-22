"use client";

export function BobaCupIllustration() {
  return (
    <svg
      viewBox="0 0 360 460"
      className="w-full h-full"
      role="img"
      aria-label="Illustration of a Buba Junction boba tea cup with a crown on top and tapioca pearls settling at the bottom"
    >
      <defs>
        <clipPath id="cupBody">
          <path d="M96 168 L264 168 L244 420 Q244 440 224 440 L136 440 Q116 440 116 420 Z" />
        </clipPath>
      </defs>

      <ellipse cx="180" cy="446" rx="86" ry="10" fill="#0b2a4a" opacity="0.08" />

      <g className="bj-pearl-drop" style={{ transformOrigin: "180px 250px" }}>
        <g clipPath="url(#cupBody)">
          <rect x="96" y="168" width="168" height="280" fill="#eaf9fc" />
          <rect x="96" y="168" width="168" height="280" fill="#bdeff7" opacity="0.55" />

          <g fill="#3e2723">
            <circle className="bj-pearl bj-pearl-1" cx="134" cy="410" r="11" />
            <circle className="bj-pearl bj-pearl-2" cx="160" cy="420" r="11" />
            <circle className="bj-pearl bj-pearl-3" cx="186" cy="408" r="11" />
            <circle className="bj-pearl bj-pearl-4" cx="212" cy="418" r="11" />
            <circle className="bj-pearl bj-pearl-5" cx="238" cy="406" r="11" />
            <circle className="bj-pearl bj-pearl-6" cx="148" cy="432" r="11" />
            <circle className="bj-pearl bj-pearl-7" cx="174" cy="434" r="11" />
            <circle className="bj-pearl bj-pearl-8" cx="200" cy="432" r="11" />
            <circle className="bj-pearl bj-pearl-9" cx="226" cy="434" r="11" />
          </g>
        </g>

        <path
          d="M96 168 L264 168 L244 420 Q244 440 224 440 L136 440 Q116 440 116 420 Z"
          fill="none"
          stroke="#0b2a4a"
          strokeWidth="6"
          strokeLinejoin="round"
        />

        <path d="M96 168 L264 168" stroke="#0b2a4a" strokeWidth="6" strokeLinecap="round" />
        <path d="M104 200 L256 200" stroke="#0b2a4a" strokeOpacity="0.25" strokeWidth="2" />
        <path d="M110 320 L250 320" stroke="#0b2a4a" strokeOpacity="0.18" strokeWidth="2" />

        <rect x="86" y="150" width="188" height="22" rx="10" fill="#0b2a4a" />
        <rect x="86" y="150" width="188" height="9" rx="4" fill="#173f63" />

        <g>
          <path
            d="M178 150 L178 36"
            stroke="#0b2a4a"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M178 150 L178 36"
            stroke="#ff7a59"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </g>

        <g transform="translate(140 0)">
          <path
            d="M8 36 L0 8 L20 22 L38 0 L56 22 L76 8 L68 36 Z"
            fill="#e8b84b"
            stroke="#0b2a4a"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="8" r="6" fill="#e8b84b" stroke="#0b2a4a" strokeWidth="4" />
          <circle cx="38" cy="0" r="7" fill="#e8b84b" stroke="#0b2a4a" strokeWidth="4" />
          <circle cx="76" cy="8" r="6" fill="#e8b84b" stroke="#0b2a4a" strokeWidth="4" />
        </g>
      </g>

      <style>{`
        .bj-pearl-drop {
          animation: bjFloat 4.5s ease-in-out infinite;
        }
        .bj-pearl {
          animation: bjSettle 0.6s ease-out backwards;
        }
        .bj-pearl-1 { animation-delay: 0.05s; }
        .bj-pearl-2 { animation-delay: 0.12s; }
        .bj-pearl-3 { animation-delay: 0.19s; }
        .bj-pearl-4 { animation-delay: 0.26s; }
        .bj-pearl-5 { animation-delay: 0.33s; }
        .bj-pearl-6 { animation-delay: 0.4s; }
        .bj-pearl-7 { animation-delay: 0.47s; }
        .bj-pearl-8 { animation-delay: 0.54s; }
        .bj-pearl-9 { animation-delay: 0.61s; }

        @keyframes bjSettle {
          0% { transform: translateY(-160px); opacity: 0; }
          70% { opacity: 1; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes bjFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .bj-pearl-drop, .bj-pearl {
            animation: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </svg>
  );
}
