import React from 'react'
import { features } from '@/contants'
import styles, {layout} from '@/app/style'
import Button from './Button'
import {motion} from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { slideInFromBottom, slideInFromLeft } from '@/utils/motion'


type feadtureCardProps = {
  icon : string
  title : string
  content : string
  index : number
  border: boolean
}


const FeatureCard = ({icon, title, content, index, border}:feadtureCardProps)=>(
  <div className={` ${border ? `border border-green-500` : ``} flex flex-row p-6 rounded-[20px]  ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>

      <div className='flex-1 flex flex-col ml-3'>
    <h4 className='font-poppins font-normal text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
    <p className='font-poppins font-semibold text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
      </div>
  </div>
)


const Business = ({border}:any) => {

  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    
    <section id='features' className={`${layout.section} ${ border ? `border border-red-500` : ""} `}>
      <motion.div className={layout.sectionInfo}
      ref={ref}
      initial="hidden"
      animate= {inView ? "visible" : "hidden"}
      variants={slideInFromBottom(0.5)}>
        <h2 className={styles.heading2}>
          You do the Business, <br className='sm:block hidden'/>we&apos;ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
        </p>
        <Button styles="mt-10"/>
      </motion.div>


      <motion.div className={` flex-col ${layout.sectionImg}`}
       ref={ref}
       initial="hidden"
       animate= {inView ? "visible" : "hidden"}
       variants={slideInFromBottom(0.5)}>
        {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} border={border}/>

        ))}
      </motion.div>
    </section>
  )
}

export default Business