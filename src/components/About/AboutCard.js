import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            I'm a third-year Computer Engineering undergraduate at the
            University of Sri Jayewardenepura.
            <br />
            <br />
            Passionate about{" "}
            <span className="purple">software development</span>.
            <br />
            <br />
            I love exploring new technologies and continuously expanding my
            skill set.
            <br />
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
