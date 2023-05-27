import React, { useState, useEffect } from 'react';
import { HeroText } from '../styles/homestyle';

const TypedHeroText = ({ text, delay = 0 }) => {
  const [content, setContent] = useState('');
  const typingDelay = 100;

  useEffect(() => {
    let i = 0;
    // Add initial delay before typing starts
    const initialDelayTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          setContent((content) => content + text.charAt(i));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, typingDelay);

      // Cleanup interval when component unmounts
      return () => clearInterval(typingInterval);
    }, delay);

    // Cleanup timeout when component unmounts
    return () => clearTimeout(initialDelayTimeout);
  }, [text, delay, typingDelay]);

  return <HeroText>{content}</HeroText>;
};

export default TypedHeroText;
