import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { getDatabase, ref, get, DataSnapshot } from 'firebase/database';
import { auth } from '../Firebase/firebase';

// Define the initial state structure
type UserState = {
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    phoneNumber: string;
    // Add other user data fields here
};

// Create a context for the app's state
const AppContext = createContext<{ user: UserState | null; loading: boolean }>({
    user: null,
    loading: true,
});

// Create a custom hook for accessing the app's context
export const useAppContext = () => {
    return useContext(AppContext);
};

// Define the AppProvider component that wraps the app and manages the state
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Initialize state variables for user data and loading status
    const [user, setUser] = useState<UserState | null>(null);
    const [loading, setLoading] = useState(true);

    // Use the useEffect hook to subscribe to authentication changes
    useEffect(() => {
        // onAuthStateChanged listens for authentication state changes in Firebase
        const unsubscribe = onAuthStateChanged(auth, async (authUser: User | null) => {
            if (authUser) {
                // If a user is authenticated, retrieve their data from the database
                const { uid, email } = authUser;

                const db = getDatabase();
                const userRef = ref(db, 'users/' + uid);

                try {
                    const snapshot: DataSnapshot = await get(userRef);
                    if (snapshot.exists()) {
                        const userData = snapshot.val();
                        const { first_name, last_name, bankName, accountName, accountNumber, phoneNumber } = userData;

                        // Update the user state with the retrieved data
                        setUser((prevState) => ({
                            ...(prevState || {}),
                            uid,
                            email: email || '', // Assert that email is non-null
                            firstName: first_name || '', // Assert that first_name is non-null
                            lastName: last_name || '',   // Assert that last_name is non-null
                            bankName: bankName || '',
                            accountName: accountName || '',
                            accountNumber: accountNumber || '',
                            phoneNumber: phoneNumber || '',
                            // Add other user data fields here
                        } as UserState)); // Use type assertion here

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
    const contextValue = { user, loading };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
