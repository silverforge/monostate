import { FC, PropsWithChildren } from 'react';
import styles from './navbar.module.css';

export type NavbarProps = PropsWithChildren<{
  title: string;
}>;

export const NavBar: FC<NavbarProps> = (props) => {
  return (
    <div className={styles['container']}>
      <span>{props.title}</span>
      {props.children}
    </div>
  );
}
