/*class*/
class Product {
  constructor(brand, name, image, price, quantity) {
    this.brand = brand;
    this.name = name;
    this.image = "https://i.ibb.co/x8kKtgc/gama-alta.png";
    this.price = price;
    this.quantity = 0;
  }
}

/* agregar stock*/
const addingProducts = () => {
  brand = brand.value.toUpperCase();
  pName = pName.value.toUpperCase();
  image = image.value;
  price = price.value;

  let newProduct = new Product(brand, pName, image, price);

  products.push(newProduct);
  loadProducts(products);
};

/* ingreso webmaster*/
const adminLogin = async () => {
  const admin = await Swal.fire({
    title: "Admin Login",
    html:
      '<input id="swal-input1" class="swal2-input" placeholder="Usuario" value="webmaster" required>' +
      '<input type="password" id="swal-input2" class="swal2-input" placeholder="Contraseña" value="qwe123rty" required>',
    focusConfirm: false,
    showCancelButton: true,
    preConfirm: () => {
      return [
        (user = document.getElementById("swal-input1").value),
        (pass = document.getElementById("swal-input2").value),
      ];
    },
  });

  const permitted = user === "webmaster" && pass === "qwe123rty";

  permitted
    ? vanishProducts()
    : Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Usuario o contraseña invalido",
        footer: '<a href="">Contactar al webmaster</a>',
      });
};

/*apareciendo formularios y producto*/
const vanishProducts = () => {
  if ((section2.style.display = "none")) {
    section2.style.display = "block";
    section1.style.display = "none";
  } else {
    section1.style.display = "none";
  }
};
const appearProducts = () => {
  if ((section1.style.display = "none")) {
    section1.style.display = "block";
    section2.style.display = "none";
  } else {
    section2.style.display = "none";
  }
};

addProducts.addEventListener("click", adminLogin);
allProducts.addEventListener("click", appearProducts);
/*agregado prodcuto*/
submit.addEventListener("click", () => {
  addingProducts(), Swal.fire("se subio al server");
});
