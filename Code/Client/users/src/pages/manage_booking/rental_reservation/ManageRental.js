import React, { useState } from 'react';
import style from "./managerental.module.css";
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
            <section className={style.rental_container}>
                <div className={style.rental_div}>
                    <h2>Look up your reservation</h2>
                    <p>Let's start with your confirmation number. You can find this in your confirmation email.</p>
                    <form>
                        <div className={style.rental_inputs}>
                            <label>Confirmation Number :</label>
                            <input type='text'/>
                        </div>
                        <div className={style.rental_inputs}>
                            <label>Last Name :</label>
                            <input type='text'/>
                        </div>
                        <button>Locate Rental</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ManageRental;

