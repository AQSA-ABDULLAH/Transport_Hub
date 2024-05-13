import React, { useState, useEffect } from 'react';
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar';
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader';

function Tracking() {
    const [openSidebar, setOpenSidebar] = useState(false);

    useEffect(() => {
        const loadMapScript = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    const script = document.createElement('script');
                    const map = document.getElementById('map');

                    script.src = `https://maps.google.com/maps?q=${latitude},${longitude}&amp;z=15&amp;output=embed`;
                    script.defer = true;
                    document.head.appendChild(script);
                    script.onload = initMap;
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        const initMap = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    const mapOptions = {
                        center: { lat: latitude, lng: longitude },
                        zoom: 15
                    };
                    new window.google.maps.Map(document.getElementById('map'), mapOptions);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        };

        loadMapScript();
    }, []); // Run only once when the component mounts

    return (
        <>
            <TopHeader
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
            <section>
                <div id="map" style={{ width: '700px', height: '300px' }}></div>
            </section>
        </>
    );
}

export default Tracking;


