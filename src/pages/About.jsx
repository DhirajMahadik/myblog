import React from 'react'

const About = () => {
    return (
        <>
            <div className="container-fluid d-flex bg-body-secondary vh-100" >
                <div className='mx-auto d-flex flex-column my-4 vw-75'>
                    <h2 className='text-center my-4'>About Us</h2>
                    <div className="w-75 mx-auto overflow-auto">
                    <div>
                        At JavaScript Today, we are dedicated to bringing you great content. Our time is spent writing articles about all things like languages, framework, libraries as well as other areas of technology, including computer science, software engineering, web design, and much more.
                    </div>
                    <div>
                    Nothing makes us happier than spending countless hours writing about something that we believe would be useful for potentially thousands of other people. Our articles are carefully crafted to be top-notch content so that you can sit back, sip some coffee, and learn some things about technology. Take a look at the categories, explore the home page, or jump right into an article.
                    </div>
                    <div>
                    Are you a writer? We do accept guest posts, so feel free to fill out this form or send us a message if you’d like us to publish your work.
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About