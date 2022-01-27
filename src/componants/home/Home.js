import React, { useContext } from 'react'
import './home.css'
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
const Home = () => {
    const {Loogedin} = useContext(AuthContext)
    return (
        <Container>
                {!Loogedin && 
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/signup'>Register</Link>
                </>
                }
                {
                    Loogedin &&  <Link to='/customer'>Customer</Link>
                }
               
        </Container>
    )
}

export default Home
