const buttons = document.querySelectorAll('.button');

// function handleClick(event){
    
//     console.log(`target > `, event.target);
//     console.log(`current target >`, event.currentTarget);
// };

// buttons.forEach(function(btn){
    
//     btn.addEventListener('click', handleClick)
// });




// window.addEventListener('click', function(event){
//     console.log('window', event.target)
// });

// const mainDiv = document.querySelector('.pizza-menu-items');
// mainDiv.addEventListener('click', function(event) {
//     console.log(event.target)
// });


// const link = document.querySelector('.stackdew');
// link.addEventListener('click', function(e){
//     const letsGo = confirm('Точно переходим??')
//     if(!letsGo) {
//         e.preventDefault();
//     }
//     console.log(e)
// });



const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const title = e.currentTarget.title.value
    console.log(title)
});