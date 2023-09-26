import React from 'react'
import styles from '../style';
import Button from './Button';

const CTA = () => (
   <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={styles.heading2}>
        Ready to get started?
      </h2>
      <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        We’re excited you want to learn more about our products and services. We can help you find the right solution for your business needs. Try our services now!
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
   </section>
)

export default CTA