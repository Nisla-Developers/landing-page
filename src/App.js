import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, ResponsiveEmbed } from 'react-bootstrap';
import './App.css';
import ContactUs from './components/contact-us/ContactUs';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Process from './components/process/Process';

function App() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Nilsa Developers</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact-us">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <Container className="App">

        <div id="home">
          <Intro />
        </div>

        <Container>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/O4myWRoHTk4?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </ResponsiveEmbed>
        </Container>

        <div id="process">
          <Process />
        </div>

        <div id="portfolio">
          <Portfolio />

        </div>

        <div id="contact-us">
          <ContactUs />

        </div>

      </Container>
    </>

  );
}

export default App;
