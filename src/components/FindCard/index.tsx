import './styles.css';

type Props = {
  text: string;
}

export default function FindCard( {text} : Props ) {
  return (
    <div className="card-container git-container">
      <h2>Encontre um perfil Github</h2>
      <form className="find-user-form">
        <input 
        type="text" 
        placeholder="Usuário Github"
        />
      </form>
      <button className="start-button">{text}</button>
    </div>
  );
}
