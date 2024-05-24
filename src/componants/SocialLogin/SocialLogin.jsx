import { FaGoogle } from "react-icons/fa";
import UseAuth from "../Hooks/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const { googleSignIn } = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName,
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        // if()
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-secondary'><FaGoogle /> Google</button>
        </div>
    );
};

export default SocialLogin;

// import { FaGoogle } from "react-icons/fa";
// import UseAuth from "../Hooks/UseAuth";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { useNavigate } from "react-router-dom";


// const SocialLogin = () => {

//     const { googleSignIn } = UseAuth();
//     const axiosPublic = useAxiosPublic();
//     const navigate = useNavigate();


//     const handleGoogleSignIn = () => {
//         googleSignIn()
//             .then(result => {
//                 console.log(result.user)
//             })
//             .catch(error => {
//                 console.log(error.message)
//             })
//         const userInfo = {
//             email:result.user.email,
//             name:result.user.displayName,
//         };
//         axiosPublic.post('/users', userInfo)
//             .then(res => {
//                 console.log(res.data)
//                 navigate('/')
//             })
//             .catch(error => {
//                 console.log(error.message)
//             })

//     }


//     return (
//         <div>
//             <button onClick={() => handleGoogleSignIn()} className='btn btn-secondary'><FaGoogle></FaGoogle> Google</button>
//         </div>
//     );
// };

// export default SocialLogin;   result is not defined
