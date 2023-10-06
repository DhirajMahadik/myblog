import * as icons from 'react-bootstrap-icons'

const Footer = () =>{

    return(
        <div className="d-flex text-light bg-secondary py-4" >
            <div className='m-auto d-flex flex-column justify-content-center align-items-center'>
            <p>Copyright © 2023 myblogs.com</p>
            <div>
            <icons.Instagram/>
             <icons.Facebook className='mx-2'/>
             <icons.Twitter/>
            </div>             
            </div>
             
        </div>
    )
}

export default Footer