import Navbar from '../Headers/Navbar'
import Footer from '../Footer/footer'
import { HomeStyled } from '../../Styled/HomeStyled'
import * as icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Home = () => {

  const [category, setCategory] = useState('Recent Blogs')

  const searchHandler = (e) => {
    setCategory('Search results')
  }

  return (
    <HomeStyled>
      <Navbar />
      <div className='banner d-flex'>

        <div className='banner-text m-auto d-flex flex-column'>
          <h1 className='heading fw-bold fst-italic my-4'>Welcome To <span className='text-danger'>My</span>Blogs</h1>
          <div className='search d-flex align-items-center m-auto '>
            <input className='form-control m-auto' type="text" placeholder='search' onChange={searchHandler} />
            <icons.Search color='#fff' className='position-absolute  mx-3' />
          </div>

        </div>
      </div>
      <div className='container-fluid bg-body-secondary py-4'>
        <div className='py-2'>
          <h1 className='text-center'>{category ? category : "Recent Blogs"}</h1>
          <hr />
        </div>
        <div className='row'>
          <div className='col-md-3 d-flex'>
            <div className="card m-auto" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JMeRGJAV_UzJjuk-Rh8YOHc2BG7SiO6_mQ&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className="card m-auto" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JMeRGJAV_UzJjuk-Rh8YOHc2BG7SiO6_mQ&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className="card m-auto" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JMeRGJAV_UzJjuk-Rh8YOHc2BG7SiO6_mQ&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div className="card m-auto" style={{ width: "18rem" }}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JMeRGJAV_UzJjuk-Rh8YOHc2BG7SiO6_mQ&usqp=CAU" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </HomeStyled>
  )
}

export default Home