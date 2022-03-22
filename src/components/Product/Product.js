import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'
const Product = ({ addToCart, product }) => {
    // const { addToCart, product } = props
    const { name, img, seller, price, ratings } = product

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='products-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price {price}</p>
                <span className='seller-info'>
                    <p><small>Saller: {seller}</small></p>
                    <p><small>Ratting: {ratings}</small></p>
                </span>

            </div>
            <button className='btn-cart' onClick={() => addToCart(product)}><p>Add to cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
            </button>
        </div>
    );
};

export default Product;