import { useState } from "react";

import FormInput from "../../common/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../common/button/button.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";

import {
  SignInContainer,
  SignInTitle,
  SignInButtonsContainer,
} from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };

    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        alert("Invalid login and/or password");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <SignInButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttontype={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google Sign in
          </Button>
        </SignInButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
