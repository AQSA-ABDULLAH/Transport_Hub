import LoginModal from "../../components/LoginModal/LoginModal";
import { useRedirectIfAuthenticated } from "../../utils/useRedirect";

import "./login.css";

const Login = ({ isauth }) => {
  useRedirectIfAuthenticated(isauth);

  return (
    <div className="login-container">

      <LoginModal />
    </div>
  );
};

export default Login;
