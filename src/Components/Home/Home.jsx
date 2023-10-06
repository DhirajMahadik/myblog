import React from 'react'
import Navbar from '../Headers/Navbar'
import Footer from '../Footer/footer'



const Home = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex'>
        <img style={{ height: '40vh' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JMeRGJAV_UzJjuk-Rh8YOHc2BG7SiO6_mQ&usqp=CAU" className="img-fluid w-100 " alt="..." />
      </div>
      <div className='container-fluid  py-4'>
        <div className='py-2'>
          <h1 className='text-center'>All blogs</h1>
        </div>
        <div className='row'>
          <div className='col-md-3 d-flex'>
            <div class="card m-auto" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div class="card m-auto" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div class="card m-auto" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='col-md-3 d-flex'>
            <div class="card m-auto" style={{ width: "18rem" }}>
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home