import { computed, ref, onMounted }  from 'vue'
import  pokemonApi  from '../api/pokemonApi'
import type { Pokemon }  from '../interfaces/pokemon'



// export const usePokemons = () =>    {

//     return  {
//         pokemons,
//         isLoading,
//         count: computed( () => {
//             return pokemons?.value?.length
//         })
//     }
// }