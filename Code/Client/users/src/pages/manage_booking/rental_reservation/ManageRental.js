import React, { useState } from 'react';
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar'
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader'

function ManageRental() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <TopHeader
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} 
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
        </>
    )
}

export default ManageRental;

