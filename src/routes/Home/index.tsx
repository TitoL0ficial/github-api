import './styles.css';
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="section-container">
            <h2>Desafio Github API</h2>
            <h4>DevSuperior - Escola de programação</h4>
            <button className="start-button">Começar</button>
        </section>
      </main>
    </>
  );
}
