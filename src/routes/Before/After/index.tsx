import "./styles.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as accountService from "../../../services/account-service";
import type { UserDTO } from "../../../models/user";

export default function After() {
  const params = useParams();

  const [account, setAccount] = useState<UserDTO>();

  const [conditions, setConditions] = useState({
    showResponse: false,
    noContent: false,
  });


  useEffect(() => {
   accountService.findByAccount(String(params.userLogin))
      .then(response => {
        setConditions({...conditions, noContent: false });
        setAccount(response.data);
    })
      .catch(() => setConditions({...conditions, noContent: true}));
  }, [params.userLogin]);


  return (
    conditions.noContent 
    ? <h3>Erro ao buscar usuário</h3>
    : 
    <section>
      <div className="info-card-container mb-40">
        <div className="user-info-container">
          <div>
            <img
              className="userImg"
              src={account?.avatar_url}
              alt="foto de perfil"
            />
          </div>
          <div className="card-info-user">
            <div>
              <h4>Informações</h4>
            </div>
            <div className="info-user">
              <h5>Perfil:&nbsp;</h5>
              <p>{account?.url}</p>
            </div>
            <div className="info-user">
              <h5>Seguidores:&nbsp;</h5>
              <p>{account?.followers}</p>
            </div>
            <div className="info-user">
              <h5>Localidade:&nbsp;</h5>
              <p>{account?.location}</p>
            </div>
            <div className="info-user">
              <h5>Nome:&nbsp;</h5>
              <p>{account?.name}</p>
            </div>
          </div>  
        </div>
      </div>
    </section>
  );
}