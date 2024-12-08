import { ResponseType } from "@/types";
import { User } from "firebase/auth";
import { createContext } from "react";

interface AuthContextInterface {
  currentUser: User | null;
  signUp: (email: string, password: string) => Promise<ResponseType>;
  signIn: (email: string, password: string) => Promise<ResponseType>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  currentUser: null,
  signUp: async () => ({ status: "error", message: "" }),
  signIn: async () => ({ status: "error", message: "" }),
  signOut: () => {},
});
