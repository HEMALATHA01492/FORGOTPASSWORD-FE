import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='text-center'>
            <h1>WELCOME TO HOMEPAGE</h1>
            <Link className='btn btn-success fw-bold p-2' to='/signin'>Log Out</Link>
        </div>
    )
}

export default Home;