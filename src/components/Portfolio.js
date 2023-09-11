//WHEN I am presented with the Portfolio section
//THEN I see titled images of six of the developer’s 
//applications with links to both the deployed applications 
//and the corresponding GitHub repositories

import React from 'react';
import ProjectCard from './ProjectCard';


import designDepo from '../utils/images/background-image3.jpg';
import fiGlance from '../utils/images/background-image4.jpg';
import jate from '../utils/images/logo.png';

export default function Portfolio() {
    return (
        <div id='projects'>
            <h1 className='title'>
                My Projects
            </h1>
            <div className='projectContainer'>
                <ProjectCard
                    title="Design Depo"
                    imageSrc={designDepo}
                    ghLink="https://github.com/beasaddress/design-depo"
                    technolgies="JavaScript MongoDB React Node.js Express.js"
                    description="A creative's tool for generating hex codes, palettes, and gradients. MongoDB for users to store their design collections."
                />
                <ProjectCard
                    title="Fi-Glance"
                    imagesSrc={fiGlance}
                    ghLink="https://github.com/beasaddress/Personal-Finance-Manager"
                    technologies="Javascript, Plaid API, Express.js, Node.js, MySql"
                    description="An all inclusive financial management platform for users to track spending and manage budgets."
                />

                <ProjectCard
                    title="Text Editor"
                    imagesSrc={jate}
                    ghLink="https://github.com/beasaddress/PWA-Text-Editor"
                    technologies="Javascript, codemirror, IndexedDB, Express.js, and Node.js"
                    description="sers can take and save notes and will be ensured that the notes will be saved in IndexedDB so that if they close and re-open their app, their previous notes were saved, retrieved from the database, and displayed to the user."
                />
            </div>
        </div>
    )
}