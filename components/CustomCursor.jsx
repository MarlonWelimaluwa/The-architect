'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Track mouse movement
        window.addEventListener('mousemove', updatePosition);

        // Track hover on interactive elements
        const interactiveElements = document.querySelectorAll('button, a, input, textarea');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[99999] transition-transform duration-100"
                style={{
                    transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 1.5 : 1})`,
                    opacity: 0.8,
                }}
            />

            {/* Trailing circle */}
            <div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/40 rounded-full pointer-events-none z-[99998] transition-all duration-200"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.3 : 1})`,
                    opacity: 0.6,
                }}
            />
        </>
    );
}