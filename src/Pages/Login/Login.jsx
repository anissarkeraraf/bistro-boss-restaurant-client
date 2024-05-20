import loginImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import './login.css';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Login = () => {

    const { signIn, googleSignIn, } = useContext(AuthContext);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const handleValidatCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            navigate('/')
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign In</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col border-2 shadow-xl shadow-zinc-600 md:flex-row">
                    <div className="text-center lg:w-1/2 lg:text-left mr-10">
                        <img className='img' src={loginImg} alt="" />
                    </div>
                    <div className="card lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <h2 className='text-4xl font-medium text-center my-4'>Sign In Now!</h2>
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidatCaptcha} type="text" name='captcha' placeholder="type the text captcha above" className="input input-bordered" required />
                                {/* <button className="btn btn-outline btn-xs mt-4 uppercase">Validat</button> */}
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                            <p className='mx-auto mt-2'>New Here ?<small className='btn-link ml-2'><Link to='/signUp'>Create an account</Link></small></p>
                            <button onClick={() => handleGoogleSignIn()} className='btn btn-secondary'>Google</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;