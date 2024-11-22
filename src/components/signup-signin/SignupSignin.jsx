import "./signupsignin.css";
import { Input } from "../input/Input";
import { useState } from "react";
import { Button } from "../custom-button/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupSignin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loginForm, setLoginForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function signupWithEmail() {
    setLoading(true);
    console.log(name, "name");
    console.log(email, "email");
    console.log(password, "password");
    console.log(confirmPassword, "confirmPassword");
    // autheticate using Email and passsword
    if (
      (name !== "" && email !== "", password !== "" && confirmPassword !== "")
    ) {
      if (password == confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            toast.success("User created successfully!");
            console.log("user craeted", user);
            setLoading(false);
            setName("");
            setPassword("");
            setEmail("");
            setConfirmPassword("");
            navigate("/dashboard");

            // create a doc with user id as the following id
            createdDoc(user);
          })
          .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);
          });
      } else {
        toast.error("Pasword and Confirm password does not match!");
        setLoading(false);
      }
    } else {
      toast.error("All the fields are Required!");
      setLoading(false);
    }
  }
  function createdDoc() {
    // Make sure that the doc with the user id doesnot exist
  }

  function loginUsingEmail() {
    console.log(email, "email");
    console.log(password, "password");

    if ((email !== "", password !== "")) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          toast.success("User Login in!");
          setLoading(false);
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
          setLoading(false);
        });
    } else {
      toast.error("All fields are Mandatory!");
      setLoading(false);
    }
  }
  return (
    <>
      {loginForm ? (
        <div className="signup-wrapper">
          <h2 className="title">
            Login on <span>Financy</span>
          </h2>
          <div>
            <Input
              label="email"
              state={email}
              setState={setEmail}
              placeholder="johndoe@gmail.com"
              type="email"
            />
            <Input
              label="password"
              state={password}
              setState={setPassword}
              placeholder="example0q4w"
              type="password"
            />

            <Button
              disabled={loading}
              text={loading ? "Loading..." : "Login Using Email and Password"}
              onClick={loginUsingEmail}
            />
            <p className="login">or</p>
            <Button
              disabled={loading}
              text={loading ? "Loading ..." : "Login Using Google"}
              blue={true}
            />
            <p
              className="login"
              style={{ cursor: "pointer" }}
              onClick={() => setLoginForm(!loginForm)}
            >
              or Don't have an Account Already. Click here
            </p>
          </div>
        </div>
      ) : (
        <div className="signup-wrapper">
          <h2 className="title">
            Sign Up on <span>Financy</span>
          </h2>
          <div>
            <Input
              label="Full Name"
              state={name}
              setState={setName}
              placeholder="John Doe"
              type="text"
            />
            <Input
              label="email"
              state={email}
              setState={setEmail}
              placeholder="johndoe@gmail.com"
              type="email"
            />
            <Input
              label="password"
              state={password}
              setState={setPassword}
              placeholder="example0q4w"
              type="password"
            />
            <Input
              label="confirm password"
              state={confirmPassword}
              setState={setConfirmPassword}
              placeholder="example0q4w"
              type="password"
            />
            <Button
              disabled={loading}
              text={loading ? "Loading..." : "Sign up Using Email and Password"}
              onClick={signupWithEmail}
            />
            <p className="login">or</p>
            <Button
              disabled={loading}
              text={loading ? "Loading ..." : "Sign up Using Google"}
              blue={true}
            />
            <p
              className="login"
              style={{ cursor: "pointer" }}
              onClick={() => setLoginForm(!loginForm)}
            >
              Or Have an Account? Click here
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignupSignin;
