import FirebaseService from "@/service/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  User,
  signOut as _signOut,
} from "firebase/auth";
import { useState } from "react";
import { AuthContext } from "./auth-context";
import { FirebaseError } from "firebase/app";
import { ResponseType } from "@/types";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const auth = FirebaseService.getInstance().auth;

  const signInWithEmail = async (
    email: string,
    password: string
  ): Promise<ResponseType> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      await getCurrentUser();
      return { status: "success", message: "success sign in" };
    } catch (error) {
      const errorCode = (error as FirebaseError).code;
      return { status: "error", message: errorCode };
    }
  };

  const signUpWithEmail = async (
    email: string,
    password: string
  ): Promise<ResponseType> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmail(email, password);
      return { status: "success", message: "success sign up" };
    } catch (error) {
      const errorCode = (error as FirebaseError).code;
      return { status: "error", message: errorCode };
    }
  };

  const getCurrentUser = async () => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  };

  const signOut = async () => {
    return _signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp: signUpWithEmail,
        signIn: signInWithEmail,
        signOut: signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
