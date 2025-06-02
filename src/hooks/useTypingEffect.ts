import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 100, initialDelay: number = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText(''); // Reset on text change or initial load
    setIsTypingComplete(false);
    let timeoutId: NodeJS.Timeout;

    if (initialDelay > 0) {
      timeoutId = setTimeout(() => startTyping(), initialDelay);
    } else {
      startTyping();
    }

    function startTyping() {
      if (text && text.length > 0) {
        let i = 0;
        const typingInterval = setInterval(() => {
          if (i < text.length) {
            setDisplayedText((prev) => prev + text.charAt(i));
            i++;
          } else {
            clearInterval(typingInterval);
            setIsTypingComplete(true);
          }
        }, speed);
        return () => clearInterval(typingInterval); // Cleanup interval on unmount or text change
      }
    }
    
    return () => clearTimeout(timeoutId); // Cleanup initial delay timeout

  }, [text, speed, initialDelay]);

  return { displayedText, isTypingComplete };
};

export default useTypingEffect; 