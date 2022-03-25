import React from "react";
import style from "./Varieties.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import img1 from "../../Assets/Bitmap1.png";
import img2 from "../../Assets/Bitmap2.png";
import img3 from "../../Assets/Bitmap3.png";
import img4 from "../../Assets/Bitmap4.png";
import img5 from "../../Assets/Bitmap5.png";
import { BiChevronRight } from "react-icons/bi";

const data = [
  {
    id: 1,
    title: "Pizza is a savory dish of Italian origin",
    sub:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
    bg: { backgroundImage: `url(${img1})` }
  },
  {
    id: 2,
    title: "Crispy French Fries",
    sub:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bg: { backgroundImage: `url(${img2})` }
  },
  {
    id: 3,
    title: "Paneer Tikka",
    sub: "",
    bg: { backgroundImage: `url(${img3})` }
  },
  {
    id: 4,
    title: "Macaroon",
    sub:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bg: { backgroundImage: `url(${img4})` }
  },
  {
    id: 5,
    title: "Doughnut",
    sub:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    bg: { backgroundImage: `url(${img5})` }
  }
];
const data2 = [
  {
    id: 0,
    title: "Indian Cuisine",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    id: 2,
    title: "American Cuisine",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
  },
  {
    id: 3,
    title: "Chinese Cuisine",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  }
];

export default function Varieties() {
  return (
    <section className={style.v__container}>
      <h2>V A R I E T I E S</h2>
      <div className={style.v__grid_container}>
        {data.map(({ id, title, sub, bg }) => (
          <div key={id} className={style.v__card} style={bg}>
            <div className={style.v__info}>
              <h3>{title}</h3>
              <p>{sub}</p>
              <div>
                <button>
                  Explore
                  <BiChevronRight />
                </button>
                <span>
                  <AiOutlineStar /> Rated
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={style.v__features}>
        {data2.map(({ id, title, desc }) => (
          <div key={id} className={style.v__featureCard}>
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
