import React from "react";
import IconRightArrow from "../IconRightArrow/IconRightArrow";
import styles from "./Amenity.module.scss";

const Amenity = () => {
  const amenityDescription = `Welcome to the decor and textile store Home Decor! Here you will find
    furniture, textile items and unique accessories for home in the style of
    classic French Provence, chebbi chic, vintage. Items of decor which are
    improved every time with Love, will help you transform your home and
    fill it with warmth.`;

  const amenity = [
    {
      id: 1,
      room: `Living Room`,
      src: `assets/livingRoom.png`,
      alt: `livingRoom`,
      className: `livingRoom`,
    },
    {
      id: 2,
      room: `Kitchen`,
      src: `assets/bedroom.png`,
      alt: `bedroom`,
      className: `kitchen`,
    },
    {
      id: 3,
      room: `Bedroom`,
      src: `assets/kitchen.png`,
      alt: `kitchen`,
      className: `bedRoom`,
    },
    {
      id: 4,
      room: `Bathroom`,
      src: `assets/bathroom.png`,
      alt: `bathroom`,
      className: `bathRoom`,
    },
  ];

  return (
    <div id="amenity" className={styles.amenityContainer}>
      <h3>High Quality Home Decor</h3>
      <p>{amenityDescription}</p>
      <div className={styles.amenityImgContainer}>
        {amenity.map(({ id, room, src, alt, className }) => (
          <div key={id}>
            <img src={src} alt={alt} className={styles[className]} />
            <div className={styles.imgArrow}>
              <h3>{room}</h3>
              <IconRightArrow />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenity;
