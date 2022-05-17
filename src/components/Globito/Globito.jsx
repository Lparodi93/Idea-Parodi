import React from 'react';
import './globito.css';

function Globito({ children, isButton, onBlubbleClick }) {
    return (
        <div className={`bubble ${isButton ? 'bubble-button' : ''}`} onClick={() => isButton && onBlubbleClick()}>
            {children}
        </div>
    )
}

export default Globito