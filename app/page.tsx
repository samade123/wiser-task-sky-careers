'use client'

import Image from "next/image";
// import styles from "./page.module.css";
import SubTeam from "./components/Sub-Teams/Sub-Team";

export default function Home() {
  let title = "Sub-teams";
  let subTitle =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem necessitatibus quisquam aspernatur cum. Assumenda, nihil esse. Veritatis eum autem, veniam est molestiae, laudantium aliquam sint consequatur numquam labore provident ipsa.";
  let careerFilterPills = [
    { name: "Software Engineering" },
    { name: "Data" },
    { name: "Cyber Security" },
    { name: "Product Management" },
    { name: "Programme & Product Management" },
    { name: "Architecture & Technical Analysis" },
    { name: "Solution testing" },
  ];




  return (
    <main>
      <SubTeam
        title={title}
        subTitle={subTitle}
        filters={careerFilterPills}
      ></SubTeam>
    </main>
  );
}
