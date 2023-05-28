// AuthNavigation.js
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import LoggedIn from './LoggedIn';
import PreLoggedIn from './PreLoggedIn';

function LoadNavOnAuth() {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log(user); // add this line
            if (user) {
                setIsUserLoggedIn(true);
            } else {
                setIsUserLoggedIn(false);
            }
        });
    }, []);
    

 
    

    return (
        <div>
            {isUserLoggedIn ? <LoggedIn /> : <PreLoggedIn />}
        </div>
    );
}

export default LoadNavOnAuth;
