import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { LuLogIn, LuLogOut } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { auth, googleAuth } from '../../config/firebase';

const AuthUser = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();

    useEffect(() => {
      
    console.log(auth?.currentUser?.email)
      
    }, [email])
    

    const googleSignIn = async ()=> {
        try {
            await signInWithPopup(auth, googleAuth)
        } catch (err) {
            console.log(err);
        }
    }

    const signIn = async ()=>{
        
        try{

            await createUserWithEmailAndPassword(auth,email,password)
            if(auth?.currentUser?.email){
                
                navigate('/');
            }
            else{
                console.log("your not logged in")
            }

        }
        catch(err){
            console.log(err)
        }
    }
    const logout = async () =>{
        try {
            await signOut(auth)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section id='portfolio' className='flex h-[calc(100vh-8vh)]'>
            <div className="container mx-auto flex items-center justify-center">
                <div className="flex font-space flex-col items-center justify-center w-2/3 backdrops rounded-md h-2/4 gap-y-8 ">
                    <h2 className='text-white text-center'> Sign In</h2>
                    <div className="flex static flex-col w-full px-32 justify-center gap-y-4">
                        <input autoComplete='off' name='email' type="email" className='bg-gray-600/75 font-bold w-full rounded-md px-2 py-2 focus:outline-teal-900 focus-visible:outline-teal-900 focus-within:ring-teal-700 text-white'onChange={(e)=>setEmail(e.target.value)}  placeholder='Email...' />
                        <input autoComplete="off" name='password' type="password" className='bg-gray-600/75 font-bold w-full rounded-md px-2 py-2 focus:outline-teal-900 focus-visible:outline-teal-900 focus-within:ring-teal-700 text-white' onChange={(e)=>setPassword(e.target.value)} placeholder='Password...' />
                        <div className="flex w-full justify-end gap-x-2">
                            <button className='bg-teal-700/50 text-lg text-gray-300 hover:bg-gray-300 font-bold transition-all rounded-md hover:text-teal-900 px-4 py-2 inline-flex items-center gap-x-1' onClick={signIn}>Sign In <LuLogIn width={8} height={8} /> </button>
                            <button className='bg-teal-700/50 text-lg text-gray-300 hover:bg-gray-300 font-bold transition-all rounded-md hover:text-teal-900 px-4 py-2 inline-flex items-center gap-x-1' onClick={googleSignIn}>Sign In With <FcGoogle width={8} height={8} /> </button>
                            <button className='bg-teal-700/50 text-lg text-gray-300 hover:bg-gray-300 font-bold transition-all rounded-md hover:text-teal-900 px-4 py-2 inline-flex items-center gap-x-1' onClick={logout}>Sign Out<LuLogOut width={8} height={8} /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthUser