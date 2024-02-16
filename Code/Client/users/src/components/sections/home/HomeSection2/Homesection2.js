import HomeSection2atom from "../../../molecules/homesection2molecules/Homesection2molecule";
import "./homesection2.css";

function Homesection2() {
  const mockdata = [
    {
      header: "First Heading",
      description: "Good Shipment under time",
      price: "$99/m",
    },
    {
      header: "Second Heading",
      description: "We cover everythings",
      price: "$120/m",
    },
    {
      header: "Third Heading",
      description: "Everyones Love to Travel",
      price: "$88/m",
    },
  ];

  return (
    <section id="homesection2">
       <div className="section2-main">
      <div className="text-container">
        <div>
          <h1 >All</h1>
          <h3>About the Transport Hub</h3>
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
          src={process.env.PUBLIC_URL + "/assets/image/home/4.png"}
        ></img>
      </div>
    </div>
    </section>
  );
}
export default Homesection2;
