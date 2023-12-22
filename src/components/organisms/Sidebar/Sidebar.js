import React, { useState, useEffect } from "react";
import Accordion from "../../molecules/Accordion/Accordion";
import Button from "../../atoms/Button/Button";
import "./Sidebar.css";
import Loader from "../../atoms/Loader/Loader";

const Sidebar = ({ className, loading,apiData }) => {
    console.log(apiData)
    console.log(apiData.artist)

    

    return (
        <div className={`sidebar ${className}`}>
            {loading ? (
                <Loader />
            ) : (
                <Accordion title="About Image" content={(<>
                    <p>Lens</p><p>{apiData.lens}</p>
                    <p>Capture Time</p><p>{apiData.capture_time_date}</p>
                    <p>ISO</p><p>{apiData.iso_speed}</p>
                    <p>Speed</p><p>{apiData.iso_speed_rating}</p>
                    <p>FileName</p><p>{apiData.file_path}</p>
                    <p>Artist</p><p>{apiData.artist}</p>
                    <p>ImageSize</p><p>{apiData.size}</p>
                    <p>WhiteBalance</p><p>{apiData.white_balance}</p>
                    <p>Focal Length</p><p>{apiData.focal_length}</p>
                    <p>Rating</p><p>{apiData.rating}</p>
                    <p>Colour</p><p>{apiData.color}</p>
                    <p>Camera</p><p>{apiData.camera}</p>
                </>)} />
            )}
            <div className="button-container">
                <Button className="sidebar-button" onClick="">Download <span>{'\u232A'}</span></Button>
            </div>
        </div>
    );
};

export default Sidebar;