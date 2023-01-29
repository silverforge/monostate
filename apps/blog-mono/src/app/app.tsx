import { NavBar } from '@monostate/components';
import styles from './app.module.css';
import { Link } from 'react-router-dom';

export function App() {
  return (
    <section id="blog-mono-app">
      <NavBar title='BLOG-MONO'>
        <div className={styles['menu']}>
          <Link className={styles['menu__item']} to="/">Home</Link>
          <Link className={styles['menu__item']} to="/">Edit</Link>
        </div>
      </NavBar>
    </section>
  );
}

export default App;
