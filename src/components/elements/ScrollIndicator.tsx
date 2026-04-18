'use client';
 
import { useCallback } from 'react';

export default function ScrollIndicator() {

    const handleClick = useCallback(() => {
        const nextSection = document.querySelector('main > section:nth-child(2)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <button
            className="scroll-indicator"
            onClick={handleClick}
            aria-label="Scroll to next section"
        >
            <span className="scroll-indicator__line" aria-hidden="true">
                <span className="scroll-indicator__drop"></span>
            </span>
            <span className="scroll-indicator__dot" aria-hidden="true"></span>
        </button>
    );
}