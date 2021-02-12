import React from "react";
import styles from "./Interior.module.scss";
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { HashLink as Link } from "react-router-hash-link";
import Amenity from "../../Amenity/Amenity";
import BestSellers from "../../BestSellers/BestSellers";
import Footer from "../../Footer/Footer";

const Interior = () => {
  return (
    <div className={styles.interiorContainer}>
      <img src="assets/interior.jpg" className={styles.interior} />
      <h1>Create your comfort zone.</h1>
      <Link to="#amenity">
        <Button variant="outlined" className={styles.interiorButton}>
          shop now
        </Button>
      </Link>
      <ArrowDownwardIcon
        className={styles.interiorArrowDown}
        fontSize="large"
      />
      <Amenity />
      <BestSellers />
      <Footer />
    </div>
  );
};

export default Interior;
