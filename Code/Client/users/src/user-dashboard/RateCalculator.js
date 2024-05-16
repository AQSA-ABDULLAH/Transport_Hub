// RateCalculator.js
import React, { useRef, useState } from 'react';
import {
  Button,
  IconButton,
  Input,
  Typography,
  Skeleton,
  Box,
  Grid,
} from '@mui/material';
import { LocationOn as LocationOnIcon, Clear as ClearIcon } from '@mui/icons-material';

import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 48.8584, lng: 2.2945 };

function RateCalculator({ onRouteCalculated }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [rate, setRate] = useState(0);
  const originRef = useRef(null);
  const destinationRef = useRef(null);

  if (!isLoaded) {
    return <Skeleton />;
  }

  async function calculateRoute() {
    if (!originRef.current || !destinationRef.current) {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    const distanceInKm = results.routes[0].legs[0].distance.value / 1000; // Convert distance to kilometers
    const ratePerKm = 100; // Rate per kilometer
    const rate = distanceInKm * ratePerKm; // Calculate the rate
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setRate(rate); // Set the rate state

    // Pass the calculated rate, pickup location, and destination address back to the parent component
    onRouteCalculated(rate, originRef.current.value, destinationRef.current.value);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

  return (
    <Grid container style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Map Container */}
      <Box position="absolute" top={0} left={0} width="100%" height="100%" zIndex={0}>
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </Box>

      {/* Content */}
      <Box bgcolor="white" zIndex={1} width="90%" height="200px" marginTop={2} marginLeft={12} padding={4}>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={5}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Origin"
                inputRef={originRef}
                sx={{ borderRadius: '8px', width: '100%', padding: '10px' }}
              />
            </Autocomplete>
          </Grid>
          <Grid item md={5}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Destination"
                inputRef={destinationRef}
                sx={{ borderRadius: '8px', width: '100%', padding: '10px' }}
              />
            </Autocomplete>
          </Grid>
          <Grid item xs={12} md={2} style={{ textAlign: 'center', marginTop: '3' }}>
            <Button variant="contained" color="primary" onClick={calculateRoute}>
              Calculate Route
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" alignItems="center" mt={2}>
          <Grid item>
            <IconButton aria-label="clear route" onClick={clearRoute} style={{ color: '#5D3FD3' }}>
              <ClearIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-between" mt={2}>
          <Typography>Distance: {distance} </Typography>
          <Typography>Duration: {duration} </Typography>
          <Typography>Rate: {rate.toFixed(2)} Rs</Typography>
          <IconButton aria-label="center back" onClick={() => {
            map.panTo(center);
            map.setZoom(15);
          }}
            style={{ color: '#5D3FD3' }}>
            <LocationOnIcon />
          </IconButton>
        </Grid>
      </Box>
    </Grid>
  );
}

export default RateCalculator;
