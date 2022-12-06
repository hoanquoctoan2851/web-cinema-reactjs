import styles from './shared-modules.module.scss';

/* eslint-disable-next-line */
export interface SharedModulesProps {}

export function SharedModules(props: SharedModulesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedModules!</h1>
    </div>
  );
}

export default SharedModules;
