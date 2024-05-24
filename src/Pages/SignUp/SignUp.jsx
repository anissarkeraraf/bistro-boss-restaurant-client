import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../assets/others/authentication2.png';
import './signup.css'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../componants/Hooks/useAxiosPublic';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // Create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database')
                                    reset();
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })


                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })


    }

    // console.log(watch("example"))

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content border-2 shadow-xl shadow-zinc-600 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={signUpImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-4xl font-medium text-center my-4'>Sign Up Now!</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"  {...register("name", { required: true })} name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                                {errors.name && <span className='text-red-700'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="url"  {...register("photoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" required />
                                {errors.photoURL && <span className='text-red-700'>PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                                {errors.email && <span className='text-red-700'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name='password' placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <span className='text-red-700'>Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-700'>Password must be 6 characters</span>}
                                {errors.password?.type === 'maxlength' && <span className='text-red-700'>Password must be less then 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className='text-red-700'>Password must have one uper case, one lower case, one number and one special characters</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                            <p className='mx-auto mt-2'>Already Registerd ? <small className='btn-link'><Link to='/login'>Go to sign in</Link></small></p>
                        </form>

                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;