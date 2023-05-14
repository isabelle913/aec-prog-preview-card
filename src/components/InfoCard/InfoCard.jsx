import "./InfoCard.css";
import Avatar from "../../../images/image-avatar.png";

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="first-line">
        <div className="first-line-left">0.041ETH</div>
        <div className="first-line-right">3 days left</div>
      </div>
      <div className="separator"></div>
      <div className="group-avatar">
        <div className="avatar">
          <img src={Avatar} className="avatar-img"></img>
        </div>
        <div className="creation">
          Creation of <span className="author">Jule Wyvern</span>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
