import React, { FC } from 'react'
import { Container, Image, Text } from '@nextui-org/react'

interface Props {
    url: string
    title: string
}

export const NoFavorites: FC<Props> = ({url, title}) => {
    return (
        <>
            <Container
                css={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'calc(100vh - 100px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'
                }}
            >
                <Text h1>{ title }</Text>

                <Image
                    src={url}
                    alt="Pokemon Page"
                    width={250}
                    height={250}
                    css={{
                        opacity: 0.8
                    }}
                />
            </Container>
        </>
    )
}