import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    // const navigate = useNavigate()
    const handelEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handelAddressBlur = (e) => {
        setAddress(e.target.value)
    }
    const handelPhoneBlur = (e) => {
        setPhone(e.target.value)
    }
    const handelNameBlur = (e) => {
        setName(e.target.value)
    }


    const handelCreateNewUser = (e) => {
        e.preventDefault()
        const shippingInfo = { name, email, address, phone }
        console.log(shippingInfo)

    }

    return (
        <div className='login'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handelCreateNewUser}>
                        <div className='input-group'>
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="name" id="" required onBlur={handelNameBlur} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="" required value={user?.email} readOnly />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="address">Address</label>
                            <input type="text" name="address" id="" required onBlur={handelAddressBlur} />
                        </div>
                        <div className='input-group'>
                            <label htmlFor="phone">Phone</label>
                            <input type="number" name="phone" id="" required onBlur={handelPhoneBlur} />
                        </div>
                        <input type="submit" value="Shipping" className='form-submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;