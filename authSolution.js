// authSolution.js
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

let authStateInitialized = false; // Flag to prevent duplicate updates

onAuthStateChanged(auth, (user) => {
  if (!authStateInitialized) {
    authStateInitialized = true;
    // Perform actions based on user authentication status
    if (user) {
      // User is signed in, see the User's Profile id
      const uid = user.uid;
      console.log('User is signed in:', uid);
      // ...
    } else {
      // User is signed out
      console.log('User is signed out');
      // ...
    }
  }
});
// Additional error handling and debouncing techniques could be implemented here for better reliability.