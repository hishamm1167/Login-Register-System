import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Error from '../error/Error';
import Loading from '../loading/Loading';
import AuthContext from '../../context/AuthContext';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confermPassword, setConfermPassword] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false);
    const [Messgae, setMessgae] = useState(null);

    const {setLoogedin} = useContext(AuthContext)
    const navegate =useNavigate()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(password !== confermPassword){
            setMessgae('Password do not match!')
        }else{
            try {
                const rejsterData ={
                    name,
                    email,
                    password
                };
            setisLoading(true)
            await axios.post('http://localhost:2000/api/v1/signup' , rejsterData )
            setisLoading(false);
            setLoogedin(true)
            navegate('/customer')
            } catch (error) {
                setisLoading(false)
                setisError(error.response.data.msg)
            }
        }
    }
  return (
    <Container>
        <h1>Resigen</h1>
        {Messgae &&<Error>{Messgae}</Error>}
        {isLoading && <Loading />}
        {isError && <Error>{isError}</Error>}
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNmae">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                 placeholder="Enter Name" 
                 value={name}
                 onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type="password"
                placeholder="Conferm password"
                value={confermPassword}
                onChange={(e)=>setConfermPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
            <Row>
            <Col>Already have account?{<Link to={'/login'}>Login</Link>}</Col>
            </Row>
    </Container>
  )
};

export default Signup;
