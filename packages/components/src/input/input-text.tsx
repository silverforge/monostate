import styles from "./input-text.module.css";
import { FC } from "react";

export type InputTextProps = {
  text: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const InputText: FC<InputTextProps> = ({ text, value, onValueChange }) => {
  return (
    <div className={styles['input-container']}>
      <span>{text}</span>
      <input className={styles['blog-input']} type="text" value={value} onChange={(e) => onValueChange(e.target.value)} />
    </div>
  );
}
