import React from 'react';
import axios from 'axios';

export default function ConfirmBooking() {
    const [formData, setFormData] = useState({
        dropLocation: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        cnic: '',
        zipCode: '',
        address: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve carDetails from local storage
        const filterData = JSON.parse(localStorage.getItem('filterData'));
        const dropLocation = filterData.dropLocation;

        // Combine formData with carDetails
        const combinedData = { ...formData, dropLocation: dropLocation };

        // Log combined data to console (for debugging)
        console.log('Sending combined data:', combinedData);

        // Send combined data to server
        axios.post('http://localhost:5000/api/rental-booking/book-rental', combinedData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
            })
            .catch(error => {
                console.error('Failed to send data:', error.response ? error.response.data : error.message);
            });
    };
    return (
        <>
            <div className={style.btn}>
                <Button
                    primary
                    size={"14px"}
                    radius={"4px"}
                    btnText="Confirm Booking"
                    onClick={handleSubmit}
                />
            </div>
        </>
    )
}



        // Check for empty fields in formData
        // const isEmpty = Object.values(formData).some(x => x.trim() === '');
        // if (isEmpty) {
        //   console.error('Please fill in all required fields');
        //   return;
        // }
