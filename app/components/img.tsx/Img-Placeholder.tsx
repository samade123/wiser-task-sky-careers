import { SubTeamCard } from "@/app/interface";
import React, { useEffect } from "react";

interface props {
  selectedCard: SubTeamCard;
  cardOpacity: boolean;
  functionIfImgValid: () => void;
  // functionImgNotValid: () => void;

}

const ImgPlaceholder = ({ selectedCard, cardOpacity, functionIfImgValid}: props) => {
  useEffect(() => {
    let img = document.getElementById("sub-team-card__img");

    if (img !== null) {
      img.addEventListener("transitionend", (ev) => {
        functionIfImgValid()

        // selectCard(subTeamCardArr[index]);


        // setTimeout(() => {
        //   setCardOpacity(true);
        // }, 50);
      }, {once: true});
    } else {
      setTimeout(()=>{
        functionIfImgValid()

      }, 1000)
    }
    //Runs on the first render
    //And any time any dependency value changes
  }, [cardOpacity]);
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
