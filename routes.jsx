
import { Route, Routes } from "react-router-dom";
import ListarPokemons from "./pages/ListarPokemons/ListarPokemons";
import DetalhesPokemon from "./pages/DetalhesPokemon/DetalhesPokemon";
import CadastrarPokemons from "./pages/CadastrarPokemons/CadastrarPokemons";


export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/poke-fire" element ={<ListarPokemons />} />
            <Route path="/detalhes-pokemon" element = {<DetalhesPokemon />} />
            <Route path="/cadastrar-pokemons" element = {<CadastrarPokemons />} />
        </Routes>
    )
} 