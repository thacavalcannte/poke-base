import './CadastrarPokemons.css'

export default function CadastrarPokemons() {
    return (
        <>
        <main>
            <form>
                <div>
                    <label>Número:</label>
                    <input type="number" name="" id="" />
                </div>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label>Imagem:</label>
                    <input type="text" name="" id="" />
                </div>
                <div>
                    <label>Tipo 1</label>
                    <select name="" id="">
                        <option value="">Terra</option>
                        <option value="">Fogo</option>
                        <option value="">Ar</option>
                    </select>
                </div>
                <div>
                    <label>Ataque</label>
                    <input type="number"/>
                </div>
                <div>
                    <label>Defesa</label>
                    <input type="number"/>
                </div>
            </form>
        </main>        
        </>
    )
}