import React from 'react';
import { Container } from 'react-bootstrap';
import posterImg from "../../images/chinese-painting-featuring-two-birds_53876-66461.jpg";

const Poster = () => {
    return (
        <Container className="papers">
            <img style={{ width: '100%' }} src={posterImg} alt="" />
            <h2 className="text-center">Welcome To My Blog</h2>
        </Container>
    );
};

export default Poster;