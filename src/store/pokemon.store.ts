interface Store {
    //State
    pokemons: {
        list: Pokemon[];
        count: number;
        hasError: boolean;
        erroMessage?: string;
    },

    //Actions / Métodos
    startLoadingPokemons: () => void;
    loadedPokemons: (data: Pokemon[]) => void;
    loadPokemonsFailed: (error: string) => void;
}