import React from 'react'
import styles from '../style'
import {features} from '../constants'
import Button from "./Button";

const Business = () => {
  return (
    <section className={`${styles.paddingY} flex md:flex-row flex-col`}>
      //right section
       <div className={`flex-1 ${styles.flexStart} flex-col  xl:px-0 sm:px-16 px-6`}>
        <h2 className='font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full'>
          You do the bussiness<br className="sm:block hidden"/>
          we'll handle the payments.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
          </p>
          <Button styles={`mt-10`} />
        </div>
      //left section
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <div className='flex flex-col items-center'>
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-row p-6 items-center ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
              <div className='w-[64px] h-[64px] rounded-full mr-4 flex items-center justify-center bg-dimBlue'>
                <img src={feature.icon} alt={feature.title} className='w-[50%] h-[50%]' />
              </div>
              <div className='flex-1 flex flex-col ml-3'>
                <h3 className='font-poppins font-semibold text-white text-[18px] leading-[23px] '>
                  {feature.title}
                </h3>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[23px]  mt-2'>
                  {feature.content}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>


    </section>
  )
}

export default Business