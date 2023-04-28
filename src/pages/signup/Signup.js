import styles from './Signup.module.css'

import React, { useState } from "react";

export default function Signup() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = (e) => {
        e.preventDefault()
        console.log(username, email, [password]);
    }
  return (
    <form onSubmit={handleSignup} className={styles['signup-form']}>
        <label className={styles}>
            <span>Username:</span>
            <input 
            type='name'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            />
        </label>

        <label>
            <span>Email:</span>
            <input 
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
        </label>

        <label>
            <span>Password:</span>
            <input 
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            />
        </label>

        <button className='btn'>Signup</button>

        
    </form>
  )
}
