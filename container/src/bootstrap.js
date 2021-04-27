import { mount as mountProducts } from "products/ProductsIndex";
import "cart/CartShow";

console.log("Inside Container");
mountProducts(document.querySelector("#products-list"));
