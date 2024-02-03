import Classes from "../pages/classes/Classes";
import Members from "../pages/members/Members";
import Packages from "../pages/packages/Packages";
import WebsiteContent from "../pages/websitecontent/WebsiteContent";
import ProfileSettings from "../pages/profile/ProfileSettings";
import styles from "./Routes.module.css";
import Header from "../components/molecules/Header";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "../pages/home/Home";
import ContactMessages from "../pages/contact/ContactMessages";
import Unknown from "../pages/unknown/Unknown";
import Login from "../pages/login/Login";
import AddClass from "../pages/addClass/AddClass";
import AddPackage from "../pages/addPackage/AddPackage";
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
          <Route path="/classes" element={<Classes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contact-messages" element={<ContactMessages />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/website-content" element={<WebsiteContent />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/add-class" element={<AddClass />} />
          <Route path="/add-package" element={<AddPackage />} />
          <Route path="*" element={<Unknown />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesStack;