import 'bootstrap/dist/css/bootstrap.css';
import { Container, Nav, Navbar, ResponsiveEmbed } from 'react-bootstrap';
import './App.css';

function Portfolio() {
  return (
    <>
      <Container style={{maxWidth:"unset"}} className="Portfolio">

        <div>
          <Highlights title="Transparent Pricing" description="Ex fugiat fugiat ea qui deserunt nisi. Voluptate sit duis in proident culpa ex deserunt et incididunt nisi deserunt exercitation. Lorem ex aliqua aliquip ipsum eu ipsum minim proident eiusmod dolore labore consequat. Tempor in in quis veniam aute ad. Sit sint sunt officia voluptate dolore sint commodo culpa ad." image={'./assets/images/Highlights 1.jpeg'} imageSide={"left"} />
          <Highlights title="EMI Options" description="Pariatur duis voluptate enim deserunt ut veniam voluptate. Fugiat commodo proident nisi nisi dolore aute aute deserunt reprehenderit nostrud aliqua duis laborum laborum. Elit aliquip incididunt do magna consequat occaecat occaecat officia culpa eiusmod Lorem eu. Reprehenderit aliqua Lorem do exercitation amet. Voluptate laborum nisi cillum amet." image={'./assets/images/Highlights 2.jpeg'} imageSide={"right"} />
          <Highlights title="No Hidden Cost" description="Et ea est officia est. Excepteur consectetur quis enim velit pariatur nulla cillum est mollit. Ex consequat adipisicing est fugiat ullamco eu cupidatat esse qui do sit ex velit." image={'./assets/images/Highlights 3.jpeg'} imageSide={"left"} />
          <Highlights title="Zero Cost Overruns" description="Ad in sunt aliquip laboris fugiat nostrud labore proident exercitation fugiat exercitation sit mollit. Occaecat amet anim reprehenderit esse consequat deserunt laborum commodo velit esse ad do. Sunt aliquip mollit laborum excepteur excepteur tempor commodo aliqua. Anim occaecat in enim tempor excepteur ad quis enim reprehenderit amet enim." image={'./assets/images/Highlights 4.jpeg'} imageSide={"right"} />
          <Highlights title="Always In your Budget" description="Cupidatat duis dolor amet cillum irure aliquip elit excepteur consectetur magna minim duis eiusmod. Voluptate labore ex magna id excepteur tempor. Dolore consectetur in deserunt ex culpa consequat. Aute excepteur reprehenderit nulla sit culpa qui. Proident tempor elit in sunt eu quis voluptate. Laborum ex magna anim elit enim dolor do velit consectetur ex aliqua occaecat proident incididunt. Sunt in dolore velit excepteur do cupidatat." image={'./assets/images/Highlights 5.jpeg'} imageSide={"bottom"} />
        </div>

      </Container>
    </>

  );
}

export default Portfolio;
