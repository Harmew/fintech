import React from "react";

// Components
import DateRange from "./DateRange";
import Meses from "./Meses";

// React Router
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState<string>("Resumo");
  const location = useLocation();

  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("Resumo");
        document.title = "Resumo | Fintech";
        break;
      case "/vendas":
        setTitle("Vendas");
        document.title = "Vendas | Fintech";
        break;
      default:
        setTitle("Resumo");
        document.title = "Resumo | Fintech";
        break;
    }
  }, [location.pathname]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
