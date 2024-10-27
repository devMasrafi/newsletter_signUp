import React, { useState } from 'react'

const NewsLeter = () => {

    const [email, setEmail] = useState()
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()

        setIsSubscribed(true)
        setEmail('')
    }

  return (
    <div className='bg-mainColor'>
        <div className='container mx-auto py-[120px] h-screen font-roboto '>
            <div className='flex justify-center items-center bg-slate-100 w-[850px] mx-auto rounded-2xl '>
                <div className='px-4 '>
                    <div>
                        <h1 className='font-roboto font-bold text-[54px]  ' >Stay updated!</h1>
                        <p>Join 60,000+ product managers reciving monthly updates on:</p>
                        <ul className=' pt-3 pb-3 '>
                            <li className='flex justify-start items-center ' >
                                <img className='pr-2 ' src="src/assets/images/icon-list.svg" alt="" />
                                Product discorvery and building what matters</li>
                            <li className='flex justify-start items-center '>
                                <img className='pr-2 ' src="src/assets/images/icon-list.svg" alt="" />
                                measuring to ensure updates are a success</li>
                            <li className='flex justify-start items-center '>
                                <img className='pr-2 ' src="src/assets/images/icon-list.svg" alt="" />
                                And much more!</li>
                        </ul>
                    </div>
                    <div className='pt-4 ' >
                        <form className='flex flex-col gap-2' action="submit">
                            <input className='p-1 rounded-md border-none '  type="email" placeholder='example@example.com' name='email' id='email'/>
                            <button className='bg-mainColor text-white rounded ' >submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="src/assets/images/illustration-sign-up-desktop.svg" alt="sign-up image" />
                </div>
            </div>
        </div>
    </div >
  )
}

export default NewsLeter