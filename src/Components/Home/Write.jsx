import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css'
import { ThreeDots } from 'react-loader-spinner'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Write = () => {

    const [title, setTitle] = useState('')
    const [description, setDiscription] = useState('');
    const [headline, setHeadline] = useState('');
    const [category, setCategory] = useState(null)
    const [file, setFile] = useState()
    const [isLoading, setIsLoding] = useState(false)

    const authToken = localStorage.getItem('auth_token')

    const navigate = useNavigate()

    const postblog = (e) => {
        e.preventDefault()
        if (category === null) {
            toast.error('select category')
        } else {
            let data = { title, category, description, headline, thumbnail: file }
            let formData = new FormData();
            for (let key of Object.keys(data)) {
                formData.append(key, data[key]);
            }
            setIsLoding(true)
            axios({ method: 'POST', url: 'http://127.0.0.1:5500/api/add-blog', data: formData, headers: { 'authorization': `Bearer ${JSON.parse(authToken)}` } })
                .then((response) => {
                    setIsLoding(false)
                    toast.success(response.data.message)
                    setTitle('')
                    setHeadline('')
                    setDiscription('')
                    setCategory('')
                    setFile('')
                }).catch((error) => {
                    setIsLoding(false)
                    toast.error(error.message)

                })

        }
    }

    useEffect(() => {
        if (!authToken) navigate('/')
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <ToastContainer position='top-center' theme='light' autoClose={3000} />
            {/* <div className='d-flex position-absolute sticky-top  vw-100' style={{backgroundColor:'#00000026'}}>
                <div className='m-auto'>
                 <ThreeDots height="50" width="80"  radius="9" color='green' className="m-auto" />
                </div>
            </div> */}
            <div className='container-fluid bg-primary-subtle vh-80 '>
                <form className='container bg-light p-4' onSubmit={postblog}>
                    <div className='heading'>
                        <h1 className='text-center'>Write a new blog</h1>
                        <hr />
                    </div>
                    <div className="row">
                        <div className='d-flex col-md-4 flex-column'>
                            <label className='form-lable fs-4 fw-bold' htmlFor="title">Blog Title</label>
                            <input className='form-control my-2 bg-transparent border border-primary' type="text" id='title' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <div className='d-flex col-md-4 flex-column  '>
                            <label className='form-lable fs-4 fw-bold  ' >Choose Category</label>
                            <div className="d-flex align-items-center  flex-wrap" style={{ height: '-webkit-fill-available' }}>

                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="category" id="languages" value='languages' onChange={(e) => setCategory(e.target.value)} />
                                    <label class="form-check-label" htmlFor="languages">
                                        Languages
                                    </label>
                                </div>
                                <div class="form-check mx-4">
                                    <input class="form-check-input" type="radio" name="category" id="frameworks" value='frameworks' onChange={(e) => setCategory(e.target.value)} />
                                    <label class="form-check-label" htmlFor="frameworks">
                                        Frameworks
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="category" id="libraries" value='libraries' onChange={(e) => setCategory(e.target.value)} />
                                    <label class="form-check-label" htmlFor="libraries">
                                        Libraries
                                    </label>
                                </div>

                            </div>
                        </div>
                        <div className='d-flex col-md-4 flex-column'>
                            <label className='form-lable fs-4 fw-bold' htmlFor="">Blog Thumbnail</label>
                            <input className='form-control my-2 bg-transparent border border-primary' type="file" id='title' onChange={(e) => setFile(e.target.files[0])} required />
                        </div>
                        <div className='d-flex col-md-12 flex-column'>
                            <label className='form-lable fs-4 fw-bold' htmlFor="">Blog Thumbnail</label>
                            <input className='form-control my-2 bg-transparent border border-primary' value={headline} type="text" id='headline' placeholder='Enter main headline' onChange={(e) => setHeadline(e.target.value)} required />
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='form-lable fs-4 fw-bold' htmlFor="discription">Discription</label>
                        <ReactQuill theme="snow" value={description} placeholder='Write your discription here' onChange={setDiscription} style={{ height: '50vh', margin: '20px 0 30px 0' }} />
                        
                        <div className='d-flex flex-column align-items-center justify-content-center my-4'>
                            <div>
                           { isLoading && <ThreeDots height="50" width="80"  radius="9" color='green' className="m-auto" />}
                            </div>
                            <button type='submit' className='btn btn-success mx-auto my-4'>POST</button>
                        </div>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Write