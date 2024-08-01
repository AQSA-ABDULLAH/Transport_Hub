import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TripDetails = () => {
    const params = useParams();
    const [formData, setFormData] = useState({});
    const [images, setImages] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTripDetails = async () => {
            try {
                const response = await axios.get(`https://transport-hub-tawny.vercel.app/api/trips/tripDetails/${params.tripId}`);
                const tripDetails = response.data.data;
                console.log('Trip Details:', tripDetails);

                if (tripDetails.images) {
                    setImages(tripDetails.images);
                    console.log('Images:', tripDetails.images);
                }

                setFormData(tripDetails);
                console.log('Form Data:', tripDetails);
            } catch (error) {
                console.error('Error fetching trip details:', error);
            }
        };

        fetchTripDetails();
    }, [params.tripId]);


    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        {images && <img src={images} className="img-fluid" alt="Trip" />}
                    </div>
                    <div className="col-md-6">
                        <h1 className="mb-4">Trip Details</h1>
                        {(formData.category === 'Family' || formData.category === 'Group') ? (
                            <>
                                <h6>Title : {formData.tripTitle}</h6>
                                <h6>Location : {formData.location}</h6>
                                <h6>Description : {formData.description}</h6>
                                <h6>Extra Information : {formData.extraInformation}</h6>
                                <h6>Price : {formData.price}</h6>
                                <h6>No Of Guests : {formData.noOfGuest}</h6>
                            </>
                        ) : (
                            <>
                                <h6>Title : {formData.tripTitle}</h6>
                                <h6>Location : {formData.location}</h6>
                                <h6>Description : {formData.description}</h6>
                                <h6>Extra Information : {formData.extraInformation}</h6>
                                <h6>Price : {formData.price}</h6>
                                <h6>No Of Guests : {formData.noOfGuest}</h6>
                                <h6>No of Days : {formData.noOfDays}</h6>
                                <h6>No of Nights : {formData.noOfNights}</h6>
                                <h6>Departure City : {formData.departureCity}</h6>
                                <h6>Start Date : {formData.startDate}</h6>
                                <h6>End Date : {formData.endDate}</h6>
                                <h6>Status : {formData.status}</h6>
                                <h6>Ages : {formData.Ages}</h6>
                                <h6>CheckIn Time : {formData.CheckIn}</h6>
                                <h6>Checkout Time: {formData.Checkout}</h6>
                                <h6>Booking Close Date : {formData.BookingCloseDate}</h6>
                            </>
                        )}
                        <button className="btn btn-secondary mt-4" onClick={() => navigate(-1)}>Back</button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default TripDetails;
