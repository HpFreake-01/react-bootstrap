import React from "react";
import Slider from "./Slider";
import { Container, Col, Row, Button, Card} from "react-bootstrap";
import sunset from '../sunsetimg.jpg'
import Jumbotron from "./Jumbotron";

const Home =()=> {
    return(
        <div>
            <Slider/>
            <Container style={{paddingTop: '4rem', paddingBottom: '4rem'}}>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={sunset}/>
                            <Card.Body>
                                <Card.Title>WebFreiHeit</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={sunset}/>
                            <Card.Body>
                                <Card.Title>WebFreiHeit</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Img variant="top" src={sunset}/>
                            <Card.Body>
                                <Card.Title>WebFreiHeit</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Button variant="primary">Learn More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Jumbotron/>
            <Container style={{marginBottom: '2rem'}}>
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

export default Home;