import LoginModal from "../../components/LoginModal/LoginModal";
import { useRedirectIfAuthenticated } from "../../utils/useRedirect";
import styles from "./login.module.css";
import "./loginpage.css";

const Login = ({ isauth }) => {
  useRedirectIfAuthenticated(isauth);
  return (
    <div
      style={{
        backgroundImage: `url(
            "/assets/image/login/image.png"
            )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="login-admin-container"
    >
      <LoginModal />
    </div>
  );
};

export default Login;
