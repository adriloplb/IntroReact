import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClientsService } from '../services/ClientsService';
import { Client } from '../interfaces/Client';

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);

  const loadClients = async () => {
    try {
      const data = await ClientsService.getClients();
      setClients(data);
    } catch (error) {
      console.error('Error al cargar clientes:', error);
    }
  };

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Ver Clientes</h2>
      <Link to="/new-client" className="btn btn-primary mb-3">
        Nuevo Cliente
      </Link>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}