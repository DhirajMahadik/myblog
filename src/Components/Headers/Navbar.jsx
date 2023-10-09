
import * as icons from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = ({ setLoginModal ,authToken,setAuthToken}) => {

    const navigate = useNavigate()
     

    const logoutHandler = () =>{
        localStorage.removeItem('auth_token')
        setAuthToken(false)
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle
">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold fst-italic" to="/"><span className='text-danger'>My</span>Blogs...</Link>
                    <button style={{ border: 'none' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            {authToken && <li className="nav-item">
                                <Link className="nav-link" to="/write">Write</Link>
                            </li>}

                        </ul>
                        <div className="d-flex" data-bs-toggle="tooltip" data-bs-placement="left" title="login">
                           {authToken && <button className='btn btn-small btn-danger' onClick={logoutHandler} >Logout</button>}
                           { !authToken && <icons.PersonCircle role='button' size={20} onClick={() => setLoginModal(true)} />}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar