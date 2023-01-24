import React, { FC } from 'react'
import { SmallPokemon } from '../../interfaces/pokemon-list';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemon: SmallPokemon
}

const PokemonCard: FC<Props> = ({ pokemon }) => {

    const router = useRouter()

    const handleDetails = () => {
        router.push(`/name/${pokemon.name}`)
    }
    return (
        <>
            <Grid xs={6} sm={3} md={3} xl={4} key={pokemon.id}>
                <Card
                    hoverable
                    clickable
                    onClick={handleDetails}
                >
                    <Card.Body css={{ p: 1 }}>
                        <Card.Image
                            src={pokemon.img}
                            width='100%'
                            height={140}
                        />
                    </Card.Body>
                    <Card.Footer>
                        <Row justify='space-between'>
                            <Text transform='capitalize'>{pokemon.name}</Text>
                            <Text>#. {pokemon.id}</Text>
                        </Row>
                    </Card.Footer>
                </Card>
            </Grid>
        </>
    )
}

export default PokemonCard;