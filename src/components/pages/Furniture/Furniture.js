import React from "react";
import styles from "./Furniture.module.scss";
import SelectMenues from "../../Select/Select";
import BestSellersCards from "../../BestSellers/BestSellersCards/BestSellersCards";

const Furniture = () => {
  return (
    <div className={styles.furnitureContainer}>
      <SelectMenues />
      <BestSellersCards />
    </div>
  );
};

export default Furniture;
