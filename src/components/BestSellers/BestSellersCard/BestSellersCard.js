import React, { useState } from "react";
import { Card } from "@material-ui/core/";
import styles from "./BestSellersCard.module.scss";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const BestSellersCard = (props) => {
  const { product, inCart } = props;

  const cardTextContent = (
    <div className={styles.cardTextContent}>
      <p className={styles.cardText}>{product.title}</p>
      <p className={styles.cardItemPrice}>{`${product.price}$`}</p>
    </div>
  );

  const [_inCart, setinCart] = useState(inCart);

  const addToCart = () => {
    props.addToCart(product);

    setinCart({ _inCart: true });
  };

  return (
    <Card className={styles.bestSellersCard}>
      <CardActionArea>
        <CardMedia>
          <img src={product.src} alt="sofa" />
        </CardMedia>
      </CardActionArea>
      {cardTextContent}

      {_inCart ? (
        <Button
          variant="contained"
          color="secondary"
          className={styles.cardButton}
        >
          <ShoppingCartOutlinedIcon className={styles.cardIcon} />
          Added
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          className={styles.cardButton}
          onClick={addToCart}
        >
          <ShoppingCartOutlinedIcon className={styles.cardIcon} />
          Add
        </Button>
      )}
    </Card>
  );
};

export default BestSellersCard;
