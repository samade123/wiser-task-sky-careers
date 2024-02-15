// 'use client'
import React, { useState } from "react";
import Pills from "../Pills/Pills";
import { filter } from "@/app/interface";
import { getJson } from "@/app/functions/getJson";
import "./Sub-Team.scss";

interface props {
  title: string;
  subTitle: string;
  filters: filter[];
}

const SubTeam = ({ title = "", subTitle = "", filters }: props) => {
  let [selectedFilter, selectFilter] = useState(0);
  let selectFilterIndex = (index: number) => {
    selectFilter(index);
    setCardOpacity;
    setCardOpacity(false);
    let img = document.getElementById("sub-team-card__img");
    if (img !== null) {
      img.addEventListener("transitionend", (ev) => {
        selectCard(subTeamCardArr[index]);

        setTimeout(() => {
          setCardOpacity(true);
        }, 50);
      });
    }
  };

  let [cardOpacity, setCardOpacity] = useState(true);

  let { subteamsTitle, subTeamsDescription, subTeamCard } = getJson();
  let dataFilters: filter[] = [];
  let subTeamCardArr = subTeamCard;

  subTeamCardArr.forEach((team) => {
    dataFilters.push({ name: team.title });
  });

  let [selectedCard, selectCard] = useState(subTeamCardArr[selectedFilter]);

  // console.log(selectedCard, selectedFilter);

  return (
    <section>
      <h1 className="sub-team__title">{subteamsTitle}</h1>
      <p className="sub-team__description ">{subTeamsDescription}</p>

      <Pills filters={dataFilters} selectFilter={selectFilterIndex}></Pills>

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
          <img
            id="sub-team-card__img"
            src={selectedCard.video[0].placeholder.url}
            alt={selectedCard.video[0].placeholder.alt}
            className="sub-team-card__img"
            style={{ opacity: cardOpacity ? "1" : "0" }}
          />
          <div className={`sub-team-card__video-icon ${selectedCard.video[0].video !== null ? "show" : "hide"}`}>
            <svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 35C0 15.6691 15.6712 0 35 0C54.3309 0 70 15.6691 70 35C70 54.3309 54.3309 70 35 70C15.6712 70 0 54.3309 0 35ZM34.5472 48.6823L46.6134 36.6685C47.5387 35.7476 47.5387 34.2535 46.6134 33.3326L34.5472 21.3166C32.6878 19.4638 29.9709 17.2654 27.6172 19.6104V50.3885C29.9709 52.7357 32.6878 50.5373 34.5472 48.6823Z"
                fill="white"
              />
            </svg>
            <h5 className="sub-team-card__video-play-title">{selectedCard.video[0].label}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubTeam;
