import React, { useRef } from 'react';
import './styling/interactivecard.css';

const InteractiveCard = ({ children }) => {
  const cardRef = useRef();

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const xPos = (e.clientX - rect.left) / rect.width;
    const yPos = (e.clientY - rect.top) / rect.height;
    const xRotation = 10 * (yPos - 0.5);
    const yRotation = -10 * (xPos - 0.5);
    const angle = 90 * xPos;
    
    cardRef.current.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    cardRef.current.style.borderImageSource = `linear-gradient(${angle}deg, #031a6b, #033860)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    cardRef.current.style.borderImageSource = 'none';
  };

  return (
    <div
      className="interactive-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default InteractiveCard;
