import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])
    useEffect(() => {
        const saveCart = []
        const storedCart = getStoredCart()
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
            setCart(saveCart)
        }
    }, [products])


    const addToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]

        } else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct._id)
    }


    return (
        <div className='shop-container'>
            <div className='product-container'>
                {products.map(product => <Product product={product} key={product._id} addToCart={addToCart} > </Product>)}

                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(num => <button>{num}</button>)
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to={'/orders'}>
                        <button>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;