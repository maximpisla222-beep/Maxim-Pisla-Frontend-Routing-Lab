import { Routes, Route, NavLink, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import About from "./pages/About.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { Profile, Settings } from "./pages/DashboardPages.jsx";

function Layout() {
  return (
    <>
      <header className="nav">
        <Link to="/" className="brand"><img src="/logo.svg" alt="" width="34" height="34" />Mini Store</Link>
        <nav>
          <NavLink to="/" end>Acasă</NavLink>
          <NavLink to="/products">Produse</NavLink>
          <NavLink to="/about">Despre</NavLink>
          <NavLink to="/dashboard">Panou</NavLink>
        </nav>
      </header>
      <main className="page"><Outlet /></main>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />

        {/* Challenge: nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<p>Alege o secțiune din meniu.</p>} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
