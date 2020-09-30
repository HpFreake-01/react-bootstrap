import React from "react";
import { Container} from "react-bootstrap";

const Footer = () =>{
    return(
        <Container fluid style={{backgroundColor: '#212529', color: '#fff' }}>
            <Container style={{display:'flex', justifyContent:'center', paddingTop: '1.3rem'}}>
                <p>WebFreiHeit</p>
            </Container>
        </Container>
    )
}

export default Footer;