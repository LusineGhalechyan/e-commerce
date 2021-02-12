import React from "react";
import { Grid } from "@material-ui/core/";
import styles from "./CartBasket.module.scss";
import { Card } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import { useSelector, useDispatch } from "react-redux";
import CardActionArea from "@material-ui/core/CardActionArea";
import { purchaseMiddleWare } from "../../redux/cartActions";
import IconRightArrow from "../IconRightArrow/IconRightArrow";
import { Link } from "react-router-dom";

const CartBasket = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart.cart);

  const purchaseState = useSelector(
    (state) => state.purchase.purchasedItems.length
  );

  return (
    <>
      <Grid container>
        {cartState.map((product) => (
          <Grid item xs={6} key={product.id}>
            <Card className={styles._bestSellersCard}>
              <CardActionArea>
                <CardMedia>
                  <img src={product.src} alt="sofa" width="70%" />
                </CardMedia>
              </CardActionArea>
              <div className={styles._cardTextContent}>
                <p className={styles._cardText}>{product.title}</p>
                <p className={styles._cardItemPrice}>{`${product.price}$`}</p>
              </div>

              <div className={styles._cardButtonContent}>
                {cartState && (
                  <Button
                    variant="contained"
                    color="secondary"
                    className={styles._cardButton}
                    onClick={() => (
                      dispatch(purchaseMiddleWare(product)),
                      purchaseState + 1 > 0
                        ? alert(
                            `You have purchased ${purchaseState + 1} item !`
                          )
                        : ``
                    )}
                  >
                    Buy Now
                  </Button>
                )}
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div className={styles._purchaseDetailsContainer}>
        <div>Accept Purchase</div>
        <Link to="purchase">
          <div>
            <IconRightArrow />
          </div>
        </Link>
      </div>
    </>
  );
};

export default React.memo(CartBasket);
