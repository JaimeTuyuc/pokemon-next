import React, { useEffect, useState } from 'react';
import { Layout } from '../../../components/layouts/Layout';
import { FavoriteList, NoFavorites } from '../../../components/ui';
import { localFavorites } from 'utils';

const Favorites = () => {

    const [ favoritesPokemons, setFavoritesPokemons ] = useState<number[]>([])

    useEffect(() => {
        const pokemons = localFavorites.pokemons()
        setFavoritesPokemons(pokemons)
    }, [])

    return (
        <Layout
            title='Favorites'
        >
            {
                favoritesPokemons.length <= 0 && 
                <NoFavorites url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg' title='No favorites Yet' />
            }

            <FavoriteList pokemonsList={favoritesPokemons} />
        </Layout>
    )
}

export default Favorites