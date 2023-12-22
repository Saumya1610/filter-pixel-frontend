import React, { useState } from "react";
import PropTypes from "prop-types";
import ThumbnailWrapper from "../../molecules/ThumbnailWrapper/ThumbnailWrapper";
import BannerWrapper from "../../molecules/BannerWrapper/BannerWrapper";
import "./Slideshow.css";

const Slideshow = ({ images, className, onThumbnailClick, selectedImageIndex }) => {
    return (
      <div className={`slideshow-gallery ${className}`}>
        <BannerWrapper
          src={images[selectedImageIndex]?.src}
          alt={images[selectedImageIndex]?.alt}
          className="big-image"
        />
        <ThumbnailWrapper
          images={images} 
          className="slideshow-thumbnail-wrapper"
          onSelect={onThumbnailClick}
          selectedImageIndex={selectedImageIndex}
        />
      </div>
    );
  };
  

Slideshow.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slideshow;
