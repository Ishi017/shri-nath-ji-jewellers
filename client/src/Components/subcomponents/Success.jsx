import React, { useEffect } from 'react';
import '../../Styles/Success.css';

const SuccessPopup = ({ isVisible, message, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          <div className="loader"></div>
          <p>{message}</p>
        </div>
      </div>
    )
  );
};

export default SuccessPopup;