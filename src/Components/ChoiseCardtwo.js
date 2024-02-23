import React from 'react'
import newData from '../Third_Comp_data'
import { CheckCircle2,  ChevronDown, Star, Trophy } from 'lucide-react'
import productimg from '../assests/download.png'

const ChoiseCardtwo = () => {
    return (
        <div className='card'>
            {
                newData.map((items) => {
                    return (

                        <div className='choiseCard2' key={items.id}>

                            <div className='choiseCard_main'>
                                <p className='id'>{items.id}</p>
                                <div className='choiseCard_main_img'>
                                    <img src={productimg} alt="product_img" />
                                </div>

                                <div className="choiseCard_main_content">

                                    <div>
                                        <p>
                                            <span>CDK Resposive Builder:</span> {items.disc_one}</p>
                                        <p>26% Off</p>
                                        <p style={{
                                            fontWeight: 'bold'
                                        }} >Main highlights</p>
                                        <div className='choiseCard_main_desc_two'>
                                            <p><span>9.9</span>{items.disc_two.one}</p>
                                            <p><span>8.9</span>{items.disc_two.two}</p>
                                            <p><span>8.9</span>{items.disc_two.three}</p>
                                        </div>
                                        <div className='choiseCard_main_desc_three'>
                                            <p>Why we love it</p>
                                            <p><CheckCircle2 color='#0855A1' size={14} /> {items.discThree.one}</p>
                                            <p><CheckCircle2 color='#0855A1' size={14} /> {items.discThree.two}</p>
                                            <p><CheckCircle2 color='#0855A1' size={14} /> {items.discThree.three}</p>
                                        </div>

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
                    )
                })
            }
        </div>
    )
}

export default ChoiseCardtwo
