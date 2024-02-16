import HomeSection7bottom from "../../molecules/homesection7molecules/Homesection7bottom";
import HomeSection7top from "../../molecules/homesection7molecules/Homesection7top";
import "./Section7.css";

function Homesection7() {
  return (
    <section className="customer-reviews">
      <div className="main-container-7">
        <HomeSection7top />
        <HomeSection7bottom />
      </div>
    </section>
  );
}
export default Homesection7;
