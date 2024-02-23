import { ChevronDown } from 'lucide-react'
import React from 'react'

const Footer = () => {
    return (
        <div className='footer_main'>
            <div>
                <h1>CATEGORIES</h1>
                <p>Web Builder</p>
                <p>Hosting</p>
                <p>Data Center</p>
                <p>Robotic-Automation</p>
            </div>
            <div>
                <h1>CONTACT</h1>
                <p>Contact</p>
                <p>Terms Of Service</p>
                <p>Categories</p>
                <p>About</p>
            </div>

            <div className='state'>
                <p>United States</p>
                <ChevronDown color='#D1D6DA' />
            </div>
        </div>
    )
}

export default Footer