import { Alert, CircularProgress } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';

const Error = ({children}) => {
  return (
  <>
      <Alert severity="error">{children}</Alert>
  </>
  );
};

export default Error;
