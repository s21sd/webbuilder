import React from 'react'
import data from '../Third_Comp_data'
import { ChevronDown, Star, Trophy } from 'lucide-react'
import productimg from '../assests/download.png'
const ChoiseCard = () => {
    return (
        <div className='card'>

            {
                data.map((items) => {
                    return (

                        <div>
                            {
                                items.id == 1 || items.id == 2 ?
                                    <div className='trophy'>
                                        <Trophy />
                                        <p>Best Choise</p>

                                    </div> : <></>


                            }

                            <div className='choiseCard' key={items.id}>

                                <div className='choiseCard_main'>
                                    <p style={{
                                        border: items.id == 1 ? 'none' : ''
                                    }} className='id'>{items.id}</p>
                                    <div className='choiseCard_main_img'>
                                        <img src={productimg} alt="product_img" />
                                    </div>

                                    <div className="choiseCard_main_content">

                                        <div>
                                            <p>
                                                {
                                                    items.id === 1 || items.id === 3 ? <span>WixPro 72-Inch Responsive Website Builder-</span> : <span>SiteCraft 68-Inch Ultimate Web Design Studio-</span>
                                                }

                                                {items.disc_one}</p>
                                            <p style={{
                                                fontWeight: 'bold'
                                            }} >Main highlights</p>
                                            <p>{items.disc_two}</p>
                                            <div className='show_more_div'>
                                                <p>Show more </p>
                                                <ChevronDown size={18} style={{
                                                    marginTop: '4px',

                                                }} color='#1B88F4' />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="choiseCard_main_actions">
                                        <div className='choiseCard_main_actions_one'>
                                            <p>
                                                {items.rating}
                                            </p>
                                            <p>{items.type}</p>
                                            <div>
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                                <Star />
                                            </div>
                                        </div>
                                        <div>
                                            <button>View</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ChoiseCard
