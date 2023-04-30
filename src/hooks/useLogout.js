import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

const useLogout = () => {
	const [cancelled, setIsCancelled] = useState(false);
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const { dispatch } = useAuthContext();

	const logout = async () => {
		setError(null);
		setIsPending(true);

		// sign the user out
		try {
			await projectAuth.signOut();

			//  dispatch logout action
			dispatch({ type: "LOGOUT" });

			// update State
			if (!setIsCancelled) {
				setIsPending(false);
				setError(null);
			}
		} catch (err) {
			if (!setIsCancelled) {
				console.log(err.message);
				setError(err.message);
				setIsPending(false);
				setError(null);
			}
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { logout, error, isPending };
};

export default useLogout;
