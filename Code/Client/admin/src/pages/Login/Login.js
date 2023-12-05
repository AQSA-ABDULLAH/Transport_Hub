import LoginModal from "../../components/LoginModel/LoginModal";
import { useRedirectIfAuthenticated } from "../../utils/useRedirect";

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