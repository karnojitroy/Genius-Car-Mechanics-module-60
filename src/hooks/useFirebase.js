import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    const [users, setUsers] = useState({});

    const auth = getAuth();

    const signInGoolge = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUsers(result.user)
            });
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUsers(user)
            }
            else {
                setUsers({})
            }
        });
        return () => unsubscribed;
    }, []);
    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }
    return {
        users,
        signInGoolge,
        logOut
    }
}