import React from 'react';
import './SectionDivider.css';

const SectionDivider: React.FC = () => {
  return (
    <div className="section-divider">
      <div className="divider-line"></div>
      <div className="divider-logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none" />
          <path d="M12 8l-6 12h12L12 8z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" fill="none" />
        </svg>
      </div>
      <div className="divider-line"></div>
    </div>
  );
};

export default SectionDivider;
