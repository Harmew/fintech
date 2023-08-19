// React Router
import { NavLink } from "react-router-dom";

// Assets
import resumo from "../Assets/icons/resumo.svg";
import vendas from "../Assets/icons/vendas.svg";
import configuracoes from "../Assets/icons/configuracoes.svg";
import contato from "../Assets/icons/contato.svg";
import webhooks from "../Assets/icons/webhooks.svg";
import sair from "../Assets/icons/sair.svg";

// SVG
import FintechSVG from "../Assets/FintechSVG";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a href="#">WebHooks</a>
        </li>
        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a href="#">Configurações</a>
        </li>
        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a href="#">Contato</a>
        </li>
        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a href="#">Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
