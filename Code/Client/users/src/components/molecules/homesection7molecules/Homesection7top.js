import "./Section7.css";
function HomeSection7top() {
  return (
    <div className="top-container">
      <div className="quotation-mark">
        <img
          src={process.env.PUBLIC_URL + "/assets/image/home/icon_quote.png"}
        ></img>
      </div>
      <div className="testimonial-container">
        <div className="header-reviews">
          <h4>
            WHAT
            <br />
            OUR CLIENT'S SAY
          </h4>
        </div>
        <div className="testimonial">
          <p>
            Lorem Ipsum is sabout-persony dummy text of the pinning and
            typesetting industry, Loren sum has beon the industry's
            staabout-persond dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book
          </p>
        </div>
        <div className="profile-images">
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/image/home/client1.png"}
            ></img>
            <div className="name">JOHN DOE</div>
            <div className="about-person">dummy text</div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/image/home/client2.png"}
            ></img>
            <div className="name">JOHN DOE</div>
            <div className="about-person">dummy text</div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/assets/image/home/client3.png"}
            ></img>
            <div className="name">JOHN DOE</div>
            <div className="about-person">dummy text</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeSection7top;
