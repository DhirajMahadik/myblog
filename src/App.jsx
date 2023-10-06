import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Write from './Components/Home/Write';
import About from './Components/Home/About';


const  App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/write' element={<Write/>}/>
          <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
