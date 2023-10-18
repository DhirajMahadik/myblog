import axios from 'axios'
import { useState } from 'react'
import {PersonCircle,X} from 'react-bootstrap-icons'
import {ToastContainer,toast} from 'react-toastify'


const Login = ({setLoginModal, setAuthToken}) => {

    const [data , setData] = useState({username:'', password:''})

    const loginHandler = (e) =>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_URL}/api/auth/login`,data)
        .then((response)=>{
            localStorage.setItem('auth_token',JSON.stringify(response.data.token))
            setData({username:'', password:''})
            setAuthToken(true)
            setLoginModal(false)
            toast.success('Login successfully' )
        }).catch((error)=>{
            toast.error(error.message )
        })
    }

    const onchangeHander = (e) =>{
        setData({...data, [e.target.name]:e.target.value})
    }

    return (
        <>
        <ToastContainer position='top-center' autoClose={5000} theme='light'/>
         
        <div className='container-fluid position-absolute d-flex z-1 ' style={{ height: '100vh' }}>
            <div className="d-flex p-3 flex-column bg-light m-auto position-sticky" style={{ height: '350px', width: '400px',borderRadius:'10px' }}>
                <div className='d-flex justify-content-end'><X role='button' onClick={()=>setLoginModal(false)} size={25}/></div>
                <form className='m-auto w-75' onSubmit={loginHandler}>
                <div className="d-flex justify-content-center py-2">
                    <PersonCircle  size={35}/>
                </div>
                    <div className="py-2">
                        <label className='form-lable' htmlFor="username">Username</label>
                        <input required className='form-control' type="text" name='username' id='username' value={data.username} onChange={onchangeHander} />
                    </div>
                    <div className="py-2">
                        <label className='form-lable' htmlFor="password">Password</label>
                        <input required className='form-control' type="password" name='password' id='password' value={data.password} onChange={onchangeHander}/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center py-2">
                        <button type="submit" className='btn btn-success my-2' >Login</button>
                    </div> 

                </form>
            </div>
        </div>
        </>
    )
}

export default Login