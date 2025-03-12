import React from 'react'
import { doSocialLogin } from '../actions'

const Login = () => {
  return (
    <div className='h-full w-full flex items-center justify-center'>
        <div className='h-fit w-fit flex items-center justify-center rounded-[25px] bg-white shadow-3xl'>
            <form id='login-form' action={doSocialLogin} className='h-full w-full flex flex-col items-start justify-center p-[20px] gap-5'>
                <h1 className='text-[35px] pl-[5px] pb-[10px]'>Login</h1>
                <div className='flex flex-col items-center justify-center gap-[30px]'>
                    <div className='w-full flex flex-row items-center justify-start'>
                        <button type='submit' name='action' value="google" className='flex items-center justify-center text-[19px] py-[5px] px-[20px] rounded-[25px] bg-[#646cff] text-white hover:shadow-glow gap-2.5'>
                            Sign in with Google
                            <img src="/google.png" alt="not found" className='h-[19px] w-[19px] filter invert sepia brightness-90 contrast-85'/>
                        </button>
                    </div>
                    <div className='w-full flex flex-row items-center justify-center'>
                        <button type='submit' name='action' value="facebook" className='flex items-center justify-center mt-3 text-[19px] py-[5px] px-[20px] rounded-[25px] bg-[#646cff] text-white hover:shadow-glow gap-2.5'>
                            Sign in with Facebook
                            <img src="/facebook.png" alt="not found" className='h-[19px] w-[19px] filter invert sepia brightness-90 contrast-85'/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login