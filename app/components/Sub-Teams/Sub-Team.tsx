// 'use client'
import React, { useState } from "react";
import Pills from "../Pills/Pills";
import { filter } from "@/app/interface";
import { getJson } from "@/app/functions/getJson";
import { SubTeamCard} from "@/app/interface";

interface props {
  title: string;
  subTitle: string;
  filters: filter[];
}

const SubTeam = ({ title = "", subTitle = "", filters }: props) => {
  let [selectedFilter, selectFilter] = useState(0);
  let selectFilterIndex = (index: number) => {
    selectFilter(index);
    selectCard(subTeamCardArr[index]);
    // console.log(index, "team", selectedFilter, selectedCard);
  };

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
      <p className="sub-team__sub-title">{subTeamsDescription}</p>

      <Pills filters={dataFilters} selectFilter={selectFilterIndex}></Pills>

      <div className="sub-team-card">
        <h3>{selectedCard.title}</h3>
        {selectedCard.body}</div>
    </section>
  );
};

export default SubTeam;
