import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../assets/images/contact-us/image-one-parallax.webp'


const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 400, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 600, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-two"
      />
      <motion.img
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-details-image-three"
      />
      <section className='company-details'>
        <div>
          <h2> +254 (706) 682 3590</h2>
          <p>Contact us if you have any questions</p>
        </div>
        <div>
          <h2>Nairobi GPO 00100 </h2>
          <p>Pangani, Nairobi</p>
        </div>
        <div>
          <h2>Open Monday-Friday</h2>
          <p>8:00am - 9:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;