import styles from "./Signup.module.css";
import { useSignup } from "../../hooks/useSignup";

import React, { useState } from "react";

export default function Signup() {
	const [displayName , setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { signup, isPending, error } = useSignup();

	const handleSignup = (e) => {
		e.preventDefault();
		signup(email, password, displayName);
	};

	return (
		<form onSubmit={handleSignup} className={styles["signup-form"]}>
			<label className={styles}>
				<span>Username:</span>
				<input
					type="name"
					onChange={(e) => setDisplayName(e.target.value)}
					value={displayName}
				/>
			</label>

			<label>
				<span>Email:</span>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>

			<label>
				<span>Password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</label>

			{!isPending && <button className="btn">Signup</button>}
        {isPending && <button className="btn" disabled>Loading</button>}
            {error && <p>{error}</p>}
		</form>
	);
}
