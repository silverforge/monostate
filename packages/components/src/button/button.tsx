import { FC } from "react";

import styles from './button.module.css';

export type ButtonProps = {
  text: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles['blog-button']} type="button" onClick={onClick}>{text}</button>
  );
}