import { reactive } from 'vue'

interface Store {
    //State
    pokemons: {
        list: Pokemon[];
        count: number;
        hasError: boolean;
        erroMessage?: string;
    },

    //Actions / Métodos
    startLoadingPokemons: () => Promise<void>;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (error: string) => void;
}

const store = reactive<Store>({
    pokemons: {
        list: [],
        count: 0,
        isLoading: false,
        hasError: false,
        errorMessage: undefined
    },
    startLoadingPokemons: async function (): Promise<void> {
       this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            hasError: false,
            erroMessage: undefined,
       }
    },
    loadedPokemons: function (data: Pokemon[]): void {
        this.pokemons = {
            list: data,
            count: data.length,
            isLoading: false,
            hasError: false,
            erroMessage: undefined
        }
    },
    loadPokemonsFailed: function (error: string): void {
        this.pokemons = {
            ...this.pokemons,
            isLoading: false,
            hasError: true,
            erroMessage: error
        }
    }
});

store.startLoadingPokemons();

export default store;