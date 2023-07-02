import React from 'react';
import './videostyle.css';

interface Photo {
  src: string;
  title: string;
  link: string;
}

const photos: Photo[] = [
  {
    src: '/videos/img1.jpeg',
    title: 'Photo 1',
    link: '/photo1',
  },
  {
    src: '/videos/img2.jpeg',
    title: 'Photo 2',
    link: '/photo2',
  },
  {
    src: '/videos/img3.jpeg',
    title: 'Photo 2',
    link: '/photo2',
  },
  // Add more photo objects as needed
];

const PhotoGallery: React.FC = () => {
  return (
    <div className="photo-gallery">
      {photos.map((photo, index) => (
        <a href={photo.link} key={index} className="photo-link">
          <div className="photo-container">
            <img src={photo.src} alt={photo.title} className="photo" />
            <div className="photo-title">{photo.title}</div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PhotoGallery;

