import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { useSendEmailVerification: true });

    const [updateProfile, updating, profileError] = useUpdateProfile(auth);


    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }


    const createUser = async e => {
        e.preventDefault()
        const displayName = e.target.name.value
        if (email) {
            setShowError('User already exists, Please login')
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName, });
        console.log('Updated profile');
        Navigate('/home');
        toast.success("Account created successfully")
    }


    return (
        <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div class="card-body">
                    <form
                        onSubmit={createUser}
                    >
                        <h1 className='text-xl font-bold text-center text-secondary'>Sign Up</h1>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input
                                onBlur={handleEmailBlur}
                                type="email" name='email' placeholder="email" class="input input-bordered" required />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input
                                onBlur={handlePasswordBlur}
                                type="password" name='password' placeholder="password" class="input input-bordered" />
                            <label class="label cursor-pointer">
                                <span class="label-text">Accept terms and condition</span>
                                <input
                                    onClick={() => setAgree(!agree)}
                                    type="checkbox" class="checkbox checkbox-sm" />
                            </label>
                        </div>
                        <div
                            class="form-control mt-6">
                            <input class="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                        <div>
                            <p className='text-sm'>Already have an account? <Link className='text-success font-semibold' to="/login">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;