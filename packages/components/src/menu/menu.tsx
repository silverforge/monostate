import { FC } from 'react';
import styles from './menu.module.css';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export type MenuItem = {
  id: string;
  path: string;
  label: string;
  onClick: () => void;
}

type MenuProps = {
  menuItems: MenuItem[];
  selectedMenuItem: string;
}

export const Menu: FC<MenuProps> = (props) => {
  return (
    <div className={styles['menu']}>
      {props.menuItems.map(mi => (
        <Link
          key={mi.id}
          className={classnames({
            [styles['menu__item']]: true,
            [styles['menu__item--selected']]: props.selectedMenuItem === mi.path,
          })}
          to={mi.path}
          onClick={mi.onClick}>
          {mi.label}
        </Link>
      ))}
    </div>
  );
}
