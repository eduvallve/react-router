import { Routes, Route, Link, useParams } from "react-router-dom";

const Proyecto = (props) => {
  const match = useParams();
  const { proyecto_id } = match;
  return <h2>Proyecto { proyecto_id }</h2>;
};

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={"proyecto-1"}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={"proyecto-2"}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Routes>
          <Route path={":proyecto_id"} element={<Proyecto />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>}></Route>
          <Route path="/portafolio/*" element={<Portafolio />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
