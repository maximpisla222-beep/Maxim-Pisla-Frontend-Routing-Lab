// Valorile rămân în engleză (cum le trimite API-ul); doar afișarea e în română.
export const categoryLabels = {
  electronics: "Electronice",
  jewelery: "Bijuterii",
  "men's clothing": "Îmbrăcăminte bărbați",
  "women's clothing": "Îmbrăcăminte femei",
};
export const labelFor = (c) => categoryLabels[c] || c;
