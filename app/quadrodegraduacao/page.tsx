"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.replace("https://evo-totem.w12app.com.br/demianmaia/1/page/landing-page/agenda");
  }, []);

  return (
    <>
      <main className="main-container">
        <div className="card">
          <h1>Redirecionando...</h1>
          <p>Aguarde enquanto levamos você para a página de agendamento.</p>
        </div>
      </main>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

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
      `}</style>
    </>
  );
}