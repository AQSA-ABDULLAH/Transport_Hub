import { useEffect, useState } from "react";
import Button from "../atoms/button/Button";
import "./LoginModal.css";
import { useDispatch, useSelector } from 'react-redux';
import { signUpWithEmail } from '../../redux/containers/auth/actions';
import ReCAPTCHA from "react-google-recaptcha";

function LoginModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPasswordValid, setPasswordValid] = useState(true);


  const { loading, error, payload } = useSelector((state) => state?.auth);

  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  console.log(loading, error, payload);

  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      "email": email,
      "password": password,
    }
    if (email) {
      setEmailValid(true);
      if (password) {
        setPasswordValid(true);
        dispatch(signUpWithEmail(userData))
      }

    } else {
      setEmailValid(false);
      setPasswordValid(false);
    }
  }

  const handleChange = (event, type) => {
    if (type === 'email') {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  }

  useEffect(() => {
    const bodyElement = document.body;
    bodyElement.style.overflow = "hidden";
    return () => {
      bodyElement.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="modal"
      >
        <div className="login-header">
          <div className="logo-container">
            <img
              height={"60px"}
              src={process.env.PUBLIC_URL + "/assets/logo/LogoLight.png"}
            ></img>
          </div>
          <div className="head-container">
            Transport Hub Transporter Console
          </div>
        </div>

        <div
          className="modal-content"
        >
          <div className="notice-board">
            <h3>NOTICE BOARD</h3>
            sjdiadhi
          </div>
          <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
              <h3>Transporter Sign In</h3>

              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => handleChange(e, 'email')}
                style={{ border: isEmailValid ? "" : "2px solid red" }}
              ></input>

              <div id="passwordInput">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  required
                  onChange={(e) => handleChange(e, 'password')}
                  style={{ border: isPasswordValid ? "" : "2px solid red" }}
                />
                <img
                  onPointerDown={togglePasswordVisibility}
                  id="toggleIcon"
                  src={!showPassword ? (
                    "/assets/image/login/solar_eye-bold.png"
                  ) : (
                    "/assets/image/login/solar_eye-closed-bold.png"
                  )}
                ></img>
              </div>

              <div className="recaptcha">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                />
              </div>

              <Button
                type="submit"
                primary
                radius={"6px"}
                hoverColor={"#6a17b3"}
                btnText={"LOGIN"}
                btnClick={handleSubmit}
              />

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginModal;
