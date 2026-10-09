import { NavLink, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <h1>Panou</h1>
      <div className="dash">
        <aside>
          <NavLink to="/dashboard" end>Prezentare generală</NavLink>
          <NavLink to="profile">Profil</NavLink>
          <NavLink to="settings">Setări</NavLink>
        </aside>
        <section><Outlet /></section>
      </div>
    </>
  );
}
