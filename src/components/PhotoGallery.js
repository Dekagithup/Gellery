import React, { useState } from 'react';
import PhotoModal from './PhotoModal';
import './PhotoGallery.css'; // Add your styles here

const photos = [
    { id: 1, src: 'url_to_src/img2.jpg', alt: 'Description 1' },
    { id: 2, src: 'url_to_src/img1.jpg', alt: 'Description 2' }, 
     { id: 1, src: 'url_to_src/img3.jpg', alt: 'Description 1' },
    { id: 2, src: 'url_to_src/img4.jpg', alt: 'Description 2' },
  // Add more photos as needed
];

const PhotoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="photo" onClick={() => openModal(photo)}>
          <img src={photo.src} alt={photo.alt} />
        </div>
      ))}
      {modalOpen && <PhotoModal photo={selectedPhoto} onClose={closeModal} />}
    </div>
  );
};

export default PhotoGallery;