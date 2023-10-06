import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'



const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
