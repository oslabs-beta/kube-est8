import React from 'react';
import {UserAuth} from '../context/AuthContent'
import { Link } from 'react-router-dom';



const WelcomePage = () => {

    const {user, logOut} = UserAuth();

    return (
        <div className='welcome-container'>
            {user?.displayName ? <Link to='/main' className='go-main'><a>Proceed to my estate</a></Link> :

            <div className='welcome-page'>
                <h1>Welcome!</h1>
                <h2>If your cluster has been configured, <br></br> please proceed to your Kubernetes estate.</h2>
            </div>
            }

        </div>
    )
}

export default WelcomePage;