import { ro } from "./translations.js";

const BASE = "https://fakestoreapi.com/products";

async function get(url, signal) {
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// Păstrăm datele din API, dar înlocuim titlul și descrierea cu variante în română.
const toRo = (p) => (p && p.id ? { ...p, ...ro[p.id] } : p);

export const getProducts = async (signal) => (await get(BASE, signal)).map(toRo);
export const getProduct = async (id, signal) => toRo(await get(`${BASE}/${id}`, signal));
