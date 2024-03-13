import "./product.css";
import React, { useState } from 'react';
import image1 from './assets/image-product-1.jpg';
import image2 from './assets/image-product-2.jpg';
import image3 from './assets/image-product-3.jpg';
import image4 from './assets/image-product-4.jpg';

const Product: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(image1);

  const imageUrls = [image1, image2, image3, image4];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <>
      <div id="product-image">
        <div id='main-image'>
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
        <div id='alt-images'>
          {imageUrls.map((imageUrl, index) => (
            <div
              key={index}
              className={`thumbnail-container ${selectedImage === imageUrl ? 'selected-thumbnail' : ''}`}
              onClick={() => handleImageClick(imageUrl)}
            >
              <img src={imageUrl} alt={`Image ${index + 1}`} />
              {selectedImage === imageUrl && <div className="overlay"></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
