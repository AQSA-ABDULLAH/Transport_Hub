
import SignupModal from '../../components/molecules/signup/SignupModel';
import styles from "./signup.module.css";

const SignUp = () => {
  return (
    <div
      style={{
        backgroundImage: `url(
            "/assets/images/cars/image1.jpg"
            )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={styles.signup} 
    >
      <SignupModal/>
    </div>
  );
};

export default SignUp;
