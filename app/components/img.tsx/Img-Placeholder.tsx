import { SubTeamCard } from "@/app/interface";
import React, { useEffect } from "react";

interface props {
  selectedCard: SubTeamCard;
  cardOpacity: boolean;
  functionIfImgValid: () => void;

}

const ImgPlaceholder = ({ selectedCard, cardOpacity, functionIfImgValid}: props) => {
  return (
    <img
      id="sub-team-card__img"
      src={selectedCard.video[0].placeholder.url}
      alt={selectedCard.video[0].placeholder.alt}
      className={"sub-team-card__img".concat(`${cardOpacity ? "" : " sub-team-card__img--transparent"}`)}
    />
  );
};

export default ImgPlaceholder;
