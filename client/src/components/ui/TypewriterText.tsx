import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export function TypewriterText({ 
  words, 
  className = '', 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetweenWords = 2000,
  loop = true 
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
        } else {
          // Finished typing, wait before deleting
          setIsWaiting(true);
          setTimeout(() => {
            setIsWaiting(false);
            if (loop || currentWordIndex < words.length - 1) {
              setIsDeleting(true);
            }
          }, delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => {
            if (prev + 1 >= words.length) {
              return loop ? 0 : prev;
            }
            return prev + 1;
          });
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, delayBetweenWords, loop, isWaiting]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}