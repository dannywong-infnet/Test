import { useState } from "react";
import "./styles.css";
import LoginPage from "./pages/LoginPage";
import CadastroPage from "./pages/CadastroPage";
import DashboardPage from "./pages/DashboardPage";
import PerfilPage from "./pages/PerfilPage";
import NavBar from "./components/NavBar2.jsx";

export default function App() {
  const [page, setPage] = useState("DashboardPage");

  function alterPage(newPage) {
    setPage(newPage);
  }

  function renderPage() {
    switch (page) {
      case "LoginPage":
        return <LoginPage actionNavigate={alterPage} />;
      case "CadastroPage":
        return <CadastroPage actionNavigate={alterPage} />;
      case "DashboardPage":
        return <DashboardPage />;
      case "PerfilPage":
        return <PerfilPage />;
      default:
        return <DashboardPage />;
    }
  }

  return (
    <div className="App">
      <NavBar actionNavigate={alterPage} />
      {renderPage()}
      <footer>Mindcare 2025</footer>
    </div>
  );
}
