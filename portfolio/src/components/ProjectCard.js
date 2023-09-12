import React from 'react';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectCard({ title, imageSrc, ghLink, technologies, description}) {
    return (
        <div className='projectCard'>
            <a href={ghLink} target="_blank" rel='noopener noreferrer'>
                <img className='images' src={imageSrc} alt={title} />
            </a>
            <div className='projectDetails'>
                <div className='title'>
                    <h2>{title}</h2>
                    <div className='divider'></div>
                    <a href={ghLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCodeCompare} size="2x" /> 
                    </a>
                </div>
                <h3>{technologies}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}