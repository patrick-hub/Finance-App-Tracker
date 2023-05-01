import React, { useState } from "react";

export default function TransactionForm() {
	const [name, setName] = useState("");
	const [amount, setAmount] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
        console.log({
            name, 
            amount
        });
	};

	return (
		<>
			<h3>Add a transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Transaction name:</span>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						required
						value={name}
					/>
				</label>
				<label>
					<span>Amount ($):</span>
					<input
						type="number"
						onChange={(e) => setAmount(e.target.value)}
						required
						value={amount}
					/>
				</label>
				<button >
					Add Transaction
				</button>
			</form>
		</>
	);
}
