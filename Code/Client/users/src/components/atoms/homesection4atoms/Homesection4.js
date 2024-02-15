import "./section4atom.css";
function Homesection4atom({ imgUrl, headerText, timeLimit }) {
  return (
    <div className="section4-card">
      <div className="icon-classes">
        <img src={process.env.PUBLIC_URL + imgUrl}></img>
      </div>
      <div className="header-class-schedule"> {headerText}</div>
      <div className="timelimit">{timeLimit}</div>
    </div>
  );
}
export default Homesection4atom;
