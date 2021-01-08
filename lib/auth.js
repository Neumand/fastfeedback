import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "./firebase";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const githubAuthProvider = new firebase.auth.GithubAuthProvider();

  const handleUser = rawUser => {
    if (rawUser) {
      const user = formatUser(rawUser);
      setUser(user);
      return user;
    } else {
      setUser(null);
      return null;
    }
  };

  const signinWithGithub = async () => {
    const { user } = await firebase.auth().signInWithPopup(githubAuthProvider);
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
    signout,
  };
}

const formatUser = user => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].provider,
  };
};
