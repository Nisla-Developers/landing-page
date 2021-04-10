import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';
import ContactUs from './components/contact-us/ContactUs';
import Portfolio from './components/portfolio/Portfolio';
import Process from './components/process/Process';

function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Nilsa Developers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#process">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar className="mt-4 mb-4"></Navbar>

      <div id="process">
        <Process />
      </div>

      <div id="portfolio">
        <Portfolio />

      </div>

      <div id="contact-us">
        <ContactUs />

      </div>

    </div>
  );
}

export default App;
