import React from "react";
import { Jumbotron as Jumbo, Container} from "react-bootstrap";
import styled from 'styled-components';
import sunset from '../sunsetimg.jpg'

const Styles = styled.div `
    .jumbo{
        background: url(${sunset}) no-repeat fixed bottom;
        background-size: cover;
        height:400px;
        position:relative;
        z-index:-2;
    }
    .overlay {
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index: -1;
    }
    
    
`;

const Jumbotron = () =>{
    return(
        <div>
            <Styles>
                <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
                    <Container>
                        <h1 style={{color: 'white'}}>WebFreiHeit</h1>
                        <p style={{color: 'white'}}>There is beauty in change, and these sunset quotes will remind you of the loveliness in endings that bring new beginnings.
                            Sunsets are not only beautiful, but they also have so much meaning. They signify endings, change, and transformation;
                            they remind us that change is part of life and everything has an ending.Many people resist change and hold on to what
                            the universe is telling them to release. However, you should embrace positive change and make it part of your life. If
                            things aren’t going as planned, maybe it’s time to re-examine your actions and consider what direction really matters to you.
                            The sunset tells us that the day is almost over. It reminds us of the importance of time and how we should make good use
                            of it. It’s also a time for reflection. As your day comes to a close, ask yourself whether you’ve done everything you
                            set out to do or been the person you desire to be.While the sunrise brings hope for the new day, the sunset brings a sense
                            of peace that everything is going to be alright. It serves as a promise of a bright and light-filled new daytime.</p>
                    </Container>
                </Jumbo>
            </Styles>
        </div>
    )
}

export default Jumbotron;