import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/myimage.png";

import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

import ContactForm from "../Contact/Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section vh-100" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> USHANI SANJANA</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={3} sm={5} style={{ paddingBottom: 20 }}>
              {/* Add a wrapper div for glitter effect */}
              <div className="glitter-container">
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid glitter-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <About />
      <Projects />
      <ContactForm />
      <Footer />
    </section>
  );
}

export default Home;
