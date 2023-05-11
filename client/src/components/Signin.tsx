import { useContext, useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { REMOVE_ERRORS } from "../constants/actionTypes";
import { signin } from "../redux/actions/auth";
import { useAppDispatch, useAppSelector } from "../hooks";
import Signup from "./Signup";
import { SigninContext } from "../contexts/SigninContext";
import { OverlayContext } from "../contexts/OverlayContext";

const Signin = () => {
    const { signinVisible, setSignin } = useContext(SigninContext);
    const { setOverlay } = useContext(OverlayContext);
    const [error, setError] = useState("");
    const [signup, setSignup] = useState(false);
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();

    const location = useLocation();

    const errorData = useAppSelector((state: any) => state.profile.error);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch({ type: REMOVE_ERRORS });
    }, [location, dispatch, signup]);

    useEffect(() => {
        if (errorData || errorData !== "")
            setError(errorData);
        else
            setError("");
    }, [errorData]);

    const formSubmit = () => {
        setError("");
        if (!emailRef.current.value && !passwordRef.current.value)
            return setError("Enter data");
        if (!emailRef.current.value)
            return setError("Enter email");
        if (!passwordRef.current.value)
            return setError("Enter password");
        if (errorData || errorData !== "")
            setError(errorData);

        dispatch(signin({
            email: emailRef?.current.value.trim(),
            password: passwordRef?.current.value
        }, setSignin, setOverlay));
    }

    const clicked = () => setSignup(true);

    return (<div className={`w-2/6 h-4/6 bg-blue text-white border rounded-sm text-center p-10 z-20 fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ${signinVisible ? "flex flex-col justify-center align-center" : "hidden"}`}>
        {!signup ?
            <div>
                <h1 className="text-4xl mb-10">Signin</h1>
                <input className="w-5/6 h-10 text-black my-5 p-2 outline-none m-auto" type="text" placeholder="Email" ref={emailRef} />
                <input className="w-5/6 h-10 text-black my-5 p-2 outline-none m-auto" type="password" placeholder="Password" ref={passwordRef} />
                <button className="border block m-auto px-5 py-2 my-10" onClick={formSubmit}>Signin</button>
                <p className="font-normal text-lg">Don't have an account? Click <span className="text-light-blue underline cursor-pointer" onClick={clicked}>here</span> to create one.</p>
                <p className="" style={{ color: "red" }}>{error}</p>
            </div> :
            <Signup clicked={() => setSignup(false)} />}
    </div>);
}

export default Signin;