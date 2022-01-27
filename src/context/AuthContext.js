import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

const AuthContext = createContext()

const AuthContextProvider= (props) => {
    const [Loogedin, setLoogedin] = useState(undefined);

    async function getLoogedIn(){
        const loogedInRes = await axios.get('https://mern-login-sys.herokuapp.com/api/v1/loogedin')
        setLoogedin(loogedInRes.data)
    }
    useEffect(()=>{
        getLoogedIn()
    },[])

  return (
  <AuthContext.Provider value={{Loogedin, setLoogedin}}>
    {props.children}
  </AuthContext.Provider>
  );
};

export default AuthContext
export {AuthContextProvider};
