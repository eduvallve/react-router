
import { Routes, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink end to="/perfil">Perfil</NavLink>
          </li>

        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={'404: Ruta no encontrada'}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
