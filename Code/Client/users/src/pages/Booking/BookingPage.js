import {React, useState, useEffect} from 'react'
import { useBooking } from '../../context/booking';
// import { useAuth } from '../../context/auth';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./bookingStyle.css";
import { loadStripe } from '@stripe/stripe-js';
import toast from 'react-hot-toast';
const BookingPage = () => {
    // const [auth, setAuth] = useAuth();
    const [booking, setBooking] = useBooking();
    const navigate = useNavigate();
    const { tripId } = useParams();
    const [tripDetails, setTripDetails] = useState([]);
    // delete booking
    const removeBooking =async (pid)=>{
        try{
            let myBooking = [...booking]
            let index = myBooking.findIndex(item => item._id === pid)
            myBooking.splice(index,1);
            setBooking(myBooking);
            localStorage.setItem("booking",JSON.stringify(myBooking));
        }
        catch(error){
            console.log(error)
        }
    }
    const totalPrice= () =>{
        try{
            let total = 0;
            booking?.map((item)=>{
                total= total + item.totalPrice
            });
            return total.toLocaleString("en-us",{
                style: "currency",
                currency: "USD",
            });
        }
        catch(error){
            console.log(error)
        }
    }
    
    
      // Payment integration
      const makePayment = async(pid)=>{
       try{
        const headers = {
            "Content-Type": "application/json"
        };
        const response = await fetch("https://transport-hub-tawny.vercel.app/api/trips/create-checkout-session",{
            method:"POST",
            headers:headers,
            body: JSON.stringify({ booking: booking }), 
        }
        );
        const data = await response.json();
        if(!response.ok){
            throw new Error(data.message + 'pls try again');
        }
        if(data.session.url){
            window.location.href = data.session.url
        }
        let myBooking = [...booking]
            let index = myBooking.findIndex(item => item._id === pid)
            myBooking.splice(index,1);
            setBooking(myBooking);
            localStorage.setItem("booking",JSON.stringify(myBooking));
       }
       catch(error){
        toast.error(error.message)
       }
    }
    return (
        <>
        {/* New  */}
         <div className='row justify-content-center m-0'>
             <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                 <div className="card">
                     <div className="card-header p-3" style={{backgroundColor: 'rgb(126, 34, 206)' }}>
                         <div className='card-header-flex'>
                             <h5 className='text-white m-0'>Cart Calculation{booking.length >0 ? `(${booking.length})`:""}</h5>
                             
                         </div>

                     </div>
                     <div className="card-body p-0">
                             {
                                 booking.length === 0 ? <table className='table cart-table mb-0'>
                                     <tbody>
                                         <tr>
                                             <td colSpan={6}>
                                                 <div className='cart-empty'>
                                                     <i className='fa fa-shopping-cart'></i>
                                                     <p>Your Booking Is Empty</p>
                                                 </div>
                                             </td>
                                         </tr>
                                     </tbody>
                                 </table> :
                                 <table className='table cart-table mb-0 table-responsive-sm'>
                                     <thead>
                                         <tr>
                                             <th>Action</th>
                                             <th>Product</th>
                                             <th>Name</th>
                                             <th>Description</th>
                                             <th>Price</th>
                                             
                                         </tr>
                                     </thead>
                                     <tbody>
                                         {
                                             booking?.map((p,index)=>{
                                                 return (
                                                     <>
                                                         <tr>
                                                             <td>
                                                                 <button className='prdct-delete'
                                                                 onClick={() => removeBooking(p._id)}
                                                                 ><i className='fa fa-trash-alt'></i></button>
                                                             </td>
                                                             <td><div className='product-img'><img src={p.images} alt="" /></div></td>
                                                             <td><div className='product-name'><p>{p.tripTitle}</p></div></td>
                                                             <td>{p.description}</td>
                                                             <td>{p.totalPrice}</td>
                                                             
                                                         </tr>
                                                     </>
                                                 )
                                             })
                                         }
                                     </tbody>
                                     <tfoot>
                                         <tr>
                                             <th>&nbsp;</th>
                                             <th colSpan={2}>&nbsp;</th>
                                             <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalPrice()}</span></th>
                                             <th className='text-right'><button className='btn btn-success'onClick={makePayment} type='button'>Checkout</button></th>
                                         </tr>
                                     </tfoot>
                                 </table>
                             }
                     </div>
                 </div>
             </div>
         </div>
     </>
    )
}

export default BookingPage
