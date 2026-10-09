import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getProducts } from "../api.js";
import { labelFor } from "../categories.js";
import { formatPrice } from "../format.js";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | error | ready

  const category = params.get("category") || "";
  const sort = params.get("sort") || "";
  const search = params.get("search") || "";

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    getProducts(controller.signal)
      .then((data) => { setProducts(data); setStatus("ready"); })
      .catch((err) => { if (err.name !== "AbortError") setStatus("error"); });
    return () => controller.abort();
  }, []);

  // Update one query param, remove it when empty
  function setParam(key, value) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next);
  }

  const categories = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);

  const visible = useMemo(() => {
    let list = products.filter(
      (p) =>
        (!category || p.category === category) &&
        p.title.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "price") list = [...list].sort((a, b) => a.price - b.price);
    return list;
  }, [products, category, sort, search]);

  return (
    <>
      <h1>Produse</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Caută produse"
          aria-label="Caută produse"
          value={search}
          onChange={(e) => setParam("search", e.target.value)}
        />
        <select aria-label="Categorie" value={category} onChange={(e) => setParam("category", e.target.value)}>
          <option value="">Toate categoriile</option>
          {categories.map((c) => <option key={c} value={c}>{labelFor(c)}</option>)}
        </select>
        <select aria-label="Sortare" value={sort} onChange={(e) => setParam("sort", e.target.value)}>
          <option value="">Ordine implicită</option>
          <option value="price">Preț: crescător</option>
        </select>
      </div>

      {status === "loading" && <p className="state">Se încarcă...</p>}
      {status === "error" && <p className="state error">Nu s-au putut încărca produsele.</p>}
      {status === "ready" && visible.length === 0 && <p className="state">Niciun produs nu corespunde filtrelor.</p>}

      <div className="grid">
        {status === "ready" && visible.map((p) => (
          <article className="card" key={p.id}>
            <div className="thumb"><img src={p.image} alt={p.title} loading="lazy" /></div>
            <h2>{p.title}</h2>
            <p className="price">{formatPrice(p.price)}</p>
            <Link className="btn small" to={`/products/${p.id}`}>Vezi detalii</Link>
          </article>
        ))}
      </div>
    </>
  );
}
