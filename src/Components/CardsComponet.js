import React from 'react'
import Cards from './Cards'

const CardsComponet = () => {
    return (
        <div>
            <h1 className='headings1'>Related deals you might like for</h1>
            <div className='cardscomponet'>
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default CardsComponet