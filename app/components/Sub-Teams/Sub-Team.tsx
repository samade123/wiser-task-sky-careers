import React, { useRef, useState } from "react";
import Pills from "../Pills/Pills";
import Videoplay from "../Video-play/Videoplay";
import ImgPlaceholder from "../img.tsx/Img-Placeholder";
import { filter } from "@/app/interface";
import { getJson } from "@/app/functions/getJson";
import "./Sub-Team.scss";
import "./Sub-team-mobile.scss";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { isElement } from "react-dom/test-utils";

interface props {
  title: string;
  subTitle: string;
  filters: filter[];
}

const SubTeam = ({ title = "", subTitle = "", filters }: props) => {
  let transitionDelay = 350;

  let elementId = "subTeamCard";
  let [selectedFilter, selectFilter] = useState(0);
  const nodeRef = useRef(null);
  let selectFilterIndex = (index: number) => {
    selectFilter(index);
    setPlayVideo(false);
    selectCard(subTeamCardArr[index]);
  };

  let functionIfValidImg = () => {
    console.log("asdsad");
    selectCard(subTeamCardArr[selectedFilter]);
  };

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

  return (
    <section>
      <h1 className="sub-team__title">{subteamsTitle}</h1>
      <p className="sub-team__description ">{subTeamsDescription}</p>

      <Pills
        filters={dataFilters}
        selectFilter={selectFilterIndex}
        subTeamCards={subTeamCardArr}
      ></Pills>

      <SwitchTransition>
        <CSSTransition
          key={selectedFilter}
          classNames="transition"
          className="sub-team-card"
          id={elementId}
          timeout={transitionDelay}
          nodeRef={nodeRef}
          onEnter={(node: HTMLElement, isAppearing: boolean) =>
            console.log("entering", node, isAppearing)
          }
          onExit={() => console.log("exitting")}
          style={{"--transition-delay": `${transitionDelay}ms`}}
        >
          <div ref={nodeRef}>
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
              <ImgPlaceholder
                selectedCard={selectedCard}
                cardOpacity={true}
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
        </CSSTransition>
      </SwitchTransition>
    </section>
  );
};

export default SubTeam;
