import React, { useEffect, useState } from 'react';
import './Home.css';
import Sidebar from '../../organisms/Sidebar/Sidebar';
import Slideshow from '../../organisms/Slideshow/Slideshow';
import Loader from '../../atoms/Loader/Loader';
import Image2 from "../../../assets/img2.jpg";
import Image3 from "../../../assets/img3.jpg";
import Image4 from "../../../assets/img4.jpg";
import Image5 from "../../../assets/img5.jpg";
import Image6 from "../../../assets/img6.jpg";
import Image7 from "../../../assets/img7.jpg";
import Image8 from "../../../assets/img8.jpg";
import Image9 from "../../../assets/img9.jpg";
import Image10 from "../../../assets/img10.jpg";

function Home() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(1);
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const images = [
        { src: Image2, alt: "Image 2", name: "img2" },
        { src: Image3, alt: "Image 3", name: "img3" },
        { src: Image4, alt: "Image 4", name: "img4" },
        { src: Image5, alt: "Image 5", name: "img5" },
        { src: Image6, alt: "Image 6", name: "img6" },
        { src: Image7, alt: "Image 7", name: "img7" },
        { src: Image8, alt: "Image 8", name: "img8" },
        { src: Image9, alt: "Image 9", name: "img9" },
        { src: Image10, alt: "Image 10", name: "img10" },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/');
                const data = await response.json();
    
                const sortedData = data.sort((a, b) => {
                    const fileNameA = a.file_path.replace(/\.[^/.]+$/, "");
                    const fileNameB = b.file_path.replace(/\.[^/.]+$/, "");
                    return parseInt(fileNameA.replace(/[^\d]/g, ''), 10) - parseInt(fileNameB.replace(/[^\d]/g, ''), 10);
                });
    
                setApiData(sortedData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        fetchData();
    }, []);
    const handleThumbnailClick = (index) => {
        const selectedImageName = images[index].name;
        console.log(selectedImageName)
        const selectedImageIndex = apiData.findIndex((item) => {
            const fileNameWithoutExtension = item.file_path.replace(/\.[^/.]+$/, ""); // Remove file extension
            return fileNameWithoutExtension === selectedImageName;
        });

        if (selectedImageIndex !== -1) {
            console.log(selectedImageIndex);
            setSelectedImageIndex(selectedImageIndex);
        } else {
            console.error('Image not found in apiData:', selectedImageName);
        }
    };


    return (
        <div className="App">
            <Slideshow
                className="slideshow"
                images={images}
                selectedImageIndex={selectedImageIndex}
                onThumbnailClick={handleThumbnailClick}
            />
            {loading ? (
                <Loader />
            ) : (
                <Sidebar
                    className="sidebar"
                    apiData={apiData[selectedImageIndex]}
                    selectedImageIndex={selectedImageIndex}
                />
            )}
        </div>
    );
}

export default Home;
