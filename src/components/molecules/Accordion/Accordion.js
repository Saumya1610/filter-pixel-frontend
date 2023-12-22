import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../atoms/Button/Button";
import "./Accordion.css";
import { MdKeyboardArrowDown,MdKeyboardArrowUp } from "react-icons/md";


const Accordion = ({title,content }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="accordion">
            <Button className="accordion-header" onClick={toggleAccordion}>
                {title}
                <span className="arrow-icon">{isExpanded ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
            </Button>
            {isExpanded && <div className="accordion-content">{content}</div>}
        </div>
    );
};

Accordion.PropTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
}
export default Accordion;