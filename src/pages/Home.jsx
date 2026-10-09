import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <h1>Lucruri de zi cu zi, fără complicații.</h1>
      <p>Haine, bijuterii și electronice într-un catalog mic.</p>
      <div className="row">
        <Link className="btn" to="/products">Vezi produsele</Link>
        <Link className="btn ghost" to="/products?category=electronics">Electronice</Link>
      </div>
    </section>
  );
}
