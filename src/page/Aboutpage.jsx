import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {
    const navigate = useNavigate();

    const goToHomepage = () => {
        navigate('/')
    }

    return (
        <div>
            <h2>Aboutpage</h2>
            <button onClick={goToHomepage}>Go To Homepage</button>
        </div>

    )
}

export default Aboutpage