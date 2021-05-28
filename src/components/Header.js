import React from 'react'

const header = () => {
    return (
        <div className="container">
            <header className="d-flex justify-content-center py-3">
                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/home" className="nav-link active" aria-current="page">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                    <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                    <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                    <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                </ul>
            </header>
        </div>
        // <div>
        //     <div classNameName="nav-header">Header</div>

        //     <ul>
        //         <li>
        //             <a href="/contact">contact</a>
        //             <br/>
        //             <a href="/about">about</a> <br/>
        //             <a href="/index">home</a>
        //         </li>
        //     </ul>
        // </div>
    )
}
export default header;