import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNav from "../pages/Shared/RightNav/RightNav";
import ArtHome from "../pages/Home/ArtHome/ArtHome";

const Main = () => {
  return (
    <div className="d-grid justify-content-center">
      <Header></Header>
      <ArtHome />

      <Container>
        
        {/* <Row>
          <Col sm={8}></Col>
          <Col sm={4}><RightNav/></Col>
        </Row> */}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
