import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const MyCart = [];
const myWhishList = [];

console.log("Welcome to the your shopee Cart!");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

// Adicionando dois itens ao carrinho
await cartService.addItem(MyCart, item1);
await cartService.addItem(MyCart, item2);

await cartService.removeItem(MyCart, item2);
await cartService.removeItem(MyCart, item2);

await cartService.displayCart(MyCart);

// Deletando dois itens do carrinho
// await cartService.deleteItem(MyCart, item2.name);
// await cartService.deleteItem(MyCart, item1.name);

await cartService.calculateTotal(MyCart);