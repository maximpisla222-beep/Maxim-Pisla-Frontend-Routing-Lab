import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="hero">
      <h1>404</h1>
      <p>Pagina nu există.</p>
      <Link className="btn" to="/">Acasă</Link>
    </section>
  );
}
