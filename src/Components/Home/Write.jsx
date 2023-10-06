import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Parser from 'html-react-parser'
import Navbar from '../Headers/Navbar';
import Footer from '../Footer/footer';

const Write = () => {

    const [title, setTitle] = useState('')
    const [discription, setDiscription] = useState('');
    const [category, setCategory] = useState(null)
    const [file, setFile] = useState()

    const postblog = (e) => {
        e.preventDefault()
        if(category === null){
            alert('select category')
        }else{
            let data = {title,category,discription,thumbnail:file}
            console.log(data)
        }
    }

    return (
        <>
            <Navbar />
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
                            <input className='form-control my-2 bg-transparent border border-primary' type="file" id='title' placeholder='Enter title'  onChange={(e) => setFile(e.target.files[0])} required />
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <label className='form-lable fs-4 fw-bold' htmlFor="discription">Discription</label>
                        <ReactQuill className='border border-primary' theme="snow" value={discription} placeholder='Write your discription here' onChange={setDiscription} style={{ height: '50vh', margin: '20px 0 30px 0' }} />
                        <div className='d-flex justify-content-center'>
                            <button type='submit' className='btn btn-success'>POST</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    )
}

export default Write