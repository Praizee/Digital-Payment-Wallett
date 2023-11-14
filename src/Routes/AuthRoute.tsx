import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.js';

const AuthRoute = ({ children }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is authenticated, allow access
                setLoading(false);
            } else {
                // User is not authenticated, redirect to the login page
                navigate('/');
            }
        });

        return () => {
            // Clean up the event listener
            unsubscribe();
        };
    }, [navigate]);

    if (loading) {
        // Display a loading indicator
        return <div>Loading...</div>;
    }

    // When the loading is complete, render the child components
    return children;
};

export default AuthRoute;
