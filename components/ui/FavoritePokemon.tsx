import React, { FC } from 'react';
import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    id: number
}

export const FavoriteCard: FC<Props> = ({ id }) => {
    const router = useRouter()
    const onClickPokemom = () => {
        router.push(`/pokemon/${id}`)
    }

    return (
        <Grid
            xs={6}
            sm={2}
            xl={1}
            key={id}
            onClick={onClickPokemom}
        >
            <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt="Pokemon"
                    width={'100%'}
                    height={150}
                />
            </Card>
        </Grid>
    )
}