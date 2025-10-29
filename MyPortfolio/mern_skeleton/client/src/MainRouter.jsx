import {Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './components/Home.jsx';
import './components/Home.css';
import About from './components/About.jsx';
import Projects from './components/Project.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import './App.css';
import './components/Nav.css';
 

const MainRouter = () => {
    return (
        <>

          <Navigation />

            <Routes>
              <Route path="/" element= {<Home />} />
              <Route path="/about" element= {<About />} />
              <Route path="/projects" element= {<Projects />} />
              <Route path="/education" element= {<Education />} />
              <Route path="/contact" element= {<Contact />} />
              <Route path="/services" element= {<Services />} />
            </Routes>

        
        </>
    )
}

export default MainRouter;
