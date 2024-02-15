export interface filter {
  name: string;
}

//interface for json data - taken from a compiler

export interface Root {
  data: Data;
}

export interface Data {
  team: Team;
}

export interface Team {
  subteamsTitle: string;
  subTeamsDescription: string;
  subTeamCard: SubTeamCard[];
}

export interface SubTeamCard {
  title: string;
  body: string;
  cta: Cum[];
  video: Video[];
}

export interface Cum {
  newTab: boolean;
  href: string;
  text: string;
}

export interface Video {
  video?: Video2;
  placeholder: Placeholder;
  label: string;
}

export interface Video2 {
  url: string;
  title: string;
}

export interface Placeholder {
  url: string;
  alt: string;
}
