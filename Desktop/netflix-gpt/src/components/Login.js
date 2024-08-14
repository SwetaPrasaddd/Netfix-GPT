import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";


const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    // const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the form data
        // checkValidData(email, password);
        // console.log(email.current.value);
        // console.log(password.current.value);

        const msg = checkValidData(email.current.value,
            password.current.value);
        setErrorMessage(msg);
        if (msg)
            return;
        // sign in/sign up
        // createNewUser
        if (!isSignInForm) {
            //Sign-up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser; //Updated value od user
                            dispatch
                                (addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                                );
                            // navigate("/browse");
                        }).catch((error) => {
                            // An error occurred
                            setErrorMessage(error.message);
                        });
                    // console.log(user);
                    // navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            //Sign-in logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    // navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    }

    const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_URL}
                    alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className=" w-3/12  absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {
                        isSignInForm ? "Sign In" : "Sign Up"
                    }
                </h1>

                {!isSignInForm && (<input
                    ref={name}
                    type="text"
                    placeholder="Full Name"
                    className=" p-4 my-4 w-full bg-gray-800" />
                )}

                <input
                    ref={email}
                    type="text"
                    placeholder="Email address"
                    className=" p-4 my-4 w-full bg-gray-800"
                />

                <input
                    ref={password}
                    type="text"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-800"
                />

                <p className="text-red-500 font-bold text-lg py-2">
                    {errorMessage}
                </p>

                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg"
                    onClick={handleButtonClick}>
                    {
                        isSignInForm ? "Sign In" : "Sign Up"
                    }
                </button>

                <p className="cursor-pointer" onClick={toggleSignInForm}>
                    {
                        isSignInForm ? "New To Netflix? Sign Up"
                            : "Already Registered? Sign In Now"
                    }
                </p>

            </form>
        </div >
    )
}
export default Login;