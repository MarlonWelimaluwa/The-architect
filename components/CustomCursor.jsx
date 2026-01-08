'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Disable on mobile/touch devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        window.addEventListener('mousemove', updatePosition);

        const interactiveElements = document.querySelectorAll('button, a, input, textarea');
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('resize', checkMobile);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    if (!isVisible || isMobile) return null;

    return (
        <>
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[99999] transition-transform duration-75"
                style={{
                    transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 2 : 1})`,
                    opacity: 0.8,
                }}
            />
            <div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-primary/40 rounded-full pointer-events-none z-[99998] transition-all duration-150 ease-out"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
                    opacity: 0.6,
                }}
            />
        </>
    );
}