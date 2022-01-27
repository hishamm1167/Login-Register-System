import React from 'react';

const CustomerList = ({customersList}) => {
  return (
  <div>
      <ul>
          {
              customersList.map((customer)=>{
                return <li key={customer._id}>{customer.name}</li>
              })
          }
      </ul>
  </div>
)};

export default CustomerList;
