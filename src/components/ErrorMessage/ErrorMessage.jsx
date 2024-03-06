import css from "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => {
  return <p className={css.ErrorMessage}>{message}</p>;
};
export default ErrorMessage;
