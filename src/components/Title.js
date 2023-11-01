import React from 'react'

const Title = ({ lineOne, lineTwo }) => {
    return (
        <div>
            <h1 className='text-white '>
                {lineOne}
                <br />
                {lineTwo}</h1>
        </div>
    )
}

export default Title