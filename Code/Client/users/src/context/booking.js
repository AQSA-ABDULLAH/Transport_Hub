import { useState, useContext, createContext } from "react";
const BookingContext = createContext();
const BookingProvider = ({ children }) =>{
    const [booking,setBooking] = useState([]);
    return(
        <BookingContext.Provider value={[booking,setBooking]}>
            {children}
        </BookingContext.Provider>
    );
};
const useBooking = () => useContext(BookingContext);
export {useBooking,BookingProvider};
