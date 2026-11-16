import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientsService } from '../services/ClientsService';
import { Client } from '../interfaces/Client';

export default function NewClientPage() {
  const navigate = useNavigate();
  const [client, setClient] = useState<Client>({
    name: '',
    email: '',
    phone: ''
  });

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await ClientsService.addClient(client);
      navigate('/clients');
    } catch (error) {
      console.error('Error al insertar cliente:', error);
      alert('No se pudo guardar el cliente');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Añadir Cliente</h2>
      <form onSubmit={save}>
        <input
          className="form-control mb-2"
          placeholder="Nombre"
          required
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
        />
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          required
          value={client.email}
          onChange={(e) => setClient({ ...client, email: e.target.value })}
        />
        <input
          className="form-control mb-3"
          placeholder="Teléfono"
          required
          value={client.phone}
          onChange={(e) => setClient({ ...client, phone: e.target.value })}
        />
        <button type="submit" className="btn btn-success">
          Guardar
        </button>
      </form>
    </div>
  );
}