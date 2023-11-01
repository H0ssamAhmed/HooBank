import React from 'react'

const List = ({ arr }) => {
    return (
        <ul className='ps-2'>
            {arr.map((e, index) => {
                return <li className='pb-2' key={index}>{e}</li>
            })}
        </ul>
    )
}

export default List