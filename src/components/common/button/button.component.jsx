import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const getButton = (buttontype = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttontype]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const ButtonComponent = getButton(buttonType);
  return (
    <ButtonComponent
      as="button"
      type="button"
      buttontype={buttonType}
      {...otherProps}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;
