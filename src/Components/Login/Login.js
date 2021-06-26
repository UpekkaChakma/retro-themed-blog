import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import firebaseConfig from './firebase.config';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { useForm } from "react-hook-form";


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const onSubmit = data => {
        document.getElementById('error').innerText = "";
        if (data.email == 'test@test.com' && data.password == '#2021dev') {
            setLoggedInUser(data);
            history.push("/admin");
        } else {
            document.getElementById('error').innerText = "Wrong email or Password given";
        }
    };

    return (
        <Row>
            <Col sm={9} md={7} lg={5} className="mx-auto">
                <div className="card card-signin my-5" id="roboto">
                    <div className="card-body">
                        <h4 className="text-center" style={{ color: 'red' }} id="error"> </h4>
                        <h5 className="card-title text-center">Sign In</h5>
                        <form className="form-signin" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-label-group">
                                <input name="email" type="email" id="inputEmail" className="form-control" ref={register({ required: true })} />
                                <label htmlFor="inputEmail">Email address</label>
                                {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                            <div className="form-label-group">
                                <input name="password" type="password" id="inputPassword" className="form-control" ref={register({ required: true })} />
                                <label htmlFor="inputPassword">Password</label>
                                {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                            <div className="custom-control custom-checkbox mb-3">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                            </div>
                            <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button>
                            <p className="mt-4 ml-5" >New here? <Link to="#">SignUp</Link></p>
                        </form>
                        <hr className="my-4" />
                        <button
                            className="py-2 my-3 btn btn-md btn-google btn-block text-uppercase form-signin2" type="submit" >
                            <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                        </button>
                        <button className="py-2 btn btn-md btn-facebook btn-block text-uppercase form-signin2" type="submit" >
                            <FontAwesomeIcon icon={faFacebook} /> Sign in with Facebook
                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Login;