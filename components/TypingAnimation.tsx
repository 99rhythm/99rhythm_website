import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  pauseDuration?: number;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 100, 
  pauseDuration = 2000,
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  // Function to get random typing delay
  const getRandomDelay = (baseSpeed: number, char: string) => {
    // Base variation: ±50% of base speed
    const variation = baseSpeed * 0.5;
    let randomDelay = baseSpeed + (Math.random() - 0.5) * variation;
    
    // Add extra delays for certain characters to simulate human typing
    if (char === ' ') {
      randomDelay += Math.random() * 50; // Space pause
    } else if (char === '.' || char === ',' || char === '!' || char === '’') {
      randomDelay += Math.random() * 100; // Punctuation pause
    } else if (Math.random() < 0.1) {
      randomDelay += Math.random() * 200; // Random hesitation
    }
    
    return Math.max(30, randomDelay); // Minimum 30ms delay
  };

  useEffect(() => {
    const currentChar = text[currentIndex];
    const delay = isTyping && currentIndex < text.length ? 
      getRandomDelay(speed, currentChar) : speed;

    const timer = setTimeout(() => {
      if (isTyping && currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isTyping && currentIndex === text.length) {
        // Finished typing, pause before restarting
        setTimeout(() => {
          setIsTyping(false);
          setCurrentIndex(0);
          setDisplayText('');
          setTimeout(() => {
            setIsTyping(true);
          }, 500);
        }, pauseDuration);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text, speed, pauseDuration]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
};

export default TypingAnimation;
