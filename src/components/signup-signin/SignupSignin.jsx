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

const SignupSignin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  function signupWithEmail() {
    console.log(name, "name");
    console.log(email, "email");
    console.log(password, "password");
    console.log(confirmPassword, "confirmPassword");
    // autheticate using Email and passsword
    if (
      (name !== "" && email !== "", password !== "" && confirmPassword !== "")
    ) {
      if (password === confirmPassword) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            toast.success("User signIn successfully!");
            console.log("user craeted", user);
            setLoading(false);
            setName("");
            setPassword("");
            setEmail("");
            setConfirmPassword("");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoading(false);
          });
      } else {
        toast.error("Pasword and Confirm password does not match!");
      }
    } else {
      toast.error("All the fields are Required!");
      setLoading(false);
    }
  }

  return (
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
        <p style={{ textAlign: "center", margin: 0 }}>or</p>
        <Button
          text={loading ? "Loading..." : "Sign up Using Google"}
          blue={true}
        />
      </div>
    </div>
  );
};

export default SignupSignin;
