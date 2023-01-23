import React from 'react'
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image';
import NextLink from 'next/link';

export const NavBar = () => {
    const { theme } = useTheme(); 
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'start',
                padding: '0x 20px',
                backgroundColor: theme?.colors.gray900.value
            }}
        >
            <Image
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'}
                alt="App Icon"
                width={70}
                height={70}
            />
            <NextLink href={'/'} passHref>
                <Link>
                    <Text color='white' h2>P</Text>
                    <Text color='white' h3>okemon</Text>
                </Link>
            </NextLink>
            <Spacer css={{flex: 1}} />
            <NextLink href={'/favorites'}>
                <Link css={{ marginRight: '15px'}}>
                    <Text color='white'>Favoritos</Text>
                </Link>
            </NextLink>
        </div>
    )
}