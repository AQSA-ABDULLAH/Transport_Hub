import "./section5atom.css";
function Homesection5atom({ name, imageurl }) {
  return (
    <div className="trainer-card">
      <img src={process.env.PUBLIC_URL + imageurl} alt=""></img>
      <div>{name}</div>
    </div>
  );
}
export default Homesection5atom;
