import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import sunset from "../sunsetimg.jpg";


const About =()=> {
    return(
        <div>
            <Container style={{marginBottom: '2rem', marginTop: '2rem'}}>
                <Row>
                    <Col md={7}>
                        <img src={sunset} height={400}/>
                    </Col>
                    <Col md={5}>
                        <h1>WebFreiHeit</h1>
                        <p>There is beauty in change, and these sunset quotes will remind you of the loveliness in endings that bring new beginnings.
                            Sunsets are not only beautiful, but they also have so much meaning. They signify endings, change, and transformation;
                            they remind us that change is part of life and everything has an ending.Many people resist change and hold on to what
                            the universe is telling them to release. However, you should embrace positive change and make it part of your life. If
                            things aren’t going as planned, maybe it’s time to re-examine your actions and consider what direction really matters to you.
                            The sunset tells us that the day is almost over. It reminds us of the importance of time and how we should make good use
                            of it. It’s also a time for reflection.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;