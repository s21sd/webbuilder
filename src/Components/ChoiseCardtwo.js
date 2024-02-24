import React from 'react'
import newData from '../Fourth_Comp_data'
import { CheckCircle2, ChevronDown, Star, Trophy } from 'lucide-react'
import productimg from '../assests/download.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
const ChoiseCardtwo = () => {
    return (
        <div className='card1'>
            {
                newData.map((items) => {
                    return (

                        <div className='choiseCard2' key={items.id}>

                            <div className='choiseCard_main'>
                                <p className='id2'>{items.id}</p>
                                <div className='choiseCard_main_img'>
                                    <img src={productimg} alt="product_img" />
                                    <p>CDK</p>
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

                                        </div>

                                    </div>
                                </div>

                                <div className="choiseCard_main_actions">
                                    <div className='choiseCard_main_actions_one'>
                                        <p className='p1'>
                                            {items.rating}
                                        </p>

                                        <p>{items.type}</p>
                                        <div className='starrating'>
                                            <FontAwesomeIcon color='#FFB80F' icon={faStar} />
                                            <FontAwesomeIcon color='#FFB80F' icon={faStar} />
                                            <FontAwesomeIcon color='#FFB80F' icon={faStar} />
                                            <FontAwesomeIcon color='#FFB80F' icon={faStar} />
                                            <FontAwesomeIcon color='#FFB80F' icon={faStarHalfStroke} />

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
