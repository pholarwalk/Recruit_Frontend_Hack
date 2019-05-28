import React from 'react';

// config

// components

// images
import logo from '../images/logo.svg';

// styles
import '../styles/App.css';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Container,
  Card,CardDeck, CardHeader, CardBody, CardText
} from 'reactstrap';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="App">
       {/* ------------nav section------ */}
        <div id="home" className=" row-lg-12">
          <Navbar expand="md" id="home1" className="B-jumbotron1 " >
            <NavbarBrand className="brandlogo" href="/"><img src={logo} width="40" alt="josla" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto containee" navbar>
                <NavItem>
                  <NavLink href="#home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#feature">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#service">Services</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#price">Pricing</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#client">Clients</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#contact">Contact</NavLink>
                </NavItem>
                <Button  outline color="secondary">Log In</Button>{' '}

              </Nav>

            </Collapse>

          </Navbar>
          {/* ------------home section------ */}
          <div id="home1" >
            <Jumbotron className="B-jumbotron ">
              <Container fluid className="row-lg-12 housing">
              <div className="col-lg-12">
                <h1 className="display-3 leads">Halo <span className="font">Trak</span></h1>
                <p className="lead">IoT-based </p>
                <p className="lead">solution for</p>
                <p className="lead">optimal security</p>
                <p className="lead">of mobile assets.</p> 
                <Button className="button1" outline color="secondary " >Get Started</Button>{' '} 
                <a className="linkkk" href="/">How it works > </a>
                </div>
                
                  <div className="locawifi col-lg-12">
                  <img src={require("../images/locator.svg")} width="270"  className="" alt="locator"/>
                  
                  <img src={require("../images/wifi.svg")} width="270"  className="wifi3" alt="locator"/>
                  
                  
                  </div>
                  
                  </Container>
            </Jumbotron>
          </div>
           {/* ------------feature section------ */}
          <div id="feature">
          
          <img src={require("../images/Feature.svg")}  alt="iPhoneX"/>
          
          </div>
          {/* ------------services section------ */}
          <div id="service">
          <h1>Services</h1>
          <CardDeck>
          <Card>
        <CardHeader>Individual</CardHeader>
        <CardBody>
          <img src={require("../images/individual-iconmotor.svg")} alt="motor" />
          <CardText>Guaranteed convenience and peace of mind on costly investments.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Logistics</CardHeader>
        <CardBody>
          <img  src={require("../images/logistic.svg")} alt="logistics" />
          <CardText>Optimal management of fleet and safety of goods in transit.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Insurance</CardHeader>
        <CardBody>
          <img src={require("../images/insurance.svg")} alt="insurance" />
          <CardText>On-demand premium inferred from pattern captured of the insured.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>LSP</CardHeader>
        <CardBody>
          <img src={require("../images/lsp.svg")} alt="lsp" />
          <CardText>Improved location service experience with unique local content</CardText>
        </CardBody>
      </Card>
      </CardDeck>

      </div>
      {/* ------------pricing and clients section------ */}
      
     <div id="price" className="row row-sm-12">
     <div className="pricing-header"><h1>Pricing</h1>
     <div className="col-lg-6  pricing">
    
     <Card className="col-lg-12 pricing-left">
   
       <p> <img src={require("../images/tracker-icon.svg")} alt="tracker-icon" /> Tracker</p>
        <CardBody>
      
          <CardText  className="amount">#25,000.</CardText>
          <p>one off payment</p>
         
        </CardBody>
        <p> <img src={require("../images/devices-icon.svg")} alt="tracker-icon" /> Platform</p>
        <CardText className="amount">#999.</CardText>
        <p>monthly subscription</p>
      </Card>
      <Card className="col-lg-12 pricing-right">
       
        <CardBody>
      
          <CardText className="pricing-right-text">*Free Installation.</CardText>
          <CardText  className="pricing-right-text">*1yr Warranty.</CardText>
          <CardText  className="pricing-right-text">*Web and mobile access.</CardText>
          <CardText  className="pricing-right-text">*Monthly Reporting.</CardText>
          <Button  className="pricing-right-button" outline color="secondary">Contact us</Button>{' '}
          
        </CardBody>
      </Card>
      </div>


       {/* ------------client section------ */}


     </div>
     <div id="client" className="col-lg-6">
     <div class="clients-header"><h1>Clients</h1>
    <Card  className="col-lg-12  grid-container">
    <img src={require("../images/lsp.svg")} alt="lsp" />
    <img src={require("../images/lsp.svg")} alt="lsp" />
    <img src={require("../images/lsp.svg")} alt="lsp" />
    <img src={require("../images/lsp.svg")} alt="lsp" />
    <img src={require("../images/lsp.svg")} alt="lsp" />
    <img src={require("../images/lsp.svg")} alt="lsp" />



    </Card>


</div>

     </div>





     </div>
       {/* ------------footer section------ */}
    
      <CardDeck id="contact" className=" dek row-lg-12">
      <Nav vertical className= "col-lg-3">
      <img src={require("../images/josla.svg")}  alt="joslalogo"/>  <NavLink disabled href="#">powered by Halogen Security Company Ltd.</NavLink>
     <div className="icons">
      
    <a className="hov" href='/'><i className="fab fa-facebook-f"></i></a>
 
    <a className="hov" href='/'><i className="fab fa-twitter"></i></a>
    <a className="hov" href='/'><i className="fab fa-instagram" ></i></a>
    </div>
    <p></p>
        </Nav>
      <Nav vertical className= "txt col-lg-3">
          <NavLink disabled href="/">Site Map</NavLink> <NavLink href="#home">Home</NavLink> <NavLink href="#feature">Features</NavLink><NavLink href="#service">Services</NavLink> <NavLink href="#price">Pricing</NavLink> <NavLink href="#client">Clients</NavLink> </Nav>
        <Nav vertical className= "txt col-lg-3">
        <NavLink disabled href="/">Legal</NavLink> <NavLink href="/">Terms of service</NavLink> <NavLink href="./">Privacy policy</NavLink> <NavLink href="/">API connect</NavLink> <NavLink href="/">FAQ</NavLink> 
        </Nav>
        <Nav vertical className= "txt1 col-lg-3">
        <NavLink disabled href="/">Fortune Towers</NavLink><NavLink disabled href="/">6th Floor</NavLink><NavLink disabled href="/">27/29 Adeyemo Alakija Street</NavLink> <NavLink disabled href="/">Victoria Island</NavLink> <NavLink disabled href="/">Lagos State, Nigeria</NavLink> <NavLink href="/">+234 (0) 808 874 6543</NavLink> <NavLink href="/">halotrak@josla.com.ng</NavLink> 
        </Nav>
        <NavLink className="txt2 col-lg-12" disabled href="/">© 2019 Josla Electric Company Ltd. All Rights Reserved. </NavLink>
        </CardDeck>
      </div>
        
      </div>
    );
  }

}
