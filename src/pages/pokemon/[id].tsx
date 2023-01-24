import React, { useState } from 'react'
import { Layout } from 'components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { PokemonFullResponse } from 'interfaces';
import { pokeApi } from 'api';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { localFavorites } from 'utils';
import confetti from 'canvas-confetti'
import { getPokemonInfo } from '../../../utils/getPokemonInfo';

interface Props {
    pokemon: PokemonFullResponse
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
    const [ isInFavorite, setIsInFavorite ] = useState<boolean>(localFavorites.existInFavorites(pokemon.id))
    const onToggleFavorite = () => {
        localFavorites.toggleFavorites(pokemon.id)
        setIsInFavorite(!isInFavorite)

        if (!isInFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 150,
                spread: 100,
                angle: -150,
                origin: {
                    x: 1,
                    y: 0
                }
            })
        }
    }

    return (
        <>
            <Layout
                title={pokemon.name}
            >
                <Grid.Container css={{ marginTop: '10px'}} gap={2}>
                    <Grid xs={12} sm={4}>
                        <Card hoverable css={{ padding: '30px'}}>
                            <Card.Body>
                                <Card.Image
                                    src={pokemon.sprites.other?.dream_world.front_default || 'defaultimg.png'}
                                    alt={pokemon.name}
                                    width={'100%'}
                                    height={200}
                                />
                            </Card.Body>
                        </Card>
                    </Grid>

                    <Grid xs={12} sm={8}>
                        <Card>
                            <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Text h1>{pokemon.name}</Text>
                                
                                <Button
                                    color={isInFavorite ? 'gradient' : 'primary'}
                                    ghost
                                    onClick={onToggleFavorite}
                                >{ isInFavorite ? 'Remove from favorites' : 'Save to Favorites' }</Button>
                            </Card.Header>

                            <Card.Body>
                                <Text size={30}>Sprites:</Text>

                                <Container justify='space-between' display='flex' direction='row'>
                                    <Image
                                        src={pokemon.sprites.front_default}
                                        width={100}
                                        height={100}
                                        alt={pokemon.name}
                                    />
                                    <Image
                                        src={pokemon.sprites.back_default}
                                        width={100}
                                        height={100}
                                        alt={pokemon.name}
                                    />
                                    <Image
                                        src={pokemon.sprites.front_shiny}
                                        width={100}
                                        height={100}
                                        alt={pokemon.name}
                                    />
                                    <Image
                                        src={pokemon.sprites.back_shiny}
                                        width={100}
                                        height={100}
                                        alt={pokemon.name}
                                    />
                                </Container>
                            </Card.Body>
                        </Card>
                    </Grid>

                </Grid.Container>

                <>
                </>
            </Layout>
        </>
    )
}

export default PokemonPage;

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((va, idx) => `${idx + 1}`)

    return {
        paths: pokemons151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { id } = params as { id: string }
    const pokemon = await getPokemonInfo(id)

    return {
        props: { 
            pokemon: pokemon
        }
    }
}
