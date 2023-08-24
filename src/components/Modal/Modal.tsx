import React, { useState } from 'react';
import Modal  from '../../interfaces/Modal'
import '../../css/Modal/Modal.css'; // You can create a CSS file for styling

const MyModal: React.FC<Modal> = ({ isOpen=false, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
