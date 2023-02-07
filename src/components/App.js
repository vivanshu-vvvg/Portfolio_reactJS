
import './App.css';
import Home from './inner_com/Home';
import About from './inner_com/About';
import Experience from './inner_com/Experience';
import Work from './inner_com/Work';
import Contact from './inner_com/Contact';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import ContactBar from './contactBar/ContactBar';


function App() {
  return (

    <main className="main">
      <Navbar />
      <div className='app_section_container'>
        <Home/>
        <About/>
        
        <Experience/>
        
        <Work/>
        
      <Contact/>

      </div>
      <ContactBar/>
      <Footer/>
    </main>
  );
}

export default App;
