
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import './4-navlink.css';

const Portafolio = () => {
    const loggedIn = false;
    if (!loggedIn) {
        return <Navigate replace to="/"/>
    }

    return (
      <h1>Portafolio</h1>
    )
};

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
          <li>
            <NavLink end to="/portafolio">Portafolio</NavLink>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/perfil" element={<h1>Perfil</h1>}></Route>
          <Route path="/portafolio/*" element={<Portafolio />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
