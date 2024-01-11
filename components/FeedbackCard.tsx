import React from 'react'

type FeednackCardProp = {
  content: string
  name: string
  title:string
  img:string
}


const FeedbackCard = ({content, name, title, img} :FeednackCardProp) => {
  return (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5  mr-0 my-5 feedback-card'>
      <img src={img}/>
    </div>
  )
}

export default FeedbackCard