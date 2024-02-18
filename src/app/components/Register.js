import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className='lg:mt-[10rem] md:mt-[8rem] mt-[5rem] flex justify-center items-center mb-16'>
            <form>
                <div className='login-info'>
                    <h3 className='font-semibold text-[1.8rem] flex justify-center '>Create an account</h3>
                    <div className=''>
                        <label htmlFor="email" className='text-[1rem] '>Email</label>
                    </div>
                    <div>
                        <input type="email" className='border-[1px] border-[#D0D5DD] outline-[#D1E9FF] focus:border-[3px] w-[29rem] h-12 p-2 rounded-lg' name="email" id="" />
                    </div>
                    <div className='flex justify-between'>
                        <label htmlFor="password">Password</label>
                    </div>
                    <div >
                        <input type="email" name="password" id="" className='border-[1px] border-[#D0D5DD] outline-[#D1E9FF] focus:border-[3px] w-[29rem] h-12 p-2 rounded-lg' />
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <input type="submit" className='bg-[#24AB70] border-0 rounded-lg px-[10.9rem] py-[1rem] font-semibold text-white mt-5' value="Create account" />
                </div>
                <div className='bg-[#D1E9FF] flex justify-center mt-4 px-[5rem] py-[1rem] border-0 rounded-lg gap-2 items-center'>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_6694_307)">
                            <path d="M19.805 10.7304C19.805 10.0506 19.7499 9.36714 19.6323 8.69839H10.2V12.5492H15.6014C15.3773 13.7912 14.6571 14.8898 13.6025 15.588V18.0866H16.825C18.7173 16.3449 19.805 13.7728 19.805 10.7304Z" fill="#4285F4" />
                            <path d="M10.1999 20.5007C12.897 20.5007 15.1714 19.6151 16.8286 18.0866L13.6061 15.5879C12.7096 16.1979 11.5521 16.5433 10.2036 16.5433C7.59474 16.5433 5.38272 14.7832 4.58904 12.4169H1.26367V14.9927C2.96127 18.3695 6.41892 20.5007 10.1999 20.5007Z" fill="#34A853" />
                            <path d="M4.5854 12.4169C4.16651 11.175 4.16651 9.83014 4.5854 8.58818V6.01239H1.2637C-0.154633 8.83804 -0.154633 12.1671 1.2637 14.9927L4.5854 12.4169Z" fill="#FBBC04" />
                            <path d="M10.1999 4.45805C11.6256 4.436 13.0035 4.97247 14.036 5.95722L16.8911 3.10218C15.0833 1.40459 12.6838 0.471278 10.1999 0.500674C6.41892 0.500674 2.96126 2.63185 1.26367 6.01234L4.58537 8.58813C5.37537 6.21811 7.59106 4.45805 10.1999 4.45805Z" fill="#EA4335" />
                        </g>
                        <defs>
                            <clipPath id="clip0_6694_307">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p className='text-[#1570EF] font-semibold'>Continue with Google</p>
                </div>

                <div className='flex justify-center'>
                    <p>Already Hava An accout ?<span><Link href="/login" className='text-[#1570EF]'> Log in</Link></span></p>
                </div>
            </form>
        </div>
    )
}

export default Register