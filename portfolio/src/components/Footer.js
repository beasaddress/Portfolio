import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer () {
    return (
        <footer>
            <p>Find me on my socials!</p>
            <div className='buttons'>
                <FontAwesomeIcon icon={faCodeCompare} />
                <FontAwesomeIcon icon={faAddressCard} />
                <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </footer>
    );
    
}