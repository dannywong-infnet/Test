import DashboardPage from "../pages/DashboardPage";
import PerfilPage from "../pages/PerfilPage";

export default function NavBar({ actionNavigate }) {
  return (
    <>
      <nav>
        <a href="#" onClick={() => actionNavigate("DashboardPage")}>
          Dashboard
        </a>
        <a href="#" onClick={() => actionNavigate("LoginPage")}>
          Login
        </a>
        <a href="#" onClick={() => actionNavigate("PerfilPage")}>
          Perfil
        </a>
      </nav>
    </>
  );
}
