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
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'User Login successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });

                    })
                    .catch(error => console.log(error))
            })
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