import { Routes, Route, NavLink, useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {
  const query = useQuery();
  const chancho = query.get('chanchito');
  const nombre = query.get('nombre');
  console.log(query, {chancho, nombre});
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink end to="/">
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink end to="/perfil">
              Perfil
            </NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="*" element={"404: Ruta no encontrada"}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
