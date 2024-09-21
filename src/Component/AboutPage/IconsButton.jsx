// src/components/IconButton.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faStar } from '@fortawesome/free-solid-svg-icons';
import './IconButton.css';

const IconButton = () => {
    return (
        <button className="icon-button">
            <FontAwesomeIcon icon={faCodeBranch} className="icon" />
            <FontAwesomeIcon icon={faStar} className="icon" />
        </button>
    );
}

export default IconButton;
