import React from "react";
import PropTypes from "prop-types";
import "./ThumbnailWrapper.css";
import ImageWrapper from "../../atoms/ImageWrapper/ImageWrapper";

const ThumbnailWrapper = ({ images, onSelect, selectedImageIndex, className }) => {
    console.log(images);
    return (
      <div className={`thumbnail-wrapper ${className}`}>
        {images.map((image, index) => (
          <ImageWrapper
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => onSelect(index)}
            isThumbnail
            className={`thumbnail-image ${selectedImageIndex === index ? "selected" : ""}`}
          />
        ))}
      </div>
    );
  };
  

ThumbnailWrapper.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedImageIndex: PropTypes.number.isRequired,
};

export default ThumbnailWrapper;
