import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png"  alt="" fill style={{objectFit:"cover"}} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID.THE CANBERK'S PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            123123 R. Donel Road #931.
            <br /> Toronto, 12345
            <br /> (123) 456-789
          </p>
          <p className={styles.text}>
            47 Z. Larman Rd #425.
            <br /> NewYork, 85022
            <br /> (652) 867-5511
          </p>
          <p className={styles.text}>
            53 E. Edwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-4012
          </p>
          <p className={styles.text}>
            1614 W. Caroline Rd #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 AM – 10:00 PM 
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 AM – 1:00 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;