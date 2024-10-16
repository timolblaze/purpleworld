import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./Homepage.module.css";
import BabyMeal from "../assets/nutribom.png";
import B2school from "../assets/back2school.png";
import Nivea from "../assets/nivea.png";
import Utensils from "../assets/utensils.png";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.gridSection}>
          <div className={styles.productCard}>
            <h3>Baby Cereal</h3>
            <p> Drinks </p>
            <a href="3">Shop Now!</a>
          </div>

          <div>
            <div className={`${styles.productCard} ${styles.small}`}>
              <h3>Baby Cereal</h3>
              <p> Drinks </p>
              <a href="3">Shop Now!</a>
            </div>
            <div className={`${styles.productCard} ${styles.small}`}>
              <h3>Baby Cereal</h3>
              <p> Drinks </p>
              <a href="3">Shop Now!</a>
            </div>
          </div>

          <div className={`${styles.productCard} ${styles.long}`}>
            <h3>Baby Cereal</h3>
            <p> Drinks </p>
            <a href="3">Shop Now!</a>
          </div>
        </div>
      </section>

      {/* <div></div>
            <div></div>
            <div></div>
        </div> */}
      <Footer />
    </>
  );
}
