import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItems from '../components/CartItems';
import { useEffect, useState } from 'react';

const Cart = () => {
    const {cart} = useSelector( (state) => state );
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect ( ()=>{
        setTotalAmount( cart.reduce( (acc,curr) => acc+curr.price ,0) );
    } ,[cart]);


    return (
        <div className='flex items-center ml-60 mt-10 '>
        {
            cart.length > 0 ?
            (
            <div className='flex max-w-[1200px] space-x-24 '>
                <div className='max-w-[680px] min-h-[80vh] '>
                {
                    cart.map( (item,index) =>(
                    <CartItems item={item} key={item.id} itemIndex={index} />
                ) )
                }
                </div>

                <div className='flex flex-col justify-between items-end mb-8'>

                <div className='mt-8 h-[100%] justify-between ml-10'>
                    <div className='text-green-700 text-2xl font-bold'> Your Cart</div>
                    <div className=' text-green-700 text-5xl font-bold'>Summary</div>
                    <p className='text-xl font-bold text-slate-700 mt-4'>
                         Total Items :<span > {cart.length}</span> 
                    </p>
                </div>
                <div className=' mt-auto flex flex-col justify-center  items-center w-[350px] fixed bottom-5 right-40'>
                    <p className='text-xl font-bold text-slate-700'>Total Amount: <span className='text-green-600'> ${totalAmount}</span>  </p>
                    <button className='w-[350px] bg-green-600 rounded-full p-2 mt-6 font-bold text-xl text-white
                    hover:bg-slate-100 hover:text-green-600
                    hover: transition-all duration-500
                    hover:border-2 border-green-600 '> CheckOut Now</button>
                </div>

                </div>
            </div>
               
            ) 
            :
            (<div className='flex w-screen h-screen justify-center items-center flex-col'>
                <p className='text-2xl font-bold text-gray-700'>Your Cart is empty</p>
                <NavLink to={"/"}>
                    <button className=' text-green-600 mt-4 border-2 rounded-full p-3
                     hover:bg-green-600 transition-all duration-300 
                     font-bold hover:text-white  '> Shop Now</button>
                </NavLink>
            </div>)
        }
           
        </div>
    )
}

export default Cart;