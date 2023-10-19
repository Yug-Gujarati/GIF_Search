import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styles from './styles.module.css';

// Define a custom component for the login page
const Login = () => {
  // Define some state variables for the email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Get the router object from Next.js
  const router = useRouter();

  // Define a function to handle the form submit event
  const handleSubmit = async (event) => {
    // Prevent the default browser behavior
    event.preventDefault();

    // Get the Firebase auth object
    const auth = getAuth();

    try {
      // Sign in the user with email and password using Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Redirect the user to the home page after successful login
      router.push('/');
    } catch (error) {
      // Handle any errors from Firebase
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login with Firebase</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input className={styles.input} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label className={styles.label} htmlFor="password">Password</label>
        <input className={styles.input} type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;