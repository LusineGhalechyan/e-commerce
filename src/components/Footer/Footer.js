import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import styles from "./Footer.module.scss";

const Footer = () => {
  const links = [
    { id: 1, to: `javascript:;`, title: `About Us` },
    { id: 2, to: `javascript:;`, title: `Contact Us` },
    { id: 3, to: `javascript:;`, title: `FAQ` },
    { id: 4, to: `javascript:;`, title: `Student Discount` },
    { id: 5, to: `javascript:;`, title: `Customer Service` },
    { id: 6, to: `javascript:;`, title: `Order Status` },
    { id: 7, to: `javascript:;`, title: `Coupons` },
  ];

  const info = [
    { id: 1, value: `Call Us: +123 456789` },
    { id: 2, value: `Hours: Monday-Friday 10:00-21:00` },
  ];
  return (
    <footer>
      <section className={styles.footerNavLinks}>
        <nav>
          <Grid container>
            {links.map(({ id, to, title }) => (
              <Grid item xs={4} key={id}>
                <Link to={{ pathname: to }} target="_blank">
                  {title}
                </Link>
              </Grid>
            ))}
          </Grid>
        </nav>

        <section className={styles.footerInfo}>
          {info.map(({ id, value }) => (
            <div key={id} className={styles.footerInfoDetails}>
              {value}
            </div>
          ))}
        </section>
      </section>
    </footer>
  );
};

export default Footer;
