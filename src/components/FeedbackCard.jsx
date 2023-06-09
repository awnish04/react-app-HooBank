import {quotes} from '../assets'

const FeedbackCard = ({content, name, title, img}) =>(

    <div className='flex justify-between flex-col px-10 py-12 rounded-lg  max-w-sm md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double_quotes" className='w-10 h-6 object-contain'/>
      <p className='font-poppins font-normal text-lg leading-[32px] text-white my-2'>
        {content}
      </p>

      <div className='flex flex-row'>
        <img src={img} alt="{name}" className='w-12 h-12 rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-poppins font-semibold text-xl leading-[32px] text-white'>
            {name}
          </h4>
            <p className='font-poppins font-normal text-base leading-[24px] text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  )


export default FeedbackCard