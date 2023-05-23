const students = ['vasily', 'stas', 'mary', 'alex'];

const comments = [
 {text: 'hello my friend!', id: '111'},
 {text: 'welcome:)', id: '222'},
 {text: 'BAD COMMENT', id: '333'},
 {text: 'glad to see you!', id: '444'},
];


function deleteBadComment(id, commentsList) {
    // 1. Найти нужный комментарий
    const elem = commentsList.findIndex((comment) => 
        comment.id === id
    );


    // 2. Удалить комментарий
    const newElem = [
        ...commentsList.slice(0, elem),
        ...commentsList.slice(elem + 1)
    ];
   

    // 3. Возвразаем массив без комментария
    return newElem;


}

    const cleanComentList = deleteBadComment('333', comments);
    console.log(cleanComentList);











// const studentsCopy = [...students]
// const studentsCopy2 = ['viktor', ...studentsCopy]
// studentsCopy.push('gleb')


// console.log(studentsCopy2);
// console.log(studentsCopy);
// console.log(students);

// const studentsLeft = students.slice(0, 2);
// console.log(studentsLeft);

// const studentsRight = students.slice(2);
// console.log(studentsRight)


// const students4 = [...studentsLeft, 'elena', ...studentsRight]
// console.log(students4);

// const students5 = [...students.slice(0, 2), ...students.slice(3)] ;
// console.log(students5)



// мутабельные методы

// const num = [1, 2, 3, 4, 5]

// const numRev = num.reverse() // меняет исходный массив
// console.log(numRev);
// console.log(num)

// const numberSplice = num.splice(0, 1);
// console.log(num)
// console.log(numberSplice)


// иммутабельные методы

// const numSlice = num.slice(0, 2); // не меняет исходный массив
// console.log(numSlice);
// console.log(num);


//  работа с копией массива

// const numRew = [...num]
// numRew.reverse();
// console.log(numRew);
// console.log(num) // исходный массив не меняется.


