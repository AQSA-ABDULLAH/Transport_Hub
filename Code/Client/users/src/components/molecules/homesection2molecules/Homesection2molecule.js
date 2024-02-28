import "./section2molecule.css";

function HomeSection2molecule({ header, description, price, index, imgUrl }) {
  return (
    <>
      <div className="cards">
        <div className="card-section2">
          <div className="index-text">
            {index ? `0${index}` : ""}
            {imgUrl ? <img src={process.env.PUBLIC_URL + imgUrl}></img> : ""}
          </div>
          <div className="desc-container">
            <h2>{header}</h2>
            <h4>{description}</h4>
            <p className="price-section2">{price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection2molecule;
