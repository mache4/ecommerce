import { useRef, useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { REMOVE_ERRORS } from "../constants/actionTypes";
import { signup } from "../redux/actions/auth";
import { useAppDispatch, useAppSelector } from "../hooks";
import { SigninContext } from "../contexts/SigninContext";
import { OverlayContext } from "../contexts/OverlayContext";

interface Props {
    clicked: any
}

const Signup = (props: Props) => {
    const { setOverlay } = useContext(OverlayContext);
    const { setSignin } = useContext(SigninContext);
    const [error, setError] = useState("");
    const emailRef = useRef<any>();
    const passwordRef = useRef<any>();
    const passwordConfirmRef = useRef<any>();

    const location = useLocation();

    const errorData = useAppSelector((state: any) => state.profile.error);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch({ type: REMOVE_ERRORS });
    }, [location, dispatch]);

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
        if (!passwordConfirmRef.current.value)
            return setError("Confirm password");
        if (!validateEmail(emailRef.current.value))
            return setError("Email is not valid");
        if (passwordRef.current.value.length < 8)
            return setError("Password must have at least 8 characters");
        if (passwordRef?.current.value !== passwordConfirmRef?.current.value)
            return setError("Passwords don't match");
        if (errorData || errorData !== "")
            setError(errorData);

        dispatch(signup({
            email: emailRef?.current.value.trim(),
            password: passwordRef?.current.value,
            createdAt: new Date()
        }, setSignin, setOverlay));
    }

    return (
        <div>
            <h1 className="text-4xl mb-10">Signup</h1>
            <input className="w-5/6 h-10 text-black my-5 p-2 outline-none m-auto" type="text" placeholder="Email" ref={emailRef} />
            <input className="w-5/6 h-10 text-black my-5 p-2 outline-none m-auto" type="password" placeholder="Password" ref={passwordRef} />
            <input className="w-5/6 h-10 text-black my-5 p-2 outline-none m-auto" type="password" placeholder="Confirm Password" ref={passwordConfirmRef} />
            <button className="border block m-auto px-5 py-2 my-10" onClick={formSubmit}>Signup</button>
            <p className="font-normal text-lg">Already have an account? Click <span className="text-light-blue underline cursor-pointer" onClick={props.clicked}>here</span>.</p>
            <p className="" style={{ color: "red" }}>{error}</p>
        </div>
    );
}

const validateEmail = (email: any) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex))
        return true;
    return false;
}

export default Signup;