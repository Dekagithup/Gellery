import React from 'react';
import ReactModal from 'react-modal';
import './PhotoModal.css'; // Add your styles here

const PhotoModal = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <ReactModal isOpen={true} onRequestClose={onClose} className="modal" overlayClassName="overlay">
      <button onClick={onClose} className="close-btn">×</button>
      <img src={photo.src} alt={photo.alt} className="modal-image" />
    </ReactModal>
  );
};

export default PhotoModal;