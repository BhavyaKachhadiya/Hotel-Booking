import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className='lg:mt-[10rem] md:mt-[8rem] mt-[5rem] flex justify-center items-center'>
            <form>
                <div className='login-info'>
            <h3 className='font-semibold text-[1.8rem] flex justify-center '>Login to your accout</h3>
                    <div className=''>
                        <label htmlFor="email" className='text-[1rem] '>Email</label>
                    </div>
                    <div>
                        <input type="email" className='border-[1px] border-[#D0D5DD] outline-[#D1E9FF] focus:border-[3px] w-[29rem] h-12 p-2 rounded-lg' name="email" id="" />
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="password">Password</label>
                        <span className='text-[#1570EF]'>Forget Password?</span>
                    </div>
                    <div >
                        <input type="email" name="password" id="" className='border-[1px] border-[#D0D5DD] outline-[#D1E9FF] focus:border-[3px] w-[29rem] h-12 p-2 rounded-lg' />
                    </div>
                </div>
                <div className='flex justify-center items-center'> 
                    <input type="submit" className='bg-[#24AB70] border-0 rounded-lg px-[12rem] py-[1rem] font-semibold text-white mt-5' value="Login now" />
                </div>

                <div className='flex justify-center'>
                    <p>Don't have an account ?<span><Link href="/register" className='text-[#1570EF]'> Sign Up</Link></span></p>
                </div>
            </form>
        </div>
    )
}

export default Login