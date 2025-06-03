import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 100, initialDelay: number = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    console.log('[Effect Start] Input text:', text);
    setDisplayedText(''); // Reset on text change or initial load
    setIsTypingComplete(false);
    let timeoutId: NodeJS.Timeout;

    if (initialDelay > 0) {
      console.log(`[Effect Start] Scheduling startTyping with delay: ${initialDelay}ms`);
      timeoutId = setTimeout(() => {
        console.log('[Effect Start] setTimeout callback: Executing startTyping()');
        startTyping();
      }, initialDelay);
    } else {
      console.log('[Effect Start] Calling startTyping() immediately');
      startTyping();
    }

    function startTyping() {
      console.log('[startTyping] Function called. Text length:', text?.length);
      if (text && text.length > 0) {
        let i = 0;
        console.log('[startTyping] Initializing i to 0.');
        const typingInterval = setInterval(() => {
          if (i < text.length) {
            const charForThisTick = text.charAt(i);
            setDisplayedText(prev => {
              console.log(`[setInterval] Tick. Current i: ${i}, charAt(i): '${charForThisTick}', prev displayedText: '${prev}'`);
              return prev + charForThisTick;
            });
            i++; // Increment i for the next interval tick
          } else {
            console.log('[setInterval] Clearing interval. Typing complete.');
            clearInterval(typingInterval);
            setIsTypingComplete(true);
          }
        }, speed);
        return () => {
          console.log('[startTyping] Cleanup: Clearing typingInterval.');
          clearInterval(typingInterval);
        };
      } else {
        console.log('[startTyping] Text is null or empty. Not starting interval.');
      }
    }
    
    return () => {
      console.log('[Effect Cleanup] Clearing initialDelay timeoutId.');
      clearTimeout(timeoutId);
    };

  }, [text, speed, initialDelay]);

  return { displayedText, isTypingComplete };
};

export default useTypingEffect; 