const cart = [];

/*cargar al carro*/
const updateCart = (cart) => {
  let cartContainer = document.querySelector("#cart");
  let container = document.getElementById("cartContainer");
  if (container) {
    cartContainer.innerHTML = "";
  }
  for (const product of cart) {
    const div = document.createElement("div");
    div.setAttribute(
      "class",
      "card text-center col-xl-2 col-md-3 col-sm-4 col-8 m-3 "
    );
    div.setAttribute("id", "cartContainer");
    div.innerHTML += `
                    <div class="card-info">
                        <p class="text-title">${product.name} </p>
                        <p class="text-body">${product.brand}</p>
                        <p><strong>Cantidad: ${product.quantity}</strong></p>
                    </div>
                    <img class="image" src="${product.image}" onerror="this.src='./assets/images/remodelacion.jpg'" alt="Hubo un error">
                            
                            
                    <div class="card-footer ">
                        <span class="text-title">${product.price} ARS</span>
                        <div class="card-button" >
                        <i class="fa-regular fa-trash-can remove" data-id="${product.name}"></i>
                        </div>
                    </div>
                    `;

    cartContainer.appendChild(div);
  }

  const btnFinish = document.createElement("button");
  btnFinish.setAttribute("class", "btn-cart btn btn-secondary");
  btnFinish.setAttribute("id", "finish");
  btnFinish.innerText = "Finalizar compra";
  cartContainer.appendChild(btnFinish);
  btnFinish.addEventListener("click", () => borrandoCarrito());
};

const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const borrandoCarrito = () => {
  Swal.fire({
    icon: "success",
    title: "Compra realizada",
  });
  let cartContainer = document.querySelector("#cart");
  cartContainer.innerHTML = [];
  localStorage.removeItem("cart");
};

/* boton agregar*/
const buttons = document.getElementsByClassName("buttonCart");
const loadCart = () => {
  for (const button of buttons) {
    button.addEventListener("click", () => {
      let counter = cart.find((element) => element.name === button.id);
      if (counter) {
        counter.quantity++;
      } else {
        let product = products.find((element) => element.name === button.id);
        if (product) {
          let newProduct = {
            brand: product.brand,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity: 1,
          };
          cart.push(newProduct);
        }
      }
      saveInLocalStorage("cart", cart);
      updateCart(cart);
      Swal.fire({
        icon: "success",
        title: `Sumado al carro ${button.id}`,
      });
    });
  }
};

/* eliminar del carro*/
function remove(e) {
  let idProd = "";
  if (e.target.classList.contains("remove")) {
    idProd = e.target.getAttribute("data-id");
    idProd = cart.find((element) => element.name == idProd);
  }

  if (idProd.quantity === 1) {
    let product = cart.find((prod) => prod.name == idProd.name);
    let index = cart.indexOf(product);
    cart.splice(index, 1);
    updateCart(cart);
  } else if (idProd) {
    idProd.quantity--;
    updateCart(cart);
  }
  saveInLocalStorage("cart", cart);
}

/* save del storage para el json*/
function recoveryCart() {
  let cartRecovery = JSON.parse(localStorage.getItem("cart"));
  if (cartRecovery) {
    cartRecovery.forEach((product) => {
      cart.push(product);
    });
    updateCart(cart);
  }
}
recoveryCart();

let collection = document.querySelector(".cart");

collection.addEventListener("click", remove);

/*price total*/
const finalPriceCart = () => {
  const finalPrice = cart.reduce(
    (acc, products) => acc + products.price * products.quantity,
    0
  );
  return finalPrice;
};
