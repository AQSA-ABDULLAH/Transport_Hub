import HomeSection3molecule from "../../molecules/homesection3molecule/Homesection3molecule";
import HomeSection3molecule2 from "../../molecules/homesection3molecule/Homesection3molecule2";
import "./homesection3.css";

function Homesection3() {
  return (
    <section className="container">
      <div className="main">
        <HomeSection3molecule />
        <HomeSection3molecule2 />
      </div>
      <img
        className="image-3"
        src={
          process.env.PUBLIC_URL +
          "/assets/image/home/beautiful-young-fitness-woman-with-gym-ball-exercising-isolated-white-background.png"
        }
      ></img>
    </section>
  );
}

export default Homesection3;
