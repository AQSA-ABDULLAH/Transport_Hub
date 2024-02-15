import HomeSection2atom from "../../atoms/homesection2atoms/Homesection2atom";
import "./section2molecule.css";

function HomeSection2molecule() {
  const mockdata = [
    {
      header: "Body Building Class",
      description: "Trained Under Best Trainers",
      price: "$99/m",
    },
    {
      header: "Yoga & Pilates Program",
      description: "We cover everythings",
      price: "$120/m",
    },
    {
      header: "Aerobics Classes",
      description: "Everyones Love to dance",
      price: "$88/m",
    },
  ];
  return (
    <div className="section2-main">
      <div className="text-container">
        <div>
          <h1 >All</h1>
          <h3>About the Body Doctor</h3>
        </div>
        {mockdata.map((data, index) => (
          <div key={index}>
            <HomeSection2atom
              uniquekey={index}
              index={index + 1}
              header={data.header}
              description={data.description}
              price={data.price}
            />
          </div>
        ))}
      </div>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/assets/image/home/Layer 27.png"}
        ></img>
        {/* <div className="arrow-box"></div>
        <img
          className="arrow-box"
          src={process.env.PUBLIC_URL + "/assets/image/home/arrow.png"}
        ></img> */}
      </div>
    </div>
  );
}

export default HomeSection2molecule;
