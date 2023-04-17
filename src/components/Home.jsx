import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProviders';



const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h2>Home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;