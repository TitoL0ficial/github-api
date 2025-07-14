import './styles.css';
import FindUser from '../../components/FindUser';

export default function Before() {
  return (
    <>
      <main>
        <section className="git-container">
          <FindUser />
        </section>
      </main>
    </>
  );
}
