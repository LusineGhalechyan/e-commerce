import React from "react";
import styles from "./Purchase.module.scss";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const Purchase = () => {
  const getPurchaseState = useSelector((state) => state.purchase);

  const getPurchasedAmount = getPurchaseState.purchasedItems.reduce(
    (amount, item) => {
      return amount + Number(item.price);
    },
    0
  );

  return (
    <div className={styles.purchaseContainer}>
      <img
        src="assets/purchase.png"
        alt="purchase"
        className={styles.purchaseImg}
      />
      <span className={styles.purchaseDetailsContainer}>
        <p className={styles.text}>Sofa Francesca</p>
        <p className={styles.price}>{`${getPurchasedAmount} $`}</p>
        <Button
          variant="contained"
          color="secondary"
          className={styles.purchaseButton}
          onClick={() =>
            alert(
              `🎉🎉🎉 Congratulations, purchase has succeed. Purchase amount is ${getPurchasedAmount}$ !!!`
            )
          }
        >
          Accept
        </Button>
      </span>
    </div>
  );
};

export default Purchase;
