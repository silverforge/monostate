import { FC } from 'react';
import styles from './input-text-area.module.css';
import classnames from 'classnames';

export type InputTextAreaProps = {
  text: string;
  value: string;
  onValueChange: (value: string) => void;
  fixed?: boolean;
}

export const InputTextArea: FC<InputTextAreaProps> = ({ text, value, onValueChange, fixed }) => {

  return (
    <div className={styles['input-container']}>
      <span>{text}</span>
      <textarea
        className={classnames({
          [styles['blog-input-textarea']]: true,
          [styles['fixed']]: fixed,
        })}
        value={value}
        onChange={(e) => onValueChange(e.target.value)} />
    </div>
  );
}
