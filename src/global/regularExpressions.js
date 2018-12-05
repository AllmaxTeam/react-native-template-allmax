// @flow

export const regularExpressions = {
  numbers: /[^\d]/g, // For remove not numbers
  email: /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})$/, // Mask for check email
};
