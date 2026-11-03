
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Conteudo from './pages/Conteudo.jsx';
import Sobre from './pages/Sobre.jsx';




function App() {
    const [pagina, setPagina] = useState("inicio");
    return (
        <div>
            <header>
                <h1>Exemplo Single Page Application (SPA)</h1>

                <nav aria-label='Navegação Principal'>
                    <Link to="/">Inicio</Link>
                    <Link to="/conteudo">Conteudo</Link>
                    <Link to="/sobre">Sobre</Link>
                </nav>

            </header>
            <main>
               <Routes>
                <Route path="/" element={<Home/>} > </Route>
                <Route path="/conteudo" element={<Conteudo />}/>
                <Route path="/sobre" element={<Sobre/>}/>

               </Routes>
            </main>
        </div>
    );
}

export default App;