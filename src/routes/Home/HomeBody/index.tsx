import './styles.css';
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";

export default function HomeBody() {
  return (
    <main>
      <section className="section-container">
        <div>
          <h2>Desafio Github API</h2>
          <h4>DevSuperior - Escola de programação</h4>
        </div>
        <div>
          <NavLink to="/before">
            <Button text="Começar" />
          </NavLink>
        </div>
      </section>
    </main>
  );
}
