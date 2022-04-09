import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products)
    const handelRemovedProducts = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='review-items-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handelRemovedProducts={handelRemovedProducts}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} >
                    <Link to={'/'}>
                        <button>Home</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;