import Head from 'next/head'
import React, { FC } from 'react'
import { NavBar } from '../ui'

interface Props { // Search why is not accepting FC as the type of the React Node
    title?: string
    children: React.ReactNode
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name='author' content='Jaime Tuyuc' />
                <meta name='description' content='Pokemon info Charizard' />
                <meta name='keywords' content='charizard, pokemon, pokedex' />

                <meta property="og:title" content={`Information about ${title}`} />
                <meta property="og:description" content={`This is a page with content about ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <NavBar />
            <main
                className='contentContainer'    
            >
                {children}
            </main>
        </>
    )
}