import React from 'react';

import './toggleBtn.css';


const ToggleBtn = ({onClick}) => {

    return(
        <button 
            className="toggle-btn"
            onClick={onClick}>Toggle random character
        </button>
    )

}

export default ToggleBtn;