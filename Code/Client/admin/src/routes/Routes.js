import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./Routes.module.css";
import Header from "../components/molecules/Header";
import Login from "../pages/Login/Login";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import CarRental from "../pages/Services/CarRental/CarRental";
import RT from "../pages/Services/RecreationalTrips/RT";
import GS from "../pages/Services/GoodShipment/GS";
import PP from "../pages/Services/ParcelPickup/PP";
import News from "../pages/Blogs&News/News";
import WebsiteContent from "../pages/Websitecontent/main/WebsiteContent"
import ErrorPage from "../pages/404/ErrorPage"

const RoutesStack = ({ openSidebar, setOpenSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const headerButtons = {
    '/classes': {
      buttonText: 'Add Class',
      onClick: () => {
        navigate('/add-class')
      },
    },
    '/packages': {
      buttonText: 'Add Package',
      onClick: () => {
        navigate('/add-package')
      },
    },
  };
  const currentPath = location.pathname;

  return (
    <>
      <div className={styles.mainDashboard}>
        <Header
          openSidebar={openSidebar}
          setOpenSidebar={setOpenSidebar}
          haveButton={!!headerButtons[currentPath]}
          ButtonText={headerButtons[currentPath]?.buttonText}
          onClick={headerButtons[currentPath]?.onClick} />
        <Routes>
          <Route path="/" element={<AdminDashboard/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/carRental" element={<CarRental/>} />
          <Route path="/trip" element={<RT/>} />
          <Route path="/goodShipment" element={<GS/>} />
          <Route path="/parcelPickup" element={<PP/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/website-content" element={<WebsiteContent />} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;