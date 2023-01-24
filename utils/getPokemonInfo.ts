import { pokeApi } from 'api';
import { PokemonFullResponse } from 'interfaces';

export const getPokemonInfo = async (nameOrId: string) => {

    try {
        const { data } = await pokeApi.get<PokemonFullResponse>(`/pokemon/${nameOrId}`)
    
        const pokemon = { 
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }
    
        return pokemon
        
    } catch (error) {
        return null
    }
}
