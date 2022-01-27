import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList';
const Customer = () => {
  const [custumers, setCustumers] = useState([]);

  const getAllnames =async ()=>{
    const customersRef =  await axios.get('https://mern-login-sys.herokuapp.com/api/v1/getallcustomers')
    setCustumers(customersRef.data)
  }
  useEffect(()=>{
    getAllnames()
  },[])
  return (
  <div>
      <CustomerForm allCus= {getAllnames} />
      <CustomerList customersList={custumers} />
  </div>
  )};

export default Customer;
