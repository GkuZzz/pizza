// const fruits = ['apple', 'orange', 'banana', 'kiwi', 'lemon', 'apple', 'banana'];



// fruits.forEach((item, i, arr) => {
//   console.log(`Fruit ${item} has index ${i} in array ${arr}`)
// });


//map

//filter

//reduse





// const fruitsStr = fruits.join(' ');
// console.log(fruitsStr);
// const fruitsArr = fruitsStr.split();
// console.log(fruitsArr);

// const copyFruits = [...fruits];
// copyFruits.push('avocado');
// copyFruits.pop()
// copyFruits.shift()
// copyFruits.unshift('avocado')
// console.log(copyFruits)

// const copyFruits = fruits.slice(0);
// console.log(copyFruits)

// const elem = fruits.splice(3, 3);
// console.log(elem);

// const kiwiIndex = fruits.indexOf('kiwi');
// console.log(kiwiIndex)


// const hasStrawberry = fruits.includes('strawberry');

// if (!hasStrawberry) {
//   fruits.push('strawberry')
// }

// const fruitsReverse = [...fruits].reverse();
// console.log(fruitsReverse);







// const juice = ['mixed', 'orange', 'berries'];

// const juiceBottles = juice.map((elem, i) => {
//   return `${elem} juise!`
// });

// const coolCars = ['tesla', 'bmw', 'mersedes'].map((elem)=>{
//   return elem + ' is cool car'
// });
// console.log(coolCars)













// const fish = {
//   salmon: 12,
//   seaBass: 8,
//   tuna: 3
// };









// const stat1 = Array.of('gleb', 'oleg')
// console.log(stat1)


// const static2 = Array.from('gleb')
// console.log(static2);



// console.log(Array.isArray(bills))


// const statickKeys = Object.keys(fish)
// const statickValues = Object.values(fish)
// const statickEntres = Object.entries(fish)
// console.log(statickKeys)
// console.log(statickValues)
// console.log(statickEntres);




// const cars = [
//   {
//     id: '22a',
//     data: {
//       brand: 'toyota',
//       model: 'corolla', 
//       produced: 'June 7, 2015'
//     }
//   },
//   {
//     id: '22a',
//     data: {
//       brand: 'BMW',
//       model: 'X3', 
//       produced: 'November 20, 2018'
//     }
//   },
//   {
//     id: 'qq3',
//     data: {
//       brand: 'tesla',
//       model: 'model x',
//       produced: 'January 1, 2022'
//     } 
//   },
//   {
//     id: '54i',
//     data: {
//       brand: 'hyundai',
//       model: 'solaris',
//       produced: 'October 5, 2020'
//     }
//   },
//   {
//     id: 'aa22',
//     data: {
//       brand: 'nissan',
//       model: 'micra',
//       produced: 'September 17, 2013'
//     }
//   },
// ];

// const newCars = cars.map(car => {
//   // console.log(car)
//   // Получить данные о дате производства
//   const producedData = new Date(car.data.produced)
//   const now = Date.now();
//   const currDate = new Date(now);

//   // console.log(producedData.getFullYear());
//   // Определить сколько лет каждой машине
//   const age = currDate.getFullYear() - producedData.getFullYear();
//   // console.log(age);
//   // убрать вложенность
//   return {
//     id: car.id,
//     brand: car.data.brand,
//     model: car.data.model,
//     yaer: producedData.getFullYear(),
//     age: age
//   }

// });

// // console.log(newCars);



// // console.table(newCars);

// //fiter 

// // const before2020 = newCars.filter((car) =>  car.yaer < 2020);
// // if (before2020.length) {
// //   console.log('есть машины до 2020 года')
// // }
// // console.log(before2020)


// //find 
// const myCar = cars.find((car) =>  car.id === 'aa22')
// console.log(myCar);


//reduse 


// const bills = [200, 430, 1000, 30, 705, 125, 1330, 510];
// const sumNumbers = (sum, curVal) => {
//   console.log('текущая сумма >,' + sum);
//   console.log('текущее значение >,' + curVal);
//   console.log('------------------------');

//   return sum + curVal;

// }
// const allBills = bills.reduce(sumNumbers, 0);


const fruits = ['apple', 'orange', 'banana', 'kiwi', 'lemon', 'apple', 'banana'];

const countItems = (accum, curVal) => {
  console.log('Now accum - ' + accum)
  console.log('Now value - ' + curVal);
  console.log('--------------------------')
}

const fruitsCount = fruits.reduce(countItems, {})
