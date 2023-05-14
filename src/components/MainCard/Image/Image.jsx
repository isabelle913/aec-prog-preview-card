import imageEquilibrium from "../../../../images/image-equilibrium.jpg";
import "./Image.css";

const Image = () => {
  return (
    <div className="container-img">
      <img src={imageEquilibrium} alt="Cube en équilibre" className="img"></img>
    </div>
  );
};

export default Image;
