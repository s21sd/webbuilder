import React from 'react'
import '../Styles/styles.css'
import { Search } from 'lucide-react';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='inputbox'>
                <Search />
                <input type="text" />
            </div>
            <div className='tags'>
                <p>Categories</p>
                <p>Website Builders</p>
                <p>Today's deals</p>
            </div>
        </div>
    )
}

export default Navbar
