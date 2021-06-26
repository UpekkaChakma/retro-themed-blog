import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    const [foundedPost, setFoundedPost] = useState({});
    const { postTitle, Description, imageURL } = foundedPost;
    useEffect(() => {
        const url = `https://frozen-caverns-20472.herokuapp.com/findPost/${id}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then((result) => {
                setFoundedPost(result[0])
            })
    }, [id])

    return (
        <Container>
            <div className="letter-secondary mb-5">
                <img className="w-100" src={imageURL} alt="" />
                <h4 style={{ fontFamily: "'Playball', cursive", fontSize: '32px' }}>Flower Name : {postTitle}</h4>
                <h5 style={{ fontFamily: "'Playball', cursive", fontSize: '25px', borderTop: '1px solid grey', paddingTop: '7px' }}>{Description}</h5>
            </div>
        </Container>
    );
};

export default PostDetails;