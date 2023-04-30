import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = (email, password) => {
	const [isCancelled, setIsCancelled] = useState(false);
	const [isPending, setIsPending] = useState(null);
	const [error, setError] = useState(false);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setError(null);
		setIsPending(true);

	
		try {
			const res = await projectAuth.signInWithEmailAndPassword(email, password);

			dispatch({ type: "LOGIN", payload: res.user });

            // update state
			if (!isCancelled) {
				setError(null);
				setIsPending(false);
			}
		} catch (err) {
			if (!isCancelled) {
				setIsPending(false);
				setError(err.message);
			}
		}
	};

    useEffect(() => {
        return  () => setIsCancelled(true)
    }, [])
    return {login, error, isPending}
};
