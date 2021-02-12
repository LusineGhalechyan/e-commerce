import React from "react";
import styles from "./BestSellers.module.scss";
import IconRightArrow from "../IconRightArrow/IconRightArrow";
import { Link } from "react-router-dom";
import BestSellersCards from "./BestSellersCards/BestSellersCards";

const BestSellers = () => {
  return (
    <div className={styles.bestSellersContainer}>
      <h3>Best Sellers</h3>
      <BestSellersCards />
      <div className={styles.iconArrow}>
        <div>see more</div>
        <Link to="/furniture">
          <div>
            <IconRightArrow />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BestSellers;
