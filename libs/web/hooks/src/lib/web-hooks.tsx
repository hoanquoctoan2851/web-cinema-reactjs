import styles from './web-hooks.module.css';

/* eslint-disable-next-line */
export interface WebHooksProps {}

export function WebHooks(props: WebHooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebHooks!</h1>
    </div>
  );
}

export default WebHooks;
