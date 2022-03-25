import React from "react";
import style from "./TopChefs.module.scss";
import bg from "../../Assets/image0.png";
import img1 from "../../Assets/image1.png";
import img2 from "../../Assets/image2.png";
import img3 from "../../Assets/image3.png";

const data = [
  {
    id: 0,
    img: img1,
    name: "Eileen Johnson",
    info: "Executive Chef, USA"
  },
  {
    id: 1,
    img: img2,
    name: "Robert Downey Jr",
    info:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
  {
    id: 2,
    img: img3,
    name: "Amanda Dority",
    info: "Sous Chef, India"
  }
];
export default function TopChefs() {
  return (
    <section className={style.tc__container}>
      <h2>Top Chefs</h2>
      <div
        className={style.tc__inner_container}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {data.map(({ id, img, name, info }) => (
          <div key={id} className={style.tc__card}>
            <div>
              <img src={img} alt={name} />
            </div>
            <h4>{name}</h4>
            <p>{info}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
