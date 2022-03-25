import React from "react";
import style from "./FoodGuide.module.scss";
import bg from "../Assets/bg1.png";
import { GiAppleSeeds, GiShinyApple, GiWheat, GiCarrot } from "react-icons/gi";

const data = [
  {
    id: 0,
    svg: <GiCarrot />,
    title: "VEGETABLES",
    typo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
  },
  {
    id: 1,
    title: "WHOLE GRAINS",
    svg: <GiWheat />,
    typo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    title: "FRUITS",
    svg: <GiShinyApple />,
    typo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."
  },
  {
    id: 3,
    title: "HEALTHY PROTEIN",
    svg: <GiAppleSeeds />,
    typo:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
  }
];
export default function FoodGuides() {
  return (
    <section
      className={style.fg__container}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h2>Food Guide</h2>
      <div className={style.fg__inner_container}>
        {data.map(({ id, title, svg, typo }) => (
          <div key={id} className={style.fg__item}>
            <div>{svg}</div>
            <h4>{title}</h4>
            <p>{typo}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
