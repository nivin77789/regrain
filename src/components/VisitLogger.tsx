import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export const VisitLogger = () => {
    const location = useLocation();
    // Use a ref to prevent double logging in React.StrictMode if that's a concern, 
    // although in production it only runs once per mount/update.
    // Ideally for "each reload", we just rely on the effect running.

    useEffect(() => {
        const logVisit = async () => {
            try {
                await addDoc(collection(db, "visits"), {
                    path: location.pathname,
                    timestamp: serverTimestamp(),
                    userAgent: navigator.userAgent
                });
                console.log("Visit logged:", location.pathname);
            } catch (error) {
                console.error("Error logging visit:", error);
            }
        };

        logVisit();
    }, [location.pathname]); // Trigger on path change (navigation) or reload (mount)

    return null;
};
