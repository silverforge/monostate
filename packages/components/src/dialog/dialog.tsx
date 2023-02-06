import { FC, PropsWithChildren } from "react"

import styles from './dialog.module.css';

export type DialogProps = PropsWithChildren<{
  isOpen: boolean;
}>;

export const Dialog: FC<DialogProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles['dialog__container']}>
      {children}
    </div>
  );
}