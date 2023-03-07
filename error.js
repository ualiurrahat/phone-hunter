// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))
//       .catch(error => console.log(error))
// document.getElementById('abc');


// async 
// try{
//       const res = await fetch('https://jsonplaceholder.typicode.com/users');
//       const data = await (res.json());
// }
// catch{

// }
// synchronous asynchronous js
// synchronous: sequenctial order of work

// asynchonous order
console.log(10);
setTimeout(() =>{
      console.log(20);
},3000); 
// here 3000 mili second = 3s, so 20 will print after 3 sec.
// meanwhile 30,40,50 will be printed.
// this is called asynchronous behaviour

console.log(30);
console.log(40);
console.log(50);