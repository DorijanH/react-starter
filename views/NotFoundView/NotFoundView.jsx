// Styles import
import styles from './NotFoundView.module.scss';

/**
 * Function represents the view corresponding to the 404 page.
 *
 * @returns views's elements
 */
export default function NotFoundView() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-testid="heading">
        404
      </h1>
      <h2 className={styles.subtitle}>
        Just like Pokemons, this page doesn't exist
      </h2>
    </div>
  );
}
