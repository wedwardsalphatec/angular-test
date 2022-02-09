export interface Pokemon {
    id: number;
    num: string;
    name: string;
    img: string;
    type: string[];
    height: string;
    weight: string;
    weaknesses: string[];
    prev_evolution?: Evolution[];
    next_evolution?: Evolution[];
}

export interface Pokedex {
    pokemon: Pokemon[];
}

export interface Evolution {
    num: string;
    name: string
}