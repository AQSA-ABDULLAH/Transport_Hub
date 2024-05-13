const mongoose = require('mongoose'); // Required for ObjectId validation
const Trips_Booking  = require("../../models/Booking/Trips_Booking.js");
const Trips = require("../../models/Trips");
const User = require("../../models/Users");
const Stripe = require('stripe');
class TripBookingController {
    static tripBooking=async (req, res) =>{
        const {trip_id,passengerDetails,contactDetails,departCity,departDate,NoOfAdults,NoOfChildren,NoOfInfants,totalPrice} = req.body;
        console.log({trip_id,passengerDetails,contactDetails,departCity,departDate,NoOfAdults,NoOfChildren,NoOfInfants,totalPrice});
        try {
            const newTripBooking = await Trips_Booking.create({trip_id,passengerDetails,contactDetails,departCity,departDate,NoOfAdults,NoOfChildren,NoOfInfants,totalPrice});
            console.log("Data saved");
            console.log(newTripBooking);
            res.status(201).send({ status: "success", message: "Trip saved successfully", data: newTripBooking });
          } catch (error) {
            console.error(error); // Log the error
            res.status(500).send({ status: "failed", message: "Internal Server Error" });
          }
        
    }
    
    // GET all bookings
    static async getAllTripBookings(req, res) {
        try {
            const tripBooking = await Trips_Booking.find();
            res.status(200).json({ status: "success", data: tripBooking });
        } catch (error) {
            res.status(500).json({ status: "failed", message: "Failed to get data" });
        }
    }

    // GET a single booking by ID
    static getTripBooking = async (req, res) => {
        const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ status: "failed", message: `Invalid Booking ID: ${id}` });
        }
    
        try {
            const tripBooking = await Trips_Booking.find().populate('trip_id');
            if (!tripBooking) {
                return res.status(404).json({ status: "failed", message: `No Booking found with ID: ${id}` });
            }
            res.status(200).json({ status: "success", data: tripBooking });
        } catch (error) {
            console.error("Error fetching Booking data:", error);
            res.status(500).json({ status: "failed", message: "Failed to get Booking Data" });
        }
    };
    //delete booking
    static deleteTripBooking = async (req, res) => {
        const tripId  = req.params.id;
        try {
            const tripBooking = await Trips_Booking.findById(tripId);
            console.log(tripBooking)
          await Trips_Booking.findByIdAndDelete(tripBooking);
          if (!tripBooking) {
            return res.status(404).send({ status: "failed", message: "Trip not found" });
          }
          res.status(200).send({ status: "success", message: "Trip deleted suc-cessfully", data: tripBooking });
        } catch (error) {
          console.error(error);
          res.status(500).send({ status: "failed", message: "Internal Server Error" });
        }
      }
      static makePayment = async (req, res) => {
        try {
            // Retrieve booking details from local storage
            const { booking }= req.body;
            console.log("data from frontend",booking);
            if (!booking || !Array.isArray(booking) || booking.length === 0) {
                return res.status(400).json({ success: false, message: "No booking found" });
                
            }
            for (let i = 0; i < booking.length; i++) {
                const tripId = booking[i].trip_id;
                const trip = await Trips.findById(tripId);
    
                // Check if trip exists
                if (!trip) { 
                    return res.status(404).json({ success: false, message: `Trip with ID ${tripId} not found` });
                }
    
            const lineItems = booking.map((bk)=>({
                
                price_data: {
                    currency: 'usd',
                    unit_amount: bk.totalPrice * 100,
                    product_data: {
                        name: bk.tripTitle,
                        description: bk.description,
                        images: [bk.images],
                    },
                },
                quantity: 1
            }));
            
            const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                mode: 'payment',
                success_url: `http://localhost:3000/checkout-success`,
                cancel_url: `http://localhost:3000`,
                client_reference_id: tripId,
                line_items: lineItems,
            });
    
            const bookingData = {
                totalPrice: booking[i].totalPrice,
                trip_id: trip,
                passengerDetails: booking[i].passengerDetails,
                contactDetails:booking[i].contactDetails,
                departCity:booking[i].departCity,
                departDate:booking[i].departDate,
                NoOfAdults:booking[i].NoOfAdults,
                NoOfChildren:booking[i].NoOfChildren,
                NoOfInfants:booking[i].NoOfInfants,
                session: session.id,
            };
            const bookingSaves = booking.map(async (bk) => {
                // ... (prepare booking data as before)
                const newBooking = new Trips_Booking(bookingData);
                return await newBooking.save();
              });
              
              await Promise.all(bookingSaves);
            return res.status(200).json({ success: true, message: "Successfully paid", session });
        }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ success: false, message: "Error creating checkout session" });
        }
    }
    
    
}

module.exports = { TripBookingController };