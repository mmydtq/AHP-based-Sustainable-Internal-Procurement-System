import React, { useState, useEffect } from 'react';
import logo from "@/assert/Bottom.png";
import Image from 'next/image';

interface MousePosition {
    x: number;
    y: number;
}

const MouseFollower: React.FC = () => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }}>
            <Image
                src={logo}
                alt="Mouse Follower"
                style={{
                    position: 'absolute',
                    top: mousePosition.y,
                    left: mousePosition.x,
                    width: '50px',
                    height: '50px',
                    display: mousePosition.x !== 0 || mousePosition.y !== 0 ? 'block' : 'none',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </div>
    );
};

export default MouseFollower;
