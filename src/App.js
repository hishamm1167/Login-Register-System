import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './componants/Header';
import Home from "./componants/home/Home";
import Login from "./componants/Login/Login"
import Signup from "./componants/signup/Signup";
import axios from "axios";
import { Container } from "react-bootstrap";
import Customer from "./componants/customers/Customer";
import { useContext } from "react";
import AuthContext from "./context/AuthContext";

axios.defaults.withCredentials = true

function App() {
  const {Loogedin} = useContext(AuthContext)
  return (
    <BrowserRouter>
      <Header />
      <Container>
          <Routes>

            <Route path='/' element={<Home />} />
            {!Loogedin &&
            <>
              <Route path='/login' element={<Login />}/>
              <Route path='/signup' element={<Signup />}/>
            </>
            }
            {Loogedin && <Route path='/customer' element={<Customer />}/>}
            
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
