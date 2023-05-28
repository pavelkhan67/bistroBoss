import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const GoogleLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            // console.log(result.user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center pb-5'>
                <button onClick={handleGoogleLogin} className="btn btn-warning btn-outline"> Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;