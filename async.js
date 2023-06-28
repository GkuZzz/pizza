// console.log('start');
// setTimeout(function(){
//     console.log('process')
// }, 2000);
// console.log('finish');

//promice

// function cookBurger(ingr) {
//   const burgerPromise = new Promise(function (resolve, reject) {
//     //Бургер готов
//     resolve(`ваш бургер - ${ingr.join(" ")}`);

//     // Бургер сгорел
//     // reject();
//   });

//   return burgerPromise;
// }

// const cheeseburger = cookBurger(["beef", "cheese"]);
// const chickenbirger = cookBurger(["chicken", "cheese", "tomato"]);

// console.log(cheeseburger);
// console.log(chickenbirger);

// cheeseburger.then(function (burger) {
//   console.log("uraaaa", burger);
// });

// chickenbirger.then(function (burger) {
//   console.log("uraaaa", burger);
// });



// async function getData(){
//     try {  const response = await fetch('https://github.com/users/GkuZzz');
//     const data = await response.json();
//     console.log(data);
// } catch(err) {
//     console.log('error >>>>', err)
// }
  
// }

