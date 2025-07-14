import "./styles.css";
import { useState } from "react";
import {Outlet, useNavigate } from "react-router-dom";

type FormData = {
  user: string;
};

export default function FindUser() {
  const [formData, setFormData] = useState<FormData>({
    user: "",
  });

  const navigate = useNavigate();

  function handleInputChange(event: any) {
    setFormData({ ...formData, user: event.target.value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();
    navigate(`/before/${formData.user}`);
  }

  return (
    <>
      <div className="card-container mt-40 mb-40">
        <h2>Encontre um perfil Github</h2>
        <form className="find-user-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="userName"
            value={formData.user}
            placeholder="Usuário Github"
            onChange={handleInputChange}
          />
          <button 
            type="submit"
            className="button-find"
          >
            Encontrar
          </button>
        </form>
      </div>
      <Outlet />
    </>
  );
}
