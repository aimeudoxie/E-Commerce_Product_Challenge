import React, { useState } from 'react';
import './product.css';
import image1 from './assets/image-product-1.jpg';
import image2 from './assets/image-product-2.jpg';
import image3 from './assets/image-product-3.jpg';
import image4 from './assets/image-product-4.jpg';
import next from './assets/next.png';
import previous from './assets/previous.png';
import closemodal from './assets/closemodal.png';

const Product: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>(image1); 
  const [selectedModalImage, setSelectedModalImage] = useState<string>(selectedImage); 
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const imageUrls = [image1, image2, image3, image4];

  const handleImageClick = (imageUrl: string, index: number) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };
  const handleModalImageClick = (imageUrl: string, index: number) => {
    setSelectedModalImage(imageUrl);
    setCurrentIndex(index);
  };
  

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    setSelectedImage(imageUrls[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    setSelectedImage(imageUrls[prevIndex]);
    setCurrentIndex(prevIndex);
  };
  
  const nextModalImage = () => {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    setSelectedModalImage(imageUrls[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevModalImage = () => {
    const prevIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    setSelectedModalImage(imageUrls[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <div id="product-image">
        <div id="main-image" onClick={() => openModal(selectedImage)}>
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
        <div className="arrow-right-arrow" onClick={nextImage}><img src={next} alt="" /></div>
        <div className="arrow-left-arrow" onClick={prevImage}><img src={previous} alt="" /></div>
        <div id="alt-images">
          {imageUrls.map((imageUrl, index) => (
            <div key={index} className={`thumbnail-container ${selectedImage === imageUrl ? 'selected-thumbnail' : ''}`} onClick={() => handleImageClick(imageUrl, index)}
            >
              <img src={imageUrl} alt={`Image ${index + 1}`} />
              {selectedImage === imageUrl && <div className="overlay"></div>}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close">
              <img src={closemodal} alt="" onClick={closeModal} />
            </div>
            <img src={selectedModalImage} alt="Selected" className="modal-main-image" />
            <div className="modal-right-arrow" onClick={nextModalImage}><img src={next} alt="" /></div>
          <div className="modal-left-arrow" onClick={prevModalImage}><img src={previous} alt="" /></div>
            <div className="alt-images-modal">
              {imageUrls.map((imageUrl, index) => (
                <div
                  key={index}
                  className={`thumbnail-container ${selectedModalImage === imageUrl ? 'selected-thumbnail' : ''}`}
                  onClick={() => handleModalImageClick(imageUrl, index)}
                >
                  <img src={imageUrl} alt={`Image ${index + 1}`} />
                  {selectedModalImage === imageUrl && <div className="overlay"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
