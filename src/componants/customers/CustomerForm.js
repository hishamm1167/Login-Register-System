import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import Loading from '../loading/Loading';

const CustomerForm = ({allCus}) => {
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const sendName = async(e)=>{
        e.preventDefault()
        try {
            const customerData = {
                name: name
            }
            setIsLoading(true)
            await axios.post('https://mern-login-sys.herokuapp.com/api/v1/customer' , customerData)
            allCus()
            setIsLoading(false)
            setName('')
        } catch (error) {
            console.error(error)
        }
    }
  return (
  <div>
    {isLoading && <Loading />}
    <Form onSubmit={sendName}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Customer Name</Form.Label>
            <Form.Control type="text"
             placeholder="Enter name"
             onChange={(e)=>setName(e.target.value)} 
             value={name}/>
        </Form.Group>
        <Button type='submit'>Submit name</Button>
    </Form>
  </div>);
};

export default CustomerForm;
