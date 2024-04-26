import React from 'react'
import Usersidebar from './Usersidebar';
import Userorder from './Userorder';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  background: white;
  border: 1px solid black;
  margin: 10px;
  padding: 10px; /* Optional: Add padding for better spacing */
  height: 1500px;
`;
// import {useNavigate} from 'react-router-dom'
const Userdashboard = () => {
//   const navigate = useNavigate();
  return (
    <div>
      
      <StyledParagraph>userdashboard
        <h2>Hello!</h2>
        <h2>Alia</h2>
        <Usersidebar/>
        <h2>View Order</h2>
        <Userorder/>
      </StyledParagraph>
      
    </div>
  )
}

export default Userdashboard