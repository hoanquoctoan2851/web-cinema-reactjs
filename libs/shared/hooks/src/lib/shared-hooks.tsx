import styles from './shared-hooks.module.css';

/* eslint-disable-next-line */
export interface SharedHooksProps {}

export function SharedHooks(props: SharedHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedHooks!</h1>
    </div>
  );
}

export default SharedHooks;
