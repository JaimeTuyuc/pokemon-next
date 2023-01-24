import { FC } from 'react';
import { Grid } from '@nextui-org/react'
import React from 'react'
import { FavoriteCard } from './FavoritePokemon';

interface Props {
    pokemonsList: number[]
}

export const FavoriteList: FC<Props> = ({ pokemonsList }) => {

    return (

        <Grid.Container
            gap={2}
            direction='row'
            justify='flex-start'
        >
            {
                pokemonsList.map((id) => ((
                    <FavoriteCard id={id} key={id} />
                )))
            }
        </Grid.Container>
    )
}