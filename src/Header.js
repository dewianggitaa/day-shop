import React from 'react'
import './Header.css'
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
    return (
    <div className='Header'>
        <div className="header_logo">
            <StorefrontOutlinedIcon className="header_image"/>
            <h2 className="logo_name">dayShop</h2>
        </div>

        <div className="header_search">
            <input type='text' className='searchInput'/>
            <SearchOutlinedIcon className='search_icon'/>
        </div>

        <div className="header_nav">
            <div className="nav_item">
                <span className="nav_One">Hello</span>
                <span className="nav_Two">SignIn</span>
            </div>

            <div className="nav_item">
                <span className="nav_One">Your</span>
                <span className="nav_Two">Shop</span>
            </div>

            <div className="nav_item">
                <ShoppingBasketOutlinedIcon className="nav_icon" fontSize="large"/>
                <span className="nav_Two">0</span>
            </div>
        </div>

    </div>
    )
}

export default Header