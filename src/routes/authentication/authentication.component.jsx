import SignUpForm from "../../components/auth/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/auth/sign-in-form/sign-in-form.component";

import { AuthenticationContainer } from "./authentication.styles.jsx";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
