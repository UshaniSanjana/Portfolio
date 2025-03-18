import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container className="footer-container">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1>FIND ME ON</h1>

            <a
              href="https://github.com/UshaniSanjana"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillGithub />
            </a>

            <a
              href="https://www.facebook.com/ushani.sanjana.1"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillFacebook />
            </a>

            <a
              href="https://www.linkedin.com/in/ushani-sanjana"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <AiFillInstagram />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
