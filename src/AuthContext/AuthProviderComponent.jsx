import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

function AuthProviderComponent({ children }) {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const [user, setUser] = useState(null);

  // createUser
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };
  // loginUser
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
    setLoading(true);
  };

  // googleSignIn
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
    setLoading(true);
  };

  // githubSignIn
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
    setLoading(true);
  };

  // signOut
  const signOutUser = () => {
    return signOut(auth);
  };

  // updateProfile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

  // userState
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, [reload]);

  const authInfo = {
    createUser,
    loginUser,
    googleSignIn,
    githubSignIn,
    user,
    signOutUser,
    updateUserProfile,
    setReload,
    setLoading,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProviderComponent;
AuthProviderComponent.propTypes = {
  children: PropTypes.node
}