import { FC, PropsWithChildren } from 'react';
import styles from './navbar.module.css';

export type NavbarProps = PropsWithChildren<{
  title: string;
}>;

export const NavBar: FC<NavbarProps> = (props) => {
  return (
    <div className={styles['container']}>
      <span className={styles['container__logo']}>{props.title}</span>
      <div className={styles['container__children']}>{props.children}</div>
    </div>
  );
}
