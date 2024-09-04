import { mobileNumberRegex } from "./regex"; // Ensure this is the correct regex import

export const mobileValidations = (value) => {
  let error = ""; // Use `let` to declare the error variable
  const mobileRegex = /^[6-9][0-9]{9}$/; // Ensure this regex is the correct pattern

  if (!value) {
    error = "Please enter your mobile number";
  } else if (!mobileRegex.test(value)) { // Using the correct regex here
    error = "Enter a valid mobile number";
  }

  return error;
};
