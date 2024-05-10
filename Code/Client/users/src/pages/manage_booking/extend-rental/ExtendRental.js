import React, { useState } from 'react';
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar'
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader'

function ExtendRental() {
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
            <TopHeader
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
            <div>
                <h2>ExtendRental</h2>
            </div>
        </>
    )
}

export default ExtendRental;