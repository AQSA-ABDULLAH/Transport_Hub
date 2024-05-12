// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import { REACT_APP_GOOGLE_MAPS_KEY } from './constants';
// export default function LocationSearch() {
//   const [inputValue, setInputValue] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   // Function to handle input change
//   const handleChange = (e) => {
//     const { value } = e.target;
//     setInputValue(value);

//     // Fetch suggestions from Google Places API
//     if (value.trim() !== '') {
//       fetchSuggestions(value);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   // Function to fetch suggestions from Google Places API
//   const fetchSuggestions = (query) => {
//     const apiKey = 'YOUR_GOOGLE_API_KEY';
//     const endpoint = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${REACT_APP_GOOGLE_MAPS_KEY}`;

//     fetch(endpoint)
//       .then(response => response.json())
//       .then(data => {
//         if (data.predictions) {
//           setSuggestions(data.predictions);
//         }
//       })
//       .catch(error => console.error('Error fetching suggestions:', error));
//   };

//   // Function to handle suggestion selection
//   const handleSelect = (placeId) => {
//     // You can perform further actions with the selected placeId
//     console.log('Selected place:', placeId);
//     setInputValue('');
//     setSuggestions([]);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your location"
//         value={inputValue}
//         onChange={handleChange}
//       />
//       <ul>
//         {suggestions.map(suggestion => (
//           <li key={suggestion.place_id} onClick={() => handleSelect(suggestion.place_id)}>
//             {suggestion.description}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<LocationSearch />, document.getElementById('root'));
