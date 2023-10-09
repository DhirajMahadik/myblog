import { HomeStyled } from '../../Styled/HomeStyled'
import * as icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { MagnifyingGlass } from 'react-loader-spinner'

const Home = () => {

  const [category, setCategory] = useState('Recent Blogs')
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const searchHandler = (e) => {

    if(e.target.value === ''){
      setCategory('Recent Blogs')
      getBlogs()
    }else{
      setCategory('Search results')
    setIsLoading(true)
    try {
      axios.get(`http://127.0.0.1:5500/api/blogs/search/${e.target.value}`)
      .then((response) => {
        setBlogs(response.data)
        setIsLoading(false)
      }).catch((error) => {
        setIsLoading(false)
        toast.error(error.message);
      })
    } catch (error) {
      toast.error('something went wrong')
      setIsLoading(false)
    }
    }
  }

  const getBlogs = () => {
    setIsLoading(true)
    setCategory('Recent Blogs')
    try {
      axios.get('http://127.0.0.1:5500/api/all-blogs')
        .then((response) => {
          setBlogs(response.data)
          setIsLoading(false)
        }).catch((error) => {
          setIsLoading(false)
          toast.error(error.message);
        })
    } catch (error) {
      toast.error('Could not fetch data please check youe internet connection');
    }

  }

  const getCategoryWiseBlogs = (value) => {
    setIsLoading(true)
    setCategory(value)
    axios.get(`http://127.0.0.1:5500/api/blogs/${value}`)
      .then((response) => {
        setIsLoading(false)
        setBlogs(response.data)
      }).catch((error) => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getBlogs()
    // eslint-disable-next-line   
  }, [])

  return (
    <HomeStyled>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        theme="light"
      />
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
        <div className='d-flex flex-column py-2'>
          <h1 className='text-center text-capitalize'>{category ? category : "Recent Blogs"}</h1>
          <div className=" m-auto dropdown ">
            <span className="dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Select Category
            </span>
            <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDropdown">
              <li onClick={() => getBlogs()} className='dropdown-item px-2' role='button'>Recent</li>
              <li onClick={() => getCategoryWiseBlogs('languages')} className='dropdown-item px-2' role='button'>Languages</li>
              <li onClick={() => getCategoryWiseBlogs('frameworks')} className='dropdown-item px-2' role='button'>Frameworks</li>
              <li onClick={() => getCategoryWiseBlogs('libraries')} className='dropdown-item px-2' role='button'>Libraries</li>
            </ul>
          </div>
          <hr />
        </div>
        <div className='row'>
          {!isLoading ? blogs.length >= 1 ? blogs.map((element, index) => {
            return <div className='col-md-3 p-2 d-flex'>
              <div className="card mx-auto  " style={{ width: "18rem", height: '450px' }}>
                <img src={element.thumbnail} className="card-img-top" alt="..." style={{ width: "18rem", height: '11rem' }} />
                <div className="card-body">
                <span class="badge rounded-pill text-bg-secondary">{element.category}</span>
                  <h5 className="card-title">{element.title.slice(0, 50)}...</h5>
                  <p className="card-text text-justify">{element.headline && element.headline.slice(0, 100)}...</p>
                  <Link to={`/blog/${element.id}`} className="btn btn-primary btn-sm">view more</Link>
                </div>
              </div>
            </div>
          }) : <div className='col-md-12 my-4'>
            <div className='my-4'>
              <h2 className='text-center'>No blogs found...</h2>
            </div>
          </div> : <div className='d-flex col-md-12 my-4'>
            <div className='mx-auto my-4'>
              <MagnifyingGlass width={'50px'} height={'50px'} color='#e15b64'/>
            </div>
            </div>
          }

        </div>
      </div>
    </HomeStyled>
  )
}

export default Home