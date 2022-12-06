import styles from './web-utils.module.scss';

/* eslint-disable-next-line */
export interface WebUtilsProps {}

export function WebUtils(props: WebUtilsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUtils!</h1>
    </div>
  );
}

export default WebUtils;
