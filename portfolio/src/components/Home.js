import React, { useState } from 'react';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';


export default function Home() {
    const[currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <Contact />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        return <Resume />;
      };
    const handlePageChange = (page) => setCurrentPage(page);
    
    return (
      <div>
        <main>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </main> 
        
        <Footer />
      
      </div>
     
      );

}