import React,{useState} from 'react';
import {Col, Container, Form, Row,Button} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import { loginUser, signupUser } from '../redux/actions/userActions';

function LoginPage() {
    const [login,toggleLogin] = useState(true);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const handleToggle = (e) => {
        e.preventDefault();
        toggleLogin(!login);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitting');
        const userDetails = {
            username: e.target.formUsername.value,
            password: e.target.formPassword.value
        }

        if(login){
            console.log('logging in',login);
            dispatch(loginUser(userDetails));
        } else {
            console.log('signing up');
            userDetails.apiKey = e.target.formApiKey.value;
            userDetails.apiToken = e.target.formApiToken.value;
            dispatch(signupUser(userDetails));
        }
    }

    return (
        <Container className='mt-3'>
            <Row className='border py-2'>
                <Col><h3 className='display-6'>{login ? 'Login' : 'Sign Up' }</h3></Col>
                <Col className='d-flex justify-content-end align-items-center'>
                    <Button className='btn btn-secondary h-80' onClick={handleToggle}>Click here to {login ? 'Sign Up' : 'Log In' }</Button>
                </Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='my-3' controlId='formUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type='text' placeholder='Enter username'></Form.Control>
                    </Form.Group>
                    <Form.Group className='my-3' controlId='formPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password'></Form.Control>
                    </Form.Group>
                    { !login &&
                        <>
                            <Form.Group className='my-3' controlId='formApiKey'>
                                <Form.Label>Api Key</Form.Label>
                                <Form.Control type='text' placeholder='Enter Api Key'></Form.Control>
                            </Form.Group>
                            <Form.Group className='my-3' controlId='formApiToken'>
                                <Form.Label>Api Server Token</Form.Label>
                                <Form.Control type='text' placeholder='Enter Api Token'></Form.Control>
                            </Form.Group>
                        </>
                    }
                    <Form.Group className='d-flex justify-content-end'>
                        <Button type='submit' className='btn btn-primary mb-3'>
                            {login ? 'Login' : 'Sign Up'}
                        </Button>
                    </Form.Group>
                </Form>
            </Row>
            <Row>
                <Col>
                    {JSON.stringify(user)}
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage;
