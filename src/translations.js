// Titlurile și descrierile din API sunt în engleză, deci le înlocuim cu variante în română.
// id-ul, prețul, categoria, imaginea și evaluarea rămân cele din API.
const rows = [
  [1, "Rucsac Fjallraven Foldsack Nr. 1, pentru laptop de 15\"", "Rucsac de zi cu zi, cu compartiment căptușit pentru laptop de până la 15 inchi."],
  [2, "Tricou bărbătesc casual premium, croială slim", "Tricou din bumbac moale, cu mânecă scurtă și croială mulată, pentru ținute de zi cu zi."],
  [3, "Jachetă bărbătească din bumbac", "Jachetă călduroasă pentru primăvară și toamnă, potrivită pentru muncă, drumeții sau ieșiri."],
  [4, "Cămașă bărbătească casual, croială slim", "Cămașă cu croială mulată și guler clasic, ușor de purtat atât la birou, cât și în timpul liber."],
  [5, "Brățară John Hardy Legends Naga pentru femei", "Brățară din aur și argint cu lanț și model de dragon, închidere cu cârlig."],
  [6, "Inel Petite Micropavé din aur", "Inel delicat din aur, cu pietre mici așezate în rând, ideal ca cadou."],
  [7, "Inel Princess placat cu aur alb", "Inel placat cu aur alb și piatră centrală tăiată în formă de prințesă."],
  [8, "Cercei tip tunel cu bufniță, din oțel inoxidabil", "Cercei din oțel inoxidabil placat cu aur roz, cu model de bufniță."],
  [9, "Hard disk extern portabil WD Elements, 2 TB", "Hard disk portabil cu USB 3.0, pentru copii de siguranță și transfer rapid de fișiere."],
  [10, "SSD intern SanDisk SSD PLUS, 1 TB", "SSD cu interfață SATA III, pornește calculatorul și programele mai repede."],
  [11, "SSD Silicon Power, 256 GB", "SSD de 2,5 inchi, memorie 3D NAND și cache SLC pentru viteză sporită."],
  [12, "Hard disk extern WD pentru gaming, 4 TB", "Hard disk portabil de 4 TB, compatibil cu PlayStation 4, pentru mai multe jocuri."],
  [13, "Monitor Acer SB220Q, 21,5\" Full HD IPS", "Monitor ultra-subțire cu rezoluție 1920 x 1080 și panou IPS cu unghiuri largi de vizualizare."],
  [14, "Monitor gaming curbat Samsung CHG90, 49\"", "Monitor ultra-lat curbat, cu 144 Hz, pentru jocuri imersive și multitasking."],
  [15, "Geacă de iarnă 3-în-1 pentru femei, pentru snowboard", "Geacă cu strat interior detașabil, glugă și buzunare, pentru zile geroase."],
  [16, "Jachetă biker din piele ecologică pentru femei", "Jachetă în stil motociclist, cu glugă detașabilă și închidere cu fermoar."],
  [17, "Geacă de ploaie pentru femei, cu dungi", "Geacă ușoară, rezistentă la vânt și ploaie, bună pentru drumeții și alpinism."],
  [18, "Tricou damă cu mânecă scurtă și decolteu în V", "Tricou comod, cu decolteu în V pe barcă, pentru purtat în fiecare zi."],
  [19, "Tricou damă cu mânecă scurtă, anti-transpirație", "Tricou ușor, care elimină umezeala, pentru sport și zile calde."],
  [20, "Tricou damă din bumbac, mânecă scurtă", "Tricou casual din bumbac, cu croială lejeră și mânecă scurtă."],
];
export const ro = Object.fromEntries(rows.map(([id, title, description]) => [id, { title, description }]));
