simport Homesection4left from "../../../molecules/homesection4molecules/Homesection4left";
import Homesection4right from "../../../molecules/homesection4molecules/Homesection4right";
import "./Section4.css";

function Homesection4() {
  return (
    <section
      style={{
        backgroundImage: `url(
          "/assets/image/home/3d-rendering-modern-loft-gym-fitness.png"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="classes-section"
    >
      <div className="header-classes">
        Class Schedule
        <br />
        At the body Doctor
      </div>
      <div className="classes-main">
        <Homesection4left />
        <Homesection4right />
      </div>
    </section>
  );
}
export default Homesection4;
