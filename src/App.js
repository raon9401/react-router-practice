import './App.css';
import Aboutpage from './page/Aboutpage';
import Homepage from './page/Homepage';
import { useState } from 'react';

import {Routes, Route, Navigate} from "react-router-dom";
import Productpage from './page/Productpage';
import ProductDetailpage from './page/ProductDetailpage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';

function App() {

  // 로그인 인증 state
  const [authenticate, setAuthenticate] = useState(false);
  // 컴포넌트 : 앞글자를 대문자로 만듦
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage/> : <Navigate to="/login"/>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<Productpage/>}/>
        <Route path="/products/:id" element={<ProductDetailpage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </div>
  );
}

export default App;
