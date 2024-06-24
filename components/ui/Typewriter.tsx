import React, { useEffect, useState } from "react";

interface TypewriterProps {
    texts: string[];
    typeSpeed?: number;
    pause?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, typeSpeed = 100, pause = 2000 }) => {
    const [currentText, setCurrentText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (charIndex > 0) {
                    setCurrentText((prev) => prev.slice(0, -1));
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            } else {
                if (charIndex < texts[textIndex].length) {
                    setCurrentText((prev) => prev + texts[textIndex].charAt(charIndex));
                    setCharIndex((prev) => prev + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            }
        };

        const typingTimeout = setTimeout(handleTyping, isDeleting ? typeSpeed / 2 : typeSpeed);

        return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, texts, textIndex, typeSpeed, pause]);

    return (
        <div className="inline-block min-w-[300px] text-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl">
            <span>{currentText}</span>
            <span className="blinking-cursor">|</span>
        </div>
    );
};

export default Typewriter;
