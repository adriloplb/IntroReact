export default function AboutPage() {
  return (
    <div className="container mt-4">
      <h2>About - Proyecto AppClients</h2>
      <p>
        Aplicación web multiplataforma desarrollada con <strong>Ionic React</strong>,{' '}
        <strong>TypeScript</strong> y <strong>Bootstrap</strong>, conectada a una base de datos{' '}
        <strong>PostgreSQL</strong> en <strong>Supabase</strong> para gestionar altas y consultas de clientes.
      </p>

      <div className="my-4">
        <h4>Imagen del proyecto (.webp)</h4>
        <img
          src="/imagen.webp"
          alt="Imagen descriptiva del proyecto"
          className="img-fluid rounded shadow"
          style={{ maxWidth: '480px' }}
        />
      </div>

      <div className="my-4">
        <h4>Vídeo explicativo</h4>
        <div className="ratio ratio-16x9" style={{ maxWidth: '640px' }}>
          <iframe
            src="https://youtu.be/G24aRVSYVzM?si=qsy_Gqofh69BhHSQ"
            title="STEAK and MAC & CHEESE Pie over the Camp Fire | Deep Forest Cooking"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}