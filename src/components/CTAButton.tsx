import React from 'react';

interface CTAButtonProps {
  text: string;
  className?: string;
  isPrimary?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  className = '', 
  isPrimary = true,
  onClick 
}) => {
  const baseClassName = isPrimary ? 'button-primary' : 'button-secondary';
  
  const handleClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
    onClick?.();
  };
  
  return (
    <button 
      className={`${baseClassName} animate-pulse-slow ${className}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default CTAButton;