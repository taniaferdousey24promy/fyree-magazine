import artAndlife from "../../../assets/Art & Life.svg";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import moment from "moment";
import artLifeBanner from "../../../assets/artLifeBanner.jpeg";

const ArtHome = () => {
  const mediaQueryStyles = `
  @media (max-width: 767px) {
    gridTemplateColumns: 1fr;
    /* Add other styles specific to mobile here */
  }
`;
  return (
    <Container className="mt-5">
      {/* artAndlife image */}
      <img src={artAndlife} className=" img-fluid  " alt="Responsive image" />
      <div className="d-flex ">
        {/* react marquee */}
        <Button className="mt-5 fw-bolder" size="lg" variant="dark">
          LATEST++{" "}
        </Button>
        <Marquee className="rounded text-white bg-secondary mt-5 " speed={100}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore eos,
          quis aut ut numquam ratione voluptate explicabo molestiae sequi sint
          maxime at vel laboriosam perspiciatis beatae odit...........
          Laudantium, repellat aspernatur, iure ex rem, ea magnam amet ad odio
          ipsum cum eum commodi sapiente consequatur! Exercitationem iusto in
          cumque molestiae rerum.
        </Marquee>
      </div>
      <Container>
        <Row className="g-4">
          <Col xs={12} md={12} lg={6}>
            <p
              style={{
                color: "black",
                textTransform: "uppercase",
                fontWeight: "700",
                fontSize: "90px",
              }}
            >
              Don’t close your eyes
            </p>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="text-justify mt-5">
              <p>
                Lorem ipsum, sfghsdfgdolotur adipisicidfddgng elit. Nemo a
                aliquam minus amet. Accusantium, exercitationem quae sed tenetur
                tempore quia ipsam magnam architecto maiores laudantium corporis
                molestiae dicta unde provident suscipit, blanditiis veniam minus
                sit quaerat ut modi ad natus illum! Similique obcaecati ut
                laboriosam nesciunt. Rem at est ab!
              </p>
            </div>
            <div
              style={{ marginTop: "70px" }}
              className="d-flex justify-content-evenly "
            >
              <p>
                <span className="fw-bold ms-0 me-2">Text </span>
                <span>Jakkob Gronbreg </span>
              </p>

              <p>
                <span className="fw-bold ms-2 me-2">Date </span>
                <span>{moment().format("dddd, MMMM Do YYYY")}</span>
              </p>

              <p>
                <span className="fw-bold ms-2 me-2">Duration </span>
                <span>1 min</span>
              </p>

              <span className="mb-3 badge text-bg-dark ms-3">Art</span>
            </div>
          </Col>
        </Row>
      </Container>
      {/* artAndlife image */}
      <div className="mt-5" style={{ height: "50vh", width: "100%" }}>
        <img
          src={artLifeBanner}
          className="img-fluid rounded"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          alt="Responsive image"
        />
      </div>
      
    </Container>
  );
};

export default ArtHome;
