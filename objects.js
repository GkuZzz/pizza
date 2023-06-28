

const student1 = {
    name: 'Gleb',
    age: 30,
    car: {
        brand: 'BMW',
        color: 'black'
    }
}

const student2 = {
    name: 'Gleb',
    age: 30,
}

// const student3 = {...student1}  // не глубокая копия объекта
// console.log(student3);

// const student4 = Object.assign({}, student2)  //не глубокая копия объекта
// console.log(student2)


// const student5 = _.cloneDeep(student1);
// student5.car.brand = 'Tesla'


const prod1 = {
    salami: 5,
    sauseges: 2,
}

const prod = {
    tomatos: 8,
    onions: 1,
}

const pizzaProd = {...prod1, ...prod, chease: 10}
console.log(pizzaProd)