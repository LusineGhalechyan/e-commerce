import React from "react";
import { Grid } from "@material-ui/core/";
import BestSellersCard from "../BestSellersCard/BestSellersCard";
import { addToCartMiddleWare } from "../../../redux/cartActions";
import { useSelector, useDispatch } from "react-redux";

const BestSellersCards = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);
  const cartState = useSelector((state) => state.cart.cart);

  return (
    <Grid container>
      {productState.map((product) => (
        <Grid item xs={3} key={product.id}>
          <BestSellersCard
            product={product}
            addToCart={() => dispatch(addToCartMiddleWare(product))}
            inCart={
              cartState.length &&
              cartState.filter((e) => e.id === product.id).length > 0
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(BestSellersCards);
