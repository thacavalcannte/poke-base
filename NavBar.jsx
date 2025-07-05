import { Link } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
    return (
        <header>
            <h4>Pokedex</h4>

            <nav>
                <Link to='/poke-fire'>Listar</Link>
                <Link to='/cadastrar-pokemons'>Cadastrar</Link>

            </nav>
        </header>
    )
}