import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("Inside Container");
mountProducts(document.querySelector("#products-list"));
mountCart(document.querySelector("#my-cart"));
