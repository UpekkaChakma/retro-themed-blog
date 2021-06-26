import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan } from '@fortawesome/free-solid-svg-icons';

const BlogPostsUIList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://frozen-caverns-20472.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            })
    }, []);
    const history = useHistory();
    const showDetails = (id) => {
        history.push(`/details/${id}`);
    }
    return (
        <Container className="mt-5">
            <Row className="d-flex justify-content-center align-items-center p-4">
                <FontAwesomeIcon icon={faFan} style={{ fontSize: '30px', color: 'orange' }} />
                <h1 className="mx-2">All Blog Posts</h1>
                <FontAwesomeIcon icon={faFan} style={{ fontSize: '30px', color: 'orange' }} />
            </Row>
            <Row>
                {
                    posts.map(post =>
                        <Col key={post._id} className="d-flex justify-content-center align-items-center" md={4}>
                            <div onClick={() => showDetails(post._id)} className="box" style={{ margin: '10px', cursor: 'pointer' }}>
                                <img className="w-100 m-3" src={post.imageURL} alt="" />
                                <h3 className="text-center">{post.postTitle}</h3>
                            </div>
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default BlogPostsUIList;