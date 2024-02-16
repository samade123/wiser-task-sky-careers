"use client";

import { SubTeamCard } from "@/app/interface";
import React from "react";

interface props {
  selectedCard: SubTeamCard;
  onClickHandler: () => void;
}

const Videoplay = ({ selectedCard, onClickHandler }: props) => {
  let handleClick = () => {
    console.log("click recognised in play componenent");
    onClickHandler()
  };

  return (
    <div
      className={`sub-team-card__video-icon ${
        selectedCard.video[0].video !== null ? "show" : "hide"
      }`}
      onClick={handleClick}
    >
      <svg
        width="70"
        height="70"
        viewBox="0 0 70 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 35C0 15.6691 15.6712 0 35 0C54.3309 0 70 15.6691 70 35C70 54.3309 54.3309 70 35 70C15.6712 70 0 54.3309 0 35ZM34.5472 48.6823L46.6134 36.6685C47.5387 35.7476 47.5387 34.2535 46.6134 33.3326L34.5472 21.3166C32.6878 19.4638 29.9709 17.2654 27.6172 19.6104V50.3885C29.9709 52.7357 32.6878 50.5373 34.5472 48.6823Z"
          fill="white"
        />
      </svg>
      <h5 className="sub-team-card__video-play-title">
        {selectedCard.video[0].label}
      </h5>
    </div>
  );
};

export default Videoplay;
