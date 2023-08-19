// Context
import { DataContextProvider } from "./Context/DataContext";

// React Router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Header from "./Components/Header";
import Sidenav from "./Components/Sidenav";

// Pages
import Resumo from "./Pages/Resumo";
import Vendas from "./Pages/Vendas";
import Venda from "./Pages/Venda";

// CSS
import "./Style.css";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
