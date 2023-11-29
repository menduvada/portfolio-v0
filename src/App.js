import styles from './App.module.css';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact.js';
import { Experience } from './Components/Experience/Experience.js';
import { Home } from './Components/Home/Home.js';
import { Navbar } from './Components/NavBar/NavBar';
import { Projects } from './Components/Projects/Projects';

function App() {
  return (
    <div className={styles.App}>
    <Navbar />
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </div>
  );
}

export default App;
