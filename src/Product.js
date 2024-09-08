import React from 'react'
import './Product.css'

const Product = () => {
    return (
        <div>
            <div className="product">
                <div className="desc">
                    <p className="title">Title</p>
                    <p className="info">Tas ini  menurpakan tas berbahan dasar kulit komodo yang dibuat</p>
                    <p className="price">$30</p>
                    <p className="rating">⭐⭐⭐</p>
                </div>
                <img className='image_product' src="https://images.unsplash.com/photo-1667411424594-403300e5cc35?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <button className='button_product'>SHOP</button>
            </div>
        </div>
    )
}

export default Product