import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, ResponsiveEmbed } from 'react-bootstrap';
import './App.css';
import ContactUs from './components/contact-us/ContactUs';
import HeroComponent from './components/hero/Hero';
import Highlights from './components/highlights/Highlights';
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


      <Container style={{maxWidth:"unset"}} className="App">

        <div id="home">
          <HeroComponent />
        </div>

        <div>
          <Highlights title="Transparent Pricing" description="Ex fugiat fugiat ea qui deserunt nisi. Voluptate sit duis in proident culpa ex deserunt et incididunt nisi deserunt exercitation. Lorem ex aliqua aliquip ipsum eu ipsum minim proident eiusmod dolore labore consequat. Tempor in in quis veniam aute ad. Sit sint sunt officia voluptate dolore sint commodo culpa ad." image={'./assets/images/Highlights 1.jpeg'} imageSide={"left"} />
          <Highlights title="EMI Options" description="Pariatur duis voluptate enim deserunt ut veniam voluptate. Fugiat commodo proident nisi nisi dolore aute aute deserunt reprehenderit nostrud aliqua duis laborum laborum. Elit aliquip incididunt do magna consequat occaecat occaecat officia culpa eiusmod Lorem eu. Reprehenderit aliqua Lorem do exercitation amet. Voluptate laborum nisi cillum amet." image={'./assets/images/Highlights 2.jpeg'} imageSide={"right"} />
          <Highlights title="No Hidden Cost" description="Et ea est officia est. Excepteur consectetur quis enim velit pariatur nulla cillum est mollit. Ex consequat adipisicing est fugiat ullamco eu cupidatat esse qui do sit ex velit." image={'./assets/images/Highlights 3.jpeg'} imageSide={"left"} />
          <Highlights title="Zero Cost Overruns" description="Ad in sunt aliquip laboris fugiat nostrud labore proident exercitation fugiat exercitation sit mollit. Occaecat amet anim reprehenderit esse consequat deserunt laborum commodo velit esse ad do. Sunt aliquip mollit laborum excepteur excepteur tempor commodo aliqua. Anim occaecat in enim tempor excepteur ad quis enim reprehenderit amet enim." image={'./assets/images/Highlights 4.jpeg'} imageSide={"right"} />
          <Highlights title="Always In your Budget" description="Cupidatat duis dolor amet cillum irure aliquip elit excepteur consectetur magna minim duis eiusmod. Voluptate labore ex magna id excepteur tempor. Dolore consectetur in deserunt ex culpa consequat. Aute excepteur reprehenderit nulla sit culpa qui. Proident tempor elit in sunt eu quis voluptate. Laborum ex magna anim elit enim dolor do velit consectetur ex aliqua occaecat proident incididunt. Sunt in dolore velit excepteur do cupidatat." image={'./assets/images/Highlights 5.jpeg'} imageSide={"bottom"} />
        </div>

        <Container>
          <ResponsiveEmbed aspectRatio="16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLCAXVg4StqqjOavuw8m1dvD611CY5e-8j?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
