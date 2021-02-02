import React, { useState, useEffect, useContext, createContext } from "react";
import cookie from "js-cookie";

import { createUser } from "./db";
import firebase from "./firebase";

const authContext = createContext({
  user: null,
  signinWithGithub: null,
  signinWithGoogle: null,
  signout: null,
});

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const handleUser = async rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...restUser } = user;
      createUser(user.uid, restUser);
      setUser(user);
      cookie.set("fast-feedback-auth", true, {
        expires: 1,
      });
      return user;
    } else {
      setUser(null);
      cookie.remove("fast-feedback-auth");
      return null;
    }
  };

  const signinWithGithub = async () => {
    const githubAuthProvider = new firebase.auth.GithubAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(githubAuthProvider);
    handleUser(user);
  };

  const signinWithGoogle = async () => {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    handleUser(user);
  };

  const signout = async () => {
    await firebase.auth().signOut();
    handleUser();
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => handleUser(user));

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signinWithGoogle,
    signout,
  };
}

const formatUser = user => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user.ya,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
