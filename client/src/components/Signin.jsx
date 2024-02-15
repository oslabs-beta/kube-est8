import React, {useEffect} from 'react'; 
import { GoogleButton } from 'react-google-button';
import {UserAuth} from '../context/AuthContent';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const {googleSignIn, user} = UserAuth(); 

    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch(error) {
            console.log(error); 
        }
    }; 

    useEffect(() => {
        //if user is signed in, navigate to main page
        if(user !== null) {
            navigate('/main');
        }
    }, [user])

    return (
        <div>
            <h1 className='signin'>Sign In</h1>
            <GoogleButton onClick={handleGoogleSignIn}/>
        </div>
    )
}

export default Signin; 