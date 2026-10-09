import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProduct } from "../api.js";
import { labelFor } from "../categories.js";
import { formatPrice } from "../format.js";

export default function ProductDetails() {
  const { id } = useParams(); // route parameter from /products/:id
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    setStatus("loading");
    getProduct(id, controller.signal)
      .then((data) => {
        // fakestoreapi returns an empty body for unknown ids
        if (!data || !data.id) throw new Error("Not found");
        setProduct(data);
        setStatus("ready");
      })
      .catch((err) => { if (err.name !== "AbortError") setStatus("error"); });
    return () => controller.abort();
  }, [id]);

  return (
    <>
      <Link to="/products" className="back">Înapoi la produse</Link>

      {status === "loading" && <p className="state">Se încarcă...</p>}
      {status === "error" && <p className="state error">Nu s-a putut încărca produsul.</p>}

      {status === "ready" && (
        <section className="details">
          <div className="thumb big"><img src={product.image} alt={product.title} /></div>
          <div>
            <p className="muted">Detaliile produsului...</p>
            <h1>{product.title}</h1>
            <p className="price">{formatPrice(product.price)}</p>
            <p className="muted">{labelFor(product.category)}</p>
            <p>{product.description}</p>
            {product.rating && (
              <p className="muted">Evaluare {product.rating.rate} din {product.rating.count} recenzii</p>
            )}
          </div>
        </section>
      )}
    </>
  );
}
