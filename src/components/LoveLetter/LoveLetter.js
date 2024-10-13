import React, { useState, useRef, useEffect } from 'react';
import './LoveLetter.css';
import audioFile from './Apna-Bana-Le.mp3';

const LoveLetter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullSize, setIsFullSize] = useState(false);
    const audioRef = useRef(null);
    const letterRef = useRef(null); // Reference for the letter container
    const letterContentRef = useRef(null); // Reference for the actual letter content

    const handleOpenLetter = () => {
        setIsOpen(true);
        setTimeout(() => {
            setIsFullSize(true);
            // Ensuring audio play is directly a result of this user interaction
            if (audioRef.current) {
                audioRef.current.play()
                    .then(() => console.log("Playback succeeded"))
                    .catch(e => console.error("Playback failed:", e));
            }

            // Scroll to the top of the letter when fully opened
            if (letterContentRef.current) {
                letterContentRef.current.scrollTop = 0; // Reset scroll position to top
            }

            // Ensure the letter container is fully scrolled into view
            if (letterRef.current) {
                letterRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 800);
    };

    const handleCloseLetter = () => {
        setIsFullSize(false);
        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
            setIsOpen(false);
        }, 800);
    };

    // Ensure smooth scrolling if the text overflows when opened
    useEffect(() => {
        if (isFullSize && letterContentRef.current) {
            letterContentRef.current.scrollTop = letterContentRef.current.scrollHeight; // Auto-scroll to bottom
        }
    }, [isFullSize]);

    return (
        <div className={`envelope ${isOpen ? 'open' : ''}`}
             onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
            <div className="flap"></div>
            <div className="body"></div>
            <div className={`letter ${isFullSize ? 'fullSize' : ''}`} ref={letterRef}>
                <div className="letter-content" ref={letterContentRef}>  {/* Wrap content inside this for scrolling */}
                    My Love Priyam ❤️,<br/><br/>
                    How do I even begin to tell you how much you mean to me? Since the day you entered my life, everything has become brighter ☀️. Your smile, your words, your soft presence—they all bring peace to my soul 🌷. Without you, the world feels incomplete, as if something is missing deep within my heart 💔.<br/><br/>
                    Chotu babu, you are the heartbeat of my life ❤️. Every moment I spend with you feels like I’ve found my entire world 🌍. You are not just a part of my life; you are my life, my everything 💖. With you, each day brings new hope, new dreams 🌈. In your eyes, I see my home, and your laughter is the greatest joy in my life 🎉.<br/><br/>
                    I don’t just love you; you are my world, my soul, my entire universe 🌌. When you’re close, my heart feels so full that words can’t even describe it 🌟. Every moment with you becomes a story—one that I want to keep forever close to my heart 📖.<br/><br/>
                    Every beat of my heart is for you 💞, and my soul is forever connected to yours. Your love completes me, and I dream of always being by your side 🌹. Your happiness is my happiness, and your pain is my pain 😢.<br/><br/>
                    My Baby, you mean everything to me 💘. I will always stand by you, ready to do anything for your happiness 🎈. I will be with you as you chase your dreams, and I will help make them come true ✨.<br/><br/>
                    I love you endlessly, and I will always be yours 💕.<br/><br/>
                    Yours always,<br/>
                    Vinit
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                    <br/><br/>
                </div>
            </div>
            {<div className="hearts-container">
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
            </div>}
            <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)}/>
        </div>

    );
};

export default LoveLetter;
