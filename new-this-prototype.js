// const curDate = new Date('31 March, 2022');

// console.log(curDate);

// function Pizza(){
//     console.log('Пицца')
// };

// const salamami = new Pizza();

// function cookPizza() {
//     console.log('cook pizza > ', this)
// }

// const pizza ={
//     name: 'Salami',
//     cook: cookPizza
// }

function Pizza(ingr, price) {
  this.ingredients = ingr;
  this.price = price;
  this.id = Date.now();

  this.quantity = 10;

  //     this.sell = function() {

  //         if(this.quantity > 0) {
  //             console.log('sell')
  //             this.quantity = this.quantity - 1;
  //             return this.quantity
  //         } else {
  //             console.log('пицца закончилась')
  //         }

  //     }
}

Pizza.prototype.sell = function () {
  if (this.quantity > 0) {
    console.log("sell");
    this.quantity = this.quantity - 1;
    return this.quantity;
  } else {
    console.log("пицца закончилась");
  }
};

const salamami = new Pizza(["salami", "tomatos"], 300);
const cheese = new Pizza(["cheese", "avocado"], 500);

// console.log(salamami);
// console.log(cheese)
