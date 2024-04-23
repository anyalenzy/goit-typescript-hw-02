import { FC } from "react";
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <p className={css.ErrorMessage}>{message}</p>;
};
export default ErrorMessage;
