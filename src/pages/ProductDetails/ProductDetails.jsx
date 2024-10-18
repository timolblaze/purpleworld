import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import styles from './ProductDetails.module.css'
import Kellogs from '../../assets/kellogs.png'


export default function ProductDetails() {
  return (
    <>
        <Navbar />
        <section>
            <div className={styles.imgCtn}>
              <img src={Kellogs} alt="" />
            </div>
            <div className={styles.productText}>

            </div>
        </section>

        <section>

        </section>
        <Footer />
    </>
  )
}
