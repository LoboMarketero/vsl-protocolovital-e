import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  return (
    <div 
      className="progress-bar"
      style={{ width: `${scrollProgress}%` }}
    />
  );
};

export default ProgressBar;