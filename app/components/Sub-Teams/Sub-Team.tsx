import React, { useState } from "react";
import Pills from "../Pills/Pills";
import Videoplay from "../Video-play/Videoplay";
import ImgPlaceholder from "../img.tsx/Img-Placeholder";
import { filter } from "@/app/interface";
import { getJson } from "@/app/functions/getJson";
import "./Sub-Team.scss";
import "./Sub-team-mobile.scss";

interface props {
  title: string;
  subTitle: string;
  filters: filter[];
}

const SubTeam = ({ title = "", subTitle = "", filters }: props) => {
  let [selectedFilter, selectFilter] = useState(0);
  let selectFilterIndex = (index: number) => {
    selectFilter(index);
    setCardOpacity(false);
    setPlayVideo(false);
    // let img = document.getElementById("sub-team-card__img");
    // if (img !== null) {
    //   img.addEventListener("transitionend", (ev) => {
    //     selectCard(subTeamCardArr[index]);

    //     setTimeout(() => {
    //       setCardOpacity(true);
    //     }, 50);
    //   });
    // }
  };

  let functionIfValidImg =() =>{
    selectCard(subTeamCardArr[selectedFilter]);

    setTimeout(() => {
      setCardOpacity(true);
    }, 50);
  }

  let [cardOpacity, setCardOpacity] = useState(true);

  let { subteamsTitle, subTeamsDescription, subTeamCard } = getJson();
  let dataFilters: filter[] = [];
  let subTeamCardArr = subTeamCard;

  subTeamCardArr.forEach((team) => {
    dataFilters.push({ name: team.title });
  });

  let [selectedCard, selectCard] = useState(subTeamCardArr[selectedFilter]);

  let [playVideo, setPlayVideo] = useState(false);
  let toggleVideoPlayState = () => {
    setPlayVideo(!playVideo);
  };

  // console.log(selectedCard, selectedFilter);

  return (
    <section>
      <h1 className="sub-team__title">{subteamsTitle}</h1>
      <p className="sub-team__description ">{subTeamsDescription}</p>

      <Pills
        filters={dataFilters}
        selectFilter={selectFilterIndex}
        subTeamCards={subTeamCardArr}
      ></Pills>

      <div className="sub-team-card">
        <div className="sub-team-card__left">
          <div className="sub-team-card__header">
            <b>21</b> jobs available
          </div>
          <h3 className="sub-team-card__title">{selectedCard.title}</h3>
          <p className="sub-team-card__body">{selectedCard.body}</p>
          <a
            className="sub-team-card__tag"
            href={selectedCard.cta[0].href}
            target={selectedCard.cta[0].newTab ? "_blank" : ""}
          >
            <button type="button">{selectedCard.cta[0].text}</button>
          </a>
        </div>

        <div className="sub-team-card__right">
          {/* <img
            id="sub-team-card__img"
            src={selectedCard.video[0].placeholder.url}
            alt={selectedCard.video[0].placeholder.alt}
            className="sub-team-card__img"
            style={{ opacity: cardOpacity ? "1" : "0" }}
          /> */}

          <ImgPlaceholder
            selectedCard={selectedCard}
            cardOpacity={cardOpacity}
            functionIfImgValid={functionIfValidImg}
          ></ImgPlaceholder>
          <Videoplay
            selectedCard={selectedCard}
            onClickHandler={toggleVideoPlayState}
          ></Videoplay>
          {playVideo && selectedCard.video[0].video !== null ? (
            <iframe
              src={selectedCard.video[0].video?.url.replace(
                "watch?v=",
                "embed/"
              )}
              title={selectedCard.video[0].video?.title}
            ></iframe>
          ) : null}
        </div>

        <div className="sub-team-card__bottom-border"></div>
      </div>
    </section>
  );
};

export default SubTeam;
