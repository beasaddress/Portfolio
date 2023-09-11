import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer () {
    return (
        <footer>
            <p>Find me on my socials!</p>
            <div className='buttons'>
                <FontAwesomeIcon icon="fa-brands fa-github" />
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                <FontAwesomeIcon icon="fa-solid fa-at" />
            </div>
        </footer>
    );
    
}