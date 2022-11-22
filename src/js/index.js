class Film {
  constructor(titulo, autor, director, fecha) {
    this.titulo = titulo;
    this.autor = autor;
    this.director = director;
    this.fecha = fecha;
  }
}

// Una variable que contenga la lista de la compra (mínimo 5 elementos)
let shopList = ["bread", "eggs", "milk", "water", "potatoes"];

// Modifica la lista de la compra y añádele "Aceite de Girasol"
shopList.push("Aceite de Girasol");
console.log(shopList);

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
shopList.pop();
console.log(shopList);

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
let GranTorino = new Film(
  "Gran Torino",
  "Dave Johannson",
  "Clint Eastwood",
  new Date(2008, 5, 11)
);

let Gladiator = new Film(
  "Gladiator",
  "Ridley Scott",
  "Ridley Scott",
  new Date(2011, 4, 17)
);

let KindomOfHeaven = new Film(
  "Kingdom of heaven",
  "Ridley Scott",
  "Ridley Scott",
  new Date(2010, 4, 5)
);

let listFav = [GranTorino, Gladiator, KindomOfHeaven];
console.log(listFav);

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let dateFilter = new Date(2010, 0, 1);
let listFav2 = listFav.filter((elem) => elem.fecha >= dateFilter);
console.log(listFav2);

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directors = listFav.map((elem) => elem.director);
console.log(`Directors: ${directors}`);

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titles = listFav.map((elem) => elem.titulo);
console.log(`Titulos: ${titles}`);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directors_titles = directors.concat(titles);
console.log(`Directores y titulos: ${directors_titles}`);

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let prop_directors_titles = [...directors, ...titles];
console.log(`Directores y titulos prop: ${prop_directors_titles}`);
