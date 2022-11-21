import * as yup from "yup";

const validations = yup.object().shape({
  email: yup
    .string()
    .email("enter a valid email")
    .required("email is a required field"),
  password: yup.string().min(5, "enter a valid password").required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
    .required(),
});

export default validations;
