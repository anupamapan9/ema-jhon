import React from 'react';

const Cart = (props) => {
    const { cart } = props
    return (
        <div>
            <h2>Order Summery</h2>
            {cart.length}
        </div>
    );
};

export default Cart;