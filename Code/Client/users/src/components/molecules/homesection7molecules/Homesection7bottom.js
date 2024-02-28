import "./Section7.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // You can choose other icon sets based on your preference.

function HomeSection7bottom() {
  return (
    <div
      style={{
        backgroundImage: `url(
          "/assets/image/home/Rectangle 2.png"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="bottom-container"
    >
      <div className="left-arrow">
        <FaChevronLeft />
      </div>
      <div
        style={{
          backgroundImage: `url(
          "/assets/image/home/Rectangle 3.png"
        )`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="insta-frame"
      >
        <div className="insta-profile-info">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Shape.png"}
          ></img>
          <div>
            Username
            <br />
            <span>places</span>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Options.png"}
          ></img>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/assets/image/home/Layer 35.png"}
        ></img>
        <div className="insta-icon">
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Heart.png"}
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Heart.png"}
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Message.png"}
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Save.png"}
          ></img>
          <img
            src={process.env.PUBLIC_URL + "/assets/image/home/Save.png"}
          ></img>
        </div>
      </div>
      <div className="content-insta">
        <p>
          Username instagram template #template
          <br />
          View all 328 comments <br />
          <span>5 DAYS AGO</span>
        </p>
      </div>
      <div className="right-arrow">
        <FaChevronRight />
      </div>
    </div>
  );
}
export default HomeSection7bottom;
