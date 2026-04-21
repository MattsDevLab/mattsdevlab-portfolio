import Link from 'next/link';

const pillars = [
    { label: 'Principle', value: 'Accessibility First' },
    { label: 'Approach', value: 'Systems Thinking' },
    { label: 'Standard', value: 'WCAG 2.2 AA' },
    { label: 'Focus', value: 'Continuous Improvement' },
];

export default function PhilosophyPreview() {
    return (
        <section className="philosophy s-pad">
            <div className="inner__wrapper">
                <div className="philosophy__lh-col">
                    <p className="sub-text">// Engineering Philosophy</p>
                    <h2 className="philosophy__title">
                        Engineering <span className="text-highlight">Clarity</span>{' '}
                        Out of Complexity.
                    </h2>
                    <p className="lead-text">
                        I don&apos;t approach frontend development as decoration. Every system 
                        I build is engineered to last — accessible by default, scalable by 
                        design, and maintainable by anyone who inherits it.
                    </p>
                    <p className="philosophy__body">
                        I specialise in finding the hidden order inside complex problems — 
                        then building the architecture that makes that order permanent.
                    </p>
                    <ul className="philosophy__pillars" aria-label="Engineering philosophy pillars">
                        {pillars.map((pillar) => (
                            <li key={pillar.label} className="philosophy__pillar">
                                <span className="philosophy__pillar-label">{pillar.label}</span>
                                <span className="philosophy__pillar-value">{pillar.value}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="philosophy__rh-col" aria-hidden="true">
                    <svg
                        className="philosophy__svg"
                        viewBox="0 0 480 480"
                        xmlns="http://www.w3.org/2000/svg"
                        focusable="false"
                    >
                        <circle cx="240" cy="240" r="180" fill="none" stroke="rgba(176,255,150,0.06)" strokeWidth="1"/>
                        <circle cx="240" cy="240" r="130" fill="none" stroke="rgba(176,255,150,0.08)" strokeWidth="1"/>
                        <circle cx="240" cy="240" r="80" fill="none" stroke="rgba(176,255,150,0.12)" strokeWidth="1"/>
                        <circle cx="240" cy="240" r="4" fill="#B0FF96" opacity="0.9"/>
                        <line x1="240" y1="60" x2="240" y2="420" stroke="rgba(176,255,150,0.06)" strokeWidth="1"/>
                        <line x1="60" y1="240" x2="420" y2="240" stroke="rgba(176,255,150,0.06)" strokeWidth="1"/>
                        <line x1="113" y1="113" x2="367" y2="367" stroke="rgba(176,255,150,0.04)" strokeWidth="1"/>
                        <line x1="367" y1="113" x2="113" y2="367" stroke="rgba(176,255,150,0.04)" strokeWidth="1"/>
                        <circle cx="240" cy="60" r="5" fill="none" stroke="#B0FF96" strokeWidth="1.5" opacity="0.7"/>
                        <circle cx="420" cy="240" r="5" fill="none" stroke="#B0FF96" strokeWidth="1.5" opacity="0.7"/>
                        <circle cx="240" cy="420" r="5" fill="none" stroke="#B0FF96" strokeWidth="1.5" opacity="0.4"/>
                        <circle cx="60" cy="240" r="5" fill="none" stroke="#B0FF96" strokeWidth="1.5" opacity="0.4"/>
                        <circle cx="240" cy="110" r="3" fill="#B0FF96" opacity="0.6"/>
                        <circle cx="370" cy="240" r="3" fill="#B0FF96" opacity="0.6"/>
                        <circle cx="240" cy="370" r="3" fill="#B0FF96" opacity="0.3"/>
                        <circle cx="110" cy="240" r="3" fill="#B0FF96" opacity="0.3"/>
                        <path d="M 240 60 A 180 180 0 0 1 420 240" fill="none" stroke="#B0FF96" strokeWidth="1.5" opacity="0.5"/>
                        <path d="M 240 110 A 130 130 0 0 1 370 240" fill="none" stroke="#B0FF96" strokeWidth="1" opacity="0.4"/>
                        <rect x="220" y="220" width="40" height="40" fill="none" stroke="rgba(176,255,150,0.2)" strokeWidth="1" transform="rotate(45 240 240)"/>
                        <rect x="210" y="210" width="60" height="60" fill="none" stroke="rgba(176,255,150,0.1)" strokeWidth="1" transform="rotate(45 240 240)"/>
                        <text x="252" y="175" fontFamily="monospace" fontSize="9" fill="#B0FF96" opacity="0.5">WCAG 2.2 AA</text>
                        <text x="312" y="235" fontFamily="monospace" fontSize="9" fill="#B0FF96" opacity="0.4">A11Y</text>
                        <text x="245" y="308" fontFamily="monospace" fontSize="9" fill="#B0FF96" opacity="0.3">SYSTEMS</text>
                        <circle cx="160" cy="160" r="2" fill="#B0FF96" opacity="0.3"/>
                        <circle cx="320" cy="160" r="2" fill="#B0FF96" opacity="0.5"/>
                        <circle cx="160" cy="320" r="2" fill="#B0FF96" opacity="0.2"/>
                        <circle cx="320" cy="320" r="2" fill="#B0FF96" opacity="0.3"/>
                        <circle cx="190" cy="130" r="1.5" fill="#B0FF96" opacity="0.4"/>
                        <circle cx="350" cy="190" r="1.5" fill="#B0FF96" opacity="0.6"/>
                        <circle cx="300" cy="340" r="1.5" fill="#B0FF96" opacity="0.25"/>
                        <line x1="240" y1="60" x2="160" y2="160" stroke="rgba(176,255,150,0.08)" strokeWidth="1"/>
                        <line x1="420" y1="240" x2="320" y2="160" stroke="rgba(176,255,150,0.08)" strokeWidth="1"/>
                        <line x1="320" y1="160" x2="240" y2="110" stroke="rgba(176,255,150,0.05)" strokeWidth="1"/>
                    </svg>
                </div>
            </div>
        </section>
    );
}