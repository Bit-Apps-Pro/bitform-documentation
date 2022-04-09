import React, { useState } from 'react';


const Copy = ({ text }) => {
    const [buttonText, setButtonText] = useState("Copy");
    const copyClipBoard = () => {
        navigator.clipboard.writeText(text);
        setButtonText('Copied');
        setTimeout(() => setButtonText('Copy'), [1000])
    }
    return (
        <div className='clipboard'>
            {text}
            <button onClick={copyClipBoard} className="onclick-copy-value">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className='tooltiptext'>{buttonText}</span>
            </button>
        </div>
    );
};

export default Copy;