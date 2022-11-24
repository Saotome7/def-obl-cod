/* llamadas a productos html*/
const filter = document.querySelector("#filter"); //Filtro
const result = document.querySelector("#result"); //resultado
const filtered = document.getElementsByName("filtered"); //Menor precio / Mayor precio
const select = document.querySelector("#filteredPrice"); //select
const container = document.querySelector("#container"); //Contenedor de cards
const btnCart = document.querySelector("#btnCart"); //Contenedor de productos
const addProducts = document.querySelector("#addingProducts"); //Agregando productos
const allProducts = document.querySelector("#productos"); //aparezcan los productos una vez cargado uno nuevo

/* llamadas admin productos*/
let brand = document.querySelector("#brandNewProduct");
let pName = document.querySelector("#nameNewProduct");
let image = document.querySelector("#imageNewProduct");
let price = document.querySelector("#priceNewProduct");
const submit = document.querySelector("#submitNewProduct");

/* llamadas secciones*/
const section1 = document.querySelector("#products");
const section2 = document.querySelector("#form");

/* llamada json*/
const URL = "./json/products.json";
