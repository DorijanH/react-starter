'use client';

// General imports
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'next/navigation';

// Components import
import Link from 'next/link';
import Image from 'next/image';
import LoadingContainer from '../../components/LoadingContainer/LoadingContainer';

// View models import
import PokemonDetailsViewModel from '../../view-models/PokemonDetailsViewModel';

// Helpers import
import { withViewModel } from '../../helpers/ComponentsHelper';

// Styles import
import styles from './PokemonDetailsView.module.scss';

/**
 * Function represents the view corresponding to the Pokemon details page.
 *
 * @param {Object} props Various component's props
 * @returns view's elements
 */
function PokemonDetailsView(props) {
  const { viewModel } = props;
  const {
    userAppModel,
    isLoading,
    pokemon,
    loadPokemon,
    onUnmount
  } = viewModel;
  const {
    user
  } = userAppModel;

  const params = useParams();

  useEffect(() => {
    if (params.pokemonId) {
      loadPokemon(params.pokemonId);
    }

    return onUnmount;
  }, [loadPokemon, onUnmount, params]);

  return (
    <LoadingContainer isLoading={isLoading}>
      {pokemon && (
        <div className={styles.container}>
          <div className={styles.imageWrapper}>
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={250}
              height={250}
            />
          </div>
          <span className={styles.name} data-testid="pokemon-name">
            {pokemon.name}
          </span>
          <div className={styles.data}>
            <div>
              <span className={styles.label}>
                Weight:
              </span>
              <span>
                {pokemon.weight}
              </span>
            </div>
            <div>
              <span className={styles.label}>
                Height:
              </span>
              <span>
                {pokemon.height}
              </span>
            </div>
            <div>
              <span className={styles.label}>
                Base experience:
              </span>
              <span>
                {pokemon.baseExperience}
              </span>
            </div>
          </div>
          <div className={styles.feedback}>
            {`What do you think about ${pokemon.name} `}
            <span className={styles.user} data-testid="pokemon-user-name">
              {`${user ? user.name : 'John Doe'}`}
            </span>
            ?
          </div>
          <Link
            href="/pokemons"
            className={styles.link}
            data-testid="pokemon-link"
          >
            Go back
          </Link>
        </div>
      )}
    </LoadingContainer>
  );
}

export default withViewModel(observer(PokemonDetailsView), PokemonDetailsViewModel);
