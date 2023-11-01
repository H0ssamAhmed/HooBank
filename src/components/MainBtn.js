import React from 'react'

const MainBtn = ({ text }) => {
    return (
        <div className='d-flex justify-content-center align-items-center '>
            <button className='mainBtn'>{text}</button>
        </div>
    )
}

export default MainBtn