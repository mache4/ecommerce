import { createContext } from "react";

export const SigninContext = createContext({
    signinVisible: false,
    setSignin: (signinVisible: boolean) => { }
});