//WHEN I am presented with the Resume section
//THEN I see a link to a downloadable resume 
//and a list of the developer’s proficiencies

import React from 'react';
import resume from '../utils/Resume.pdf';

export default function Resume() {    
    const handleDownload = () => {
        const newEle = document.createElement('a');
        const file = new Blob([resume], { type: 'application/pdf' });
        newEle.href = URL.createObjectURL(file);
        newEle.download = `BeatrizSResume.pdf`;
        document.body.appendChild(newEle);
        newEle.click();
        newEle.remove();

    };
    
    return (
        <div>
            <button onClick={handleDownload}>
                Download my resume!
            </button>
        </div>
    );
}
//${generateRandomId()} before .pdf