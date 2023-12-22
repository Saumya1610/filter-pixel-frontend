import React from "react";
import PropTypes from "prop-types";
import "./BannerWrapper.css";
import ImageWrapper from "../../atoms/ImageWrapper/ImageWrapper";


const BannerWrapper = ({ onClick, src, alt, className }) => {
    const bannerClasses = `banner-image ${className || ''}`;
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <ImageWrapper
            src={src}
            alt={alt}
            className={bannerClasses}
            onClick={handleClick}
        />
    );
};

BannerWrapper.propTypes = {
    onClick: PropTypes.func,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default BannerWrapper;