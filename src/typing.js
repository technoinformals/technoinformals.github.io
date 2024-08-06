import React, { useEffect, useState } from 'react';

function TypingAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const maxFlickerCount = 4; // Flicker twice

  useEffect(() => {
    let flickerCount = 0;

    const flickerInterval = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
      flickerCount++;

      if (flickerCount >= maxFlickerCount) {
        clearInterval(flickerInterval);
      }
    }, 150); // Adjust the flicker speed as needed (in milliseconds)

    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  return (
    <div className="typing-animation" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      The Entertainment and Management Cluster <br></br>of SASTRA University.
    </div>
  );
}

export default TypingAnimation;
