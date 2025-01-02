import React from 'react'
import value1 from "../assets/icon1.png";
import value2 from "../assets/icon2.svg";
import value3 from "../assets/icon3.png";
import value4 from "../assets/icon4.svg";
import value5 from "../assets/icon5.svg";

const data = {
    values: [
      {
        image: value1,
        head: 'Excellence',
        text: 'We strive to be excellent in all that we do'
      },
      {
        image: value2,
        head: 'Integrity',
        text: 'We conduct our business with the highest standards of ethics and transparency'
      },
      {
        image: value3,
        head: 'Customer',
        text: 'We place them at the heart of our business & relentlessly meet their expectations'
      },
      {
        image: value4,
        head: 'Humility',
        text: 'We approach our work and relationships with humility, open to learning and improvement.'
      },
      {
        image: value5,
        head: 'Timeliness',
        text: 'We deliver our services and products on time, every time.'
      },
    ]
}
const ValueCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
            {data.values.map((item, index) => (
                <div key={index} className='p-5 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all w-full md:w-[220px]'>
                    <img src={item.image} alt='' className='h-20  mb-5' />
                    <h2 className='text-yellow text-5xl md:text-2xl'>{item.head}</h2>
                    <p className='text-white text-xl pt-6 md:pt-2 md:text-base'>{item.text}</p>
                </div>
            ))}
        </div>
  )
}

export default ValueCard