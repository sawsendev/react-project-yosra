import React from 'react';
import './popup.css';
import { FaRegFaceSmileBeam, FaRegFaceFrown } from "react-icons/fa6";

const Popup = ({ message, status, onClose }) => {
  const icon = status === 'error' ? <FaRegFaceFrown /> : <FaRegFaceSmileBeam />;
  return (
    <div className="popup popup-msg-alert d-flex justify-content-center align-items-center">
      <div className="popup-content">
        <div className='popup-body'>
          <div className='icon-msg'>{icon}</div>
          <div className="message text-center">{message}</div>
          <button className="btn close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
