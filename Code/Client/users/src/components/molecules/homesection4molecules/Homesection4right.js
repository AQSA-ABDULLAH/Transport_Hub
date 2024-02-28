import Homesection4atom from "../../atoms/homesection4atoms/Homesection4";
import "./Section4.css";

function Homesection4right() {
  const mockData = [
    {
      imgUrl: "/assets/image/home/exercise_343102.png",
      header: "Weight Loss",
      timelimit: "06AM-8AM",
    },
    {
      imgUrl: "/assets/image/home/heart-beat_4715447.png",
      header: "Cardio Program",
      timelimit: "08AM-10AM",
    },
    {
      imgUrl: "/assets/image/home/exercise_1721094.png",
      header: "Yoga Class",
      timelimit: "10AM-1PM",
    },
    {
      imgUrl: "/assets/image/home/awkward_2647466.png",
      header: "Aerobics & Skipping",
      timelimit: "04PM-06PM",
    },
    {
      imgUrl: "/assets/image/home/icon_fitness program.png",
      header: "Fitness Program",
      timelimit: "06PM-7PM",
    },
    {
      imgUrl: "/assets/image/home/exercise_1683257.png",
      header: "Body Building",
      timelimit: "07AM-8PM",
    },
  ];
  return (
    <div className="right-classes-container">
      {mockData.map((data, i) => (
        <Homesection4atom
          key={i}
          imgUrl={data.imgUrl}
          headerText={data.header}
          timeLimit={data.timelimit}
        />
      ))}
    </div>
  );
}
export default Homesection4right;
