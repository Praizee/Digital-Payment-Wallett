import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';
import { auth } from '../Firebase/firebase.ts';

// Create a context for the app's state
const AppContext = createContext();

// Create a custom hook for accessing the app's context
export const useAppContext = () => {
    return useContext(AppContext);
};

// Define the AppProvider component that wraps the app and manages the state
export const AppProvider = ({ children }) => {
    // Initialize state variables for user data and loading status
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Use the useEffect hook to subscribe to authentication changes
    useEffect(() => {
        // onAuthStateChanged listens for authentication state changes in Firebase
        const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
            if (authUser) {
                // If a user is authenticated, retrieve their data from the database
                const { uid, email } = authUser;

                const db = getDatabase();
                const userRef = ref(db, 'users/' + uid);

                try {
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        const { first_name, last_name, bankName, accountName, accountNumber, phoneNumber } = userData;

                        // Update the user state with the retrieved data
                        setUser({
                            uid,
                            email,
                            firstName: first_name, // Map to 'firstName' in your state
                            lastName: last_name,   // Map to 'lastName' in your state
                            bankName: bankName,
                            accountName: accountName,
                            accountNumber: accountNumber,
                            phoneNumber: phoneNumber,
                            // Add other user data fields here
                        });
                    } else {
                        // Handle the case where user data does not exist in the database
                    }
                } catch (error) {
                    // Handle database retrieval errors
                    console.error('Error fetching user data:', error);
                }
            } else {
                setUser(null); // No authenticated user
            }
            setLoading(false); // Set loading to false after handling authentication changes
        });

        // Clean up the subscription to avoid memory leaks
        return () => unsubscribe();
    }, []);

    // Provide the user and loading state as a value to the context
    return (
        <AppContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AppContext.Provider>
    );
};
