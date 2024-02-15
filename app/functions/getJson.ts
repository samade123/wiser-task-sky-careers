import dataJson from "@/app/data/data.json";
import { Root, SubTeamCard, Team } from "../interface";

export function getJson(): Team {
  let dataObj = dataJson as Root;

  return dataObj.data.team;
  // console.log(dataObj);
}
