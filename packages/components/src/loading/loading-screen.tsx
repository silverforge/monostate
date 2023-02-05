import styles from './loading-screen.module.css';

export const LoadingScreen = () => {
  return (
    <div className={styles['loading-screen__container']}>
      <div className={styles['loading-screen__box']}>
        LOADING...
      </div>
    </div>
  );
}
