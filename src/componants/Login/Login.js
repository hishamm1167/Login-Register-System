import axios from 'axios';
import { useContext, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../loading/Loading'
import Error from '../error/Error'
import AuthContext from '../../context/AuthContext';

const Addform = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLiading, setisLiading] = useState(false);
    const [isError, setisError] = useState(false);

    const navegate = useNavigate()

    const {setLoogedin} = useContext(AuthContext)
    const submitHandller = async(e)=>{
        e.preventDefault()
            try {
                const rejsterData ={
                    email,
                    password,
                };
                setisLiading(true)
            await axios.post('http://localhost:2000/api/v1/login' , rejsterData )
            setisLiading(false)
            setLoogedin(true)
            navegate('/customer')
            } catch (error) {
                setisLiading(false)
                setisError(error.response.data.msg)
            }
    }
    return (
        <Container>
            <h1>Login</h1>
            {isLiading && <Loading />}
            {isError && <Error>{isError}</Error>}
            <Form onSubmit={submitHandller}>
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
                    onChange={(e)=>setPassword(e.target.value)}/>

                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <Row>
                <Col>Don't have an account?{<Link to={'/signup'}>Resigen</Link>}</Col>
            </Row>
        </Container>
    )
}

export default Addform
