// components/atoms/ImageWrapper/ImageWrapper.js
import React from "react";
import PropTypes from "prop-types";
import "./ImageWrapper.css";

const ImageWrapper = ({ onClick, src, alt, className, isThumbnail }) => {
  const imageClasses = `image ${className || ''}`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`${imageClasses} ${isThumbnail ? 'thumbnail' : ''}`}
      onClick={handleClick}
    />
  );
};

ImageWrapper.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  isThumbnail: PropTypes.bool,
};

export default ImageWrapper;
