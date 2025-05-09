//var let const

let age = 30;
age =22;


//Data types   primitive directly assigned to memeory :  String, Numbers, null, undefined, Symbol

const name = 'John';


const arrfrom = Array.from(name, ch=> {
    return ch.toUpperCase()
});

const pages = '5'

//const totalPages = Array.from(({length:pages}, (_,i)=>i+1))
const totalPages = Array.from({length:pages},(_,i)=>i+1)
console.log('total pages :', totalPages);



console.log(arrfrom);


const MyArray = [1,2,3,4,4,4,5,6,6,7,8,8,8];

const mySet = new Set(MyArray);
mySet.add(8)

console.log(mySet)
console.log(MyArray);

const uniqueArray = [...mySet];
console.log(uniqueArray);
console.log(mySet.has(6));

console.log(mySet.size);

const myMap = new Map([['name', 'john'], ['surname', 'doe']]);
console.log(myMap);


const s = 'Helloworld';

console.log(s.substring(0,5).toLocaleUpperCase());


console.log(s.split(''));

const y = undefined;

console.log(typeof y);
const x = null;

console.log(typeof x);

const s1 = 'hello world'


console.log(s1.length);

console.log(s1.toUpperCase());

console.log(s1.substring(0,4));

console.log(s1.split(''));


const s2 = 'technology, computers, it, code';
console.log(s2);

console.log(s2.split(', '));


//Arrays


const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears', 10, true];
console.log(fruits[1]);

fruits.unshift('strawberries');
fruits.push('avacadoes')
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'));



//Object literals


const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
};


console.log(person.hobbies[1]);


//Object destructuring


const {firstName, lastName, address:{city}} = person;


console.log(firstName);

console.log(city);

person.email = 'john@gmail.com';

console.log(person);

const todos = [
    {
        id:1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Play tennis',
        isCompleted: true
    },
    {
        id:3,
        text: 'Dentist appointment',
        isCompleted: false
    },

];


//       -----     JSON    ---------------



const todoJSON = JSON.stringify(todos);


console.log(todoJSON);  //double quotes around everything

//For

for(let i=0; i<10; i++) {
    console.log(i);
};


//While loop


let i=0;

while(i<10) {
    console.log(`While Loop number: ${i}`);
    i++;
};


for(let i=0; i<todos.length; i++) {
    console.log(todos[i]);
};

for(let todo of todos) {
    console.log('of loop: ',todo.text )
};


//High order array mrthods

//forEach, map, filter


todos.forEach(function(todo) {
    console.log(todo.text);
});


const todoText =  todos.map(function(todo){
    return todo.text;
});


console.log(todoText);

const todoFilter = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})

console.log(todoFilter);

const findTodo = todos.find(function(todo){
    return todo.isCompleted === false;
});

console.log('find to do: ', findTodo)



//Ternary operator


const x1 = 11;


const color = x1>10 ? 'red' : 'blue';


console.log(color);


switch(color) {
    case 'red' :
        console.log('color is red');
        break;
    case 'blue': 
        console.log('color is blue');
        break;
    default: 
    console.log('no color match');
    break;
};


//   functons


function addNums(num1=1,num2){
    console.log(num1+ num2);
}

addNums(4,5);



//Arrow function


const addNumsArrow = (num1=1,num2=2) => num1+ num2;

const addNumArrows =(num1=1, num2=2) => console.log('num arr: ', num1+num2);
addNumArrows();



//Object literals
//Constructor function

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }

    this.getFullName = function() {
        return this.firstName + ' '+ this.lastName
    }
}


//Instantiate object

const person1 = new Person('Reza', 'Razjoo', '7-6-77');

console.log(person1);

console.log(person1.getBirthYear());

console.log(person1.getFullName());

 
//  checking git  linux


























 








