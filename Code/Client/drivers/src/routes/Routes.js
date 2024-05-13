import styles from "./Routes.module.css";
import Header from "../components/molecules/Header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/home/Home";
import Unknown from "../pages/unknown/Unknown";
import Login from "../pages/login/Login";
import ManageRental from "../pages/RentalBooking/main/ManageRental";
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
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Unknown />} />
          <Route path="/manage-rentals" element={<ManageRental/>}/>
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;