import LoginModal from "../../components/LoginModal/LoginModal";
import { useRedirectIfAuthenticated } from "../../utils/useRedirect";

import "./login.css";

const Login = ({ isauth }) => {
  useRedirectIfAuthenticated(isauth);

  return (
    <>
      <div className="login-container">
        <LoginModal />
      </div>
      <div className="footer">
        TRANSPORT HUB, Principal Seat 2024-Transport Hub Industrial Limited
      </div>
    </>
  );
};

export default Login;
