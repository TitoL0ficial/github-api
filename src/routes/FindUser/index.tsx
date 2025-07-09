import './styles.css';
import FindCard from "../../components/FindCard";
import Header from "../../components/Header";

export default function FindUser() {
  return (
    <>
      <Header />
      <main>
        <section className="find-user-section">
          <FindCard text="Encontrar"/>
        </section>
      </main>
    </>
  );
}
