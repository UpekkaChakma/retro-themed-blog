import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import macauImg from "../../images/macaw-tropical-illustration_53876-76417.jpg";
import palmTreeImg from "../../images/beautiful-summer-print-with-palm-tree-leaves_1361-1417.jpg";
import flowerAndBird from "../../images/illustration-hand-painted-flowers-birds_53876-137.jpg";

const ThreePoster = () => {
    return (
        <Container>
            <Row className="letter">
                <Col sm={7}><img style={{ width: "100%", margin: '10px' }} src={macauImg} alt="" /></Col>
                <Col sm={5}>
                    <img style={{ width: "100%", margin: '10px' }} src={palmTreeImg} alt="" />
                    <img style={{ width: "100%", margin: '10px' }} src={flowerAndBird} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default ThreePoster;