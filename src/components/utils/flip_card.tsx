import React, { useState, ReactNode } from "react";
import "../../style/FlipCard.css";

interface FlipCardProps {
  frontContent: ReactNode;
  backContent: ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="flip-card-container aspect-[9/16] md:aspect-[16/10] border border-black"
      onClick={handleFlip}
    >
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-front">{frontContent}</div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
