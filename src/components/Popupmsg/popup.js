import React from 'react';
import './popup.css';

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default Popup;
