function buy(name,price){

let uid = prompt("Enter Player UID:");

if(!uid)return;

let order = {
id: Date.now(),
package:name,
price:price,
uid:uid
};

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push(order);

localStorage.setItem("orders",JSON.stringify(orders));

alert("Order Success!");

}
