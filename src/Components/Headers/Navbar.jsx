import * as icons from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {



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
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </span>
                                <ul className="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDropdown">
                                    <li className='dropdown-item px-2' role='button'>Languages</li>
                                    <li className='dropdown-item px-2' role='button'>Frameworks</li>
                                    <li className='dropdown-item px-2' role='button'>Libraries</li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/write">Write</Link>
                            </li>
                        </ul>
                        <div className="d-flex" data-bs-toggle="tooltip" data-bs-placement="left" title="login">
                            <icons.PersonCircle role='button' size={20} />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar