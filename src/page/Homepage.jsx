import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const navigate = useNavigate();
    const goProductPage = () => {
        navigate('/products?q=pants');
    }

    return (
        <div>
            <h2>Homepage</h2>
            <Link to="/about">Go to about page</Link>
            <button onClick={goProductPage}>Go To Product Page</button>
        </div>
    )
}

export default Homepage