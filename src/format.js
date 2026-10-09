// API-ul dă prețurile în dolari; le convertim în lei moldovenești (MDL).
// Curs aproximativ la începutul lui octombrie 2026. Schimbă-l aici dacă vrei alt curs.
export const USD_TO_MDL = 17.87;

export function formatPrice(usd) {
  const mdl = usd * USD_TO_MDL;
  return mdl.toLocaleString("ro-MD", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " MDL";
}
