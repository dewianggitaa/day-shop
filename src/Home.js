import React from 'react'
import './Home.css'
import Header from './Header'
import Product from './Product'

const Home = () => {
    return (
        <div>
            <div className="app_container">
                <Header/>
                <img className='image_home' src='https://images.unsplash.com/photo-1551496825-e8365e18e56a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                
                <div className="home_row">
                    <Product/>
                    <Product/>  
                </div>

                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>  
                </div>

                <div className="home_row">
                    <Product/>
                </div>
                
            </div>
        </div>
    )
}

export default Home