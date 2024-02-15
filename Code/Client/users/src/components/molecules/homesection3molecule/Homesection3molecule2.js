import HomeSection2atom from "../../atoms/homesection2atoms/Homesection2atom";
import "./section3molecule.css";

function HomeSection3molecule2() {
  const mockData = [
    {
      imgUrl: "/assets/image/home/icon_bath.png",
      header: "Lorem Ipsum is simply dummy text",
      description:
        "Our placerat some clinical not author Suspendiyas disse course pure as tempor at",
    },
    {
      imgUrl: "/assets/image/home/icon_clock.png",
      header: "Lorem Ipsum is simply dummy text",
      description:
        "Our placerat some clinical not author Suspendiyas disse course pure as tempor at",
    },
    {
      imgUrl: "/assets/image/home/icon_cardio.png",
      header: "Lorem Ipsum is simply dummy text",
      description:
        "Our placerat some clinical not author Suspendiyas disse course pure as tempor at",
    },
  ];
  return (
    <div className="right-container">
      {mockData.map((data, index) => (
        <div key={index}>
          <HomeSection2atom
            header={data.header}
            imgUrl={data.imgUrl}
            description={data.description}
          />
        </div>
      ))}
    </div>
  );
}
export default HomeSection3molecule2;
