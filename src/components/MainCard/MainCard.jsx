import "./MainCard.css";
import Image from "./Image/Image";
import NameCard from "./NameCard/NameCard";
import TextCard from "./TextCard/TextCard";
import InfoCard from "./InfoCard/InfoCard";

const MainCard = () => {
  return (
    <div className="MainCard">
      <Image></Image>
      <NameCard></NameCard>
      <TextCard></TextCard>
      <InfoCard></InfoCard>
    </div>
  );
};

export default MainCard;
