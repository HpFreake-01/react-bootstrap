import React from "react";
import { Carousel } from 'react-bootstrap';
import sunset from '../sunsetimg.jpg'

export default function Slider() {
    return(
        <div>
            <Carousel>
                <Carousel.Item style={{'height': '550px'}}>
                    <img
                        className="d-block w-100"
                        src={sunset}
                        alt="First_slide"
                    />
                    <Carousel.Caption>
                        <h3>WebFreiHeit</h3>
                        <p>bla bla bla</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '550px'}}>
                    <img
                        className="d-block w-100"
                        src={sunset}
                        alt="First_slide"
                    />
                    <Carousel.Caption>
                        <h3>WebFreiHeit</h3>
                        <p>bla bla bla</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{'height': '550px'}}>
                    <img
                        className="d-block w-100"
                        src={sunset}
                        alt="First_slide"
                    />
                    <Carousel.Caption>
                        <h3>WebFreiHeit</h3>
                        <p>bla bla bla</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}