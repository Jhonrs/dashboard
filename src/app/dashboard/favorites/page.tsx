import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: "Favoritos",
  description: "Ad minim sit cupidatat culpa consectetur",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons favoritos <small>Global state</small>
    </span>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
