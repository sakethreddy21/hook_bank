import React from 'react'
import {stats} from '../constants'
import styles from '../style'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat, index) => (
        <div key={stat.id} className={`flex-1 flex  justify-start items-center flex-row m-3`}>
           <p className='font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[53px] leading-[43px] ' >
            {stat.value}
          </p>
          <p className='font-poppins font-normal xs:text-[20px] text-[16px]  xs:leading-[26px] text-gradient leading-[21px] uppercase ml-3'>
            {stat.title}
          </p>
         
        </div>
      ))}

    </section>
  )
}

export default Stats