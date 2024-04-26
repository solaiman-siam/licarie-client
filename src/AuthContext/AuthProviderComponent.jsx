import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

function AuthProviderComponent({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  // createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // loginUser
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // googleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // githubSignIn
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // signOut
  const signOutUser = () => {
    return signOut(auth);
  };

  // userState
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    googleSignIn,
    githubSignIn,
    user,
    signOutUser,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProviderComponent;
