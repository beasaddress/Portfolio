export default function Home() {
    const[currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Contact') {
          return <ContactMe />;
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