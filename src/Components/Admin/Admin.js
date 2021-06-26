import { Button, Col, Container, Form, Row, Table } from 'react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert';
import './Admin.css'
import AllPostsList from './AllPostsList';

const Admin = () => {
  const { register, handleSubmit, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);
  const [posts, setPosts] = useState([]);

  //============= load all saved post ===============================
  useEffect(() => {
    fetch('https://frozen-caverns-20472.herokuapp.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, []);

  const onSubmit = data => {
    const eventData = {
      postTitle: data.postTitle,
      Description: data.Description,
      imageURL: imageURL
    };
    const url = `https://frozen-caverns-20472.herokuapp.com/admin/addpost`;

    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
      .then(res => {
        console.log('server side response', res);
        if (res) {
          swal({
            title: "Good job!",
            text: "You added the post to database!",
            icon: "success",
            button: "Close",
          });
        }
      });
  };

  const handleImageUpload = event => {
    //console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '51794bdd439c0ef7fc6590b2dd17c754');
    imageData.append('image', event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload',
      imageData)
      .then(function (response) {
        setIMageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  //====================== delete a post ================================
  const deletePostById = id => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          const url = `https://frozen-caverns-20472.herokuapp.com/admin/deletePost/${id}`;
          fetch(url, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(res => res.json())
            .then(data => {
              swal("Product Successfully Deleted", {
                icon: "success",
              });
              const newPostList = posts.filter(post => post._id !== id);
              setPosts(newPostList);
            })

        } else {
          swal("Your post file is safe!");
        }
      });
  }
  return (
    <>
      <Container>
        <Row>
          <Col id="page-content-wrapper">
            <h4 style={{ borderBottom: '1px solid orange', paddingBottom: '10px' }}>Admin {'>'} Add post</h4>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ paddingTop: '10px', paddingBottom: '10px' }}>
              <Form.Row className="mb-4">
                <Col>
                  <Form.Control name="postTitle" type="text" placeholder="Enter post title" ref={register({ required: true })} />
                  {errors.postTitle && <span style={{ color: 'red' }}>This field is required</span>}
                </Col>
                <Col>
                  <Form.Control name="Description" type="text" placeholder="Description" ref={register({ required: true })} />
                  {errors.Description && <span style={{ color: 'red' }} >This field is required</span>}
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.File name="image" onChange={handleImageUpload} id="custom-file" label={imageURL ? imageURL : "Custom file input"} custom ref={register({ required: true })} />
                  {errors.image && <span style={{ color: 'red' }}>This field is required</span>}
                </Col>
              </Form.Row>
              <Form.Row className="mt-4">
                <Col>
                  <Button variant="primary" type="submit">
                    <FontAwesomeIcon icon={faSave} /> Save To Database
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h4 style={{ borderBottom: '1px solid orange', paddingBottom: '10px', marginTop: '40px' }}>Admin {'>'} Delete post</h4>
            <Table striped bordered hover style={{ marginTop: '20px', paddingBottom: '10px' }}>
              <thead>
                <tr>
                  <th>Post Title</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  posts.map(post => <AllPostsList key={post._id} post={post} deletePostById={deletePostById} ></AllPostsList>)
                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;