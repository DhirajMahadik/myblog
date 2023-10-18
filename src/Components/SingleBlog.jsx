import axios from 'axios'
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast ,ToastContainer} from 'react-toastify'

const SingleBlog = () => {

    const {id} = useParams()
    const [blog,setBlog] = useState({title:'',thumbnail:'',description:'',headline:"",date:''})
   
    const getBlogData = () =>{
        axios.get(`${process.env.REACT_APP_URL}/api/blog/${id}`)
        .then((response)=>{
            setBlog(response.data)
        }).catch((error)=>{
           toast.error(error.message)
        })
    }

    useEffect(()=>{
        getBlogData()
        // eslint-disable-next-line
    },[])

  return (
    <div className='container bg-body-secondary p-4'>
        <ToastContainer position='top-center' autoClose={5000} theme='light'/>
        <h1 className='text-center fw-bold'>{blog.title && blog.title}</h1>
        <hr />
        <div className="d-flex flex-column m-3">
            <img src={blog.thumbnail && blog.thumbnail} className='img-fluid w-75 m-auto' alt="blog thumbnail" />
            {/* <div>
                <span>{blog.date && blog.date}</span>
            </div> */}
        </div> 
        <h2 className=" fw-bold text-justify">{blog.headline && blog.headline} </h2> 
        <span className='fst-italic'>{blog.date && blog.date}</span>
        <br />
        <br />
        <div className='mx-2 text-justify'>
            {parse(blog.description && blog.description)}
        </div>     
    </div>
  )
}

export default SingleBlog