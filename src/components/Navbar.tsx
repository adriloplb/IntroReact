import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/clients">AppClients</Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/clients">Ver clientes</Link>
        <Link className="nav-link" to="/new-client">Añadir clientes</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
    </nav>
  );
}