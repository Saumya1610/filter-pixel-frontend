import React, { useState, useEffect } from "react";
import Accordion from "../../molecules/Accordion/Accordion";
import Button from "../../atoms/Button/Button";
import "./Sidebar.css";
import Loader from "../../atoms/Loader/Loader";

const Sidebar = ({ className, loading, apiData }) => {
    console.log(apiData)
    console.log(apiData.artist)



    return (
        <div className={`sidebar ${className}`}>
            {loading ? (
                <Loader />
            ) : (
                <Accordion title="About Image" content={(<>
                    <div className="accordion-div">
                        <p>Lens:</p><span>{apiData.lens || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Capture Time:</p><span>{apiData.capture_time_date || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>ISO:</p><span>{apiData.iso_speed || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Speed:</p><span>{apiData.iso_speed_rating || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>FileName:</p><span>{apiData.file_path || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Artist:</p><span>{apiData.artist || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>ImageSize:</p><span>{apiData.size || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>WhiteBalance:</p><span>{apiData.white_balance || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Focal Length:</p><span>{apiData.focal_length || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Rating:</p><span>{apiData.rating || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Colour:</p><span>{apiData.color || "Not Available"}</span>
                    </div>
                    <div className="accordion-div">

                        <p>Camera:</p><span>{apiData.camera || "Not Available"}</span>
                    </div>

                </>)} />
            )}
            <div className="button-container">
                <Button className="sidebar-button" onClick="">Download <span>{'\u232A'}</span></Button>
            </div>
        </div>
    );
};

export default Sidebar;