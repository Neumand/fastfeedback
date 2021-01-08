import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const githubAuthProvider = new firebase.auth.GithubAuthProvider();

  const signinWithGithub = async () => {
    const { user } = await firebase.auth().signInWithPopup(githubAuthProvider);
    setUser(user);
    return user;
  };

  const signout = async () => {
    await firebase.auth().signOut();
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signinWithGithub,
    signout,
  };
}
