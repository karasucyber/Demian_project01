"use client"; 

export default function Home() {
  return (
    <>
      <main className="main-container">
        <div className="card">

          <h1>Site em Manutenção</h1>
          <p>Estamos trabalhando para melhorar nosso site. Voltaremos em breve!</p>
          <p>
            Enquanto isso, se precisar de ajuda ou tiver alguma dúvida, entre em
            contato conosco pelo WhatsApp.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5511945809260&text=Ol%C3%A1!%20Vim%20pelo%20site."
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </main>

      {/* A mágica acontece aqui!
        Usamos <style jsx> para adicionar o CSS diretamente no componente.
        Este CSS só se aplica a esta página, evitando conflitos.
      */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

        /* Estilos globais para a página */
        :global(body) {
          font-family: 'Roboto', sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          overflow: hidden;
        }

        .main-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }

        .card {
          padding: 40px;
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 90%;
          width: 500px;
        }

        h1 {
          color: #d9534f;
          margin-bottom: 20px;
        }

        p {
          font-size: 18px;
          line-height: 1.6;
        }

        .maintenance-icon {
          width: 80px;
          height: 80px;
          margin-bottom: 20px;
          color: #d9534f;
          animation: spin 3s linear infinite;
          transform-origin: center center;
        }

        /* Animação de giro */
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .whatsapp-button {
          display: inline-block;
          background-color: #25d366;
          color: #fff;
          padding: 15px 30px;
          text-decoration: none;
          border-radius: 5px;
          font-weight: bold;
          font-size: 16px;
          margin-top: 25px;
          transition: background-color 0.3s;
        }

        .whatsapp-button:hover {
          background-color: #128c7e;
        }
      `}</style>
    </>
  );
}