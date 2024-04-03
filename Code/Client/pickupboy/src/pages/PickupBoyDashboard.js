import React from 'react'
import PickupBoySidebar from './PickupBoySidebar'
import { Outlet } from 'react-router-dom';
const PickupBoyDashboard = () => {
  return (
    <div>
        <PickupBoySidebar/>
        <Outlet/>
    </div>
  )
}

export default PickupBoyDashboard