import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styles from "./Routes.module.css";
import Header from "../components/molecules/Header";
import Login from "../pages/Login/Login";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import News from "../pages/Blogs&News/News";
import WebsiteContent from "../pages/Websitecontent/main/WebsiteContent"
import TransportMangment from "../pages/TransportManagment/main/Transport"
import ManageTrips from "../pages/ManageTrips/ManageTrips";
import ErrorPage from "../pages/404/ErrorPage"
import ParcelList from "../pages/ManageParcels/ParcelList";
import EmployeeManagement from "../pages/EmployeeManagement/EmployeeManagement";
import Pickupboyform from "../components/molecules/pickupboyforms/Pickupboyform"
import Driver from "../components/molecules/pickupboyforms/Driver";
import Transporter from "../components/molecules/pickupboyforms/Transporter";
import ManageShipment from "../pages/ManageShipment/main/ManageShipment";
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
          <Route path="/ParcelList" element={<ParcelList />} />
          <Route path="/manageEmployees" element={<EmployeeManagement />} />
          <Route path="/pickupBoy" element={<Pickupboyform />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/transporter" element={<Transporter />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />
          <Route path="/website-content" element={<WebsiteContent />} />
          <Route path="/transport-managment" element={<TransportMangment />} />
          <Route path="/manage-shipments" element={<ManageShipment/>} />
          <Route path="/manage-trips" element={<ManageTrips />} />
          <Route path="/" element={<AdminDashboard />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;