import { FC } from 'react';
import styles from './input-text-area.module.css';

export type InputTextAreaProps = {
  text: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const InputTextArea: FC<InputTextAreaProps> = ({ text, value, onValueChange }) => {

  return (
    <div className={styles['input-container']}>
      <span>{text}</span>
      <textarea className={styles['blog-input-textarea']} value={value} onChange={(e) => onValueChange(e.target.value)} />
    </div>
  );
}
