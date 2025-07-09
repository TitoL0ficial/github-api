import './styles.css';
import Header from "../../components/Header";
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="section-container">
            <h2>Desafio Github API</h2>
            <h4>DevSuperior - Escola de programação</h4>
            <NavLink to="/find">
              <button className="start-button">Começar</button>
            </NavLink>
        </section>
      </main>
      <Outlet/>
    </>
  );
}
