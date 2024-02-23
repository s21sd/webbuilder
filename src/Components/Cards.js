import React from 'react'
import cardData from '../Card_Comp_data'
import productimg from '../assests/download.png'
const Cards = () => {
    return (
        <div>
           
            {
                cardData.map((items => {
                    return (
                        <div className='cardscomp'>
                            <div>
                                <img src={productimg} alt="product_img" />
                            </div>
                            <div className='cards_comp_ratings'>
                                <div>{items.offRating}</div>
                                <div>{items.time}</div>
                            </div>
                            <div className='cards_comp_heading'>
                                <h1>{items.heading}</h1>
                                <p>{items.desc_one}</p>
                                <div className='cards_comp_money'>
                                    <p className='cards_comp_current_money'>{items.curren_money}</p>
                                    <p className='cards_comp_initial_money'>{items.initial_money}</p>
                                    <p className='cards_comp_offPercentage'>({items.offRating})</p>
                                </div>
                            </div>
                            <div className='btndiv'>
                                <button>View Deal</button>
                            </div>

                        </div>
                    )
                }))
            }
        </div>
    )
}

export default Cards