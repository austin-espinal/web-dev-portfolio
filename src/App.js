import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import './assets/css/style.css'

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // switch(currentPage) {
    //   case currentPage==='Portfolio':
    //     return <Portfolio/>;
        
    //   case currentPage==='Contact':
    //     return <Contact/>;
          
    //   case currentPage==='Resume':
    //     return <Resume/>;

    //   default:
    //     return <About/>;
    // }

    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <About />;
  };

  const pageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header>
      <Header></Header>
      <Nav currentPage={currentPage} pageChange={pageChange}/>
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
