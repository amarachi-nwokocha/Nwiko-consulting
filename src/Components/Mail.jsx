import React from 'react'

const Mail = () => {
  return (
    <div className='text-center min-h-[40vh] w-full  md:px-10 px-5 pt-10 bg-brightBackGround'>
        <h2 className='text-blue text-center font-bold text-4xl mb-10'>Contact Us</h2>
        <p className='font-semibold text-2xl text-blue'>Partner with us to transform your project from concept to completion. Experience our expertise firsthand — a single trial will exceed your expectations</p>
       <button className='my-20'>
       <a href="mailto:pnwiko@nwikoconsulting.com?subject=Request%20for%20a%20meeting&body=I%20want%20to%20work%20with%20you." className='bg-blue w-10 h-10 p-4 rounded-md font-semibold text-2xl text-white border-2 border-solid border-yellow'>
    Send Mail
  </a>
       </button>
    </div>
  )
}

export default Mail