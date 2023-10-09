import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Write from './Components/Home/Write';
import About from './Components/Home/About';
import { useState } from 'react';
import SingleBlog from './Components/Home/SingleBlog';
import Navbar from './Components/Headers/Navbar';
import Footer from './Components/Footer/footer';
import Login from './Components/Home/Login';
import 'react-toastify/dist/ReactToastify.css';

const  App = () => {

  const [loginModal, setLoginModal] = useState(false)
  const [authToken, setAuthToken] = useState(localStorage.getItem('auth_token'))

  return (
    <BrowserRouter>
      <Navbar setLoginModal={setLoginModal} authToken={authToken} setAuthToken={setAuthToken} />
      {loginModal && <Login setLoginModal={setLoginModal} setAuthToken={setAuthToken} />}
      <Routes>    
          <Route path='/' element={<Home/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
      </Routes>
   <Footer/>
    </BrowserRouter>
  );
}

export default App;
