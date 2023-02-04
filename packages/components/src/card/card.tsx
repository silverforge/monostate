import { FC, PropsWithChildren } from "react"
import styles from './card.module.css';

export type CardProps = PropsWithChildren;

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className={styles['card']}>
      {children}
    </div>
  );
}