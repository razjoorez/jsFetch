const y = null;
const x = undefined;

console.log(typeof x);
console.log(typeof y);

let firstname =  'reza';
let age = 22;


//concat strings


console.log('my name '+ firstname + ' razjoo');

console.log(`my age is ${age}`);


const s  = 'hello world';

const t = 'computers, architecture, code ';


console.log(s.length);

console.log(s.toLocaleLowerCase());
console.log(s)
console.log(s.toUpperCase());
console.log(s);
console.log(s.substring(3,10));

console.log(s.split(''));
console.log(t.split(', '));


//arrays

const numbers = new Array(1,2,3,4,5);

console.log(numbers);

const fruits = ['apples', 'oranges'];

fruits[1] = 'pears'
console.log(fruits[1]);

fruits.push('mangoes');
console.log(fruits);
fruits.unshift('banana');
console.log(fruits);

//fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('mangoes'));


//object literals


const person = {
    firstName: 'john',
    lastname :'does',
    age: 3,
    hobbies: ['tennis', 'music','art'],
    address: {
        street: '50 main street',
        city: 'Boston',
        state: 'MA'
    }
};


person.email = 'john@gmail.com';


console.log(person.address.state, person.hobbies[1]);

//object destructuring
const {firstName,lastname, address: {city}} = person;


console.log(firstName);

console.log(city);


//arrays of objects  (object literals)


const todos = [ 
    {
        id: 1,
        text:'take out trash',
        isComplete: true
    },

    {
        id: 2,
        text:'Tennis',
        isComplete: true
    },

    {
        id: 3,
        text:'Dentist',
        isComplete: false
    },



];

console.log(todos[1].text);


//JSON  

const todosJSON = JSON.stringify(todos);

console.log(todosJSON);


//For

for (let i=0; i<10;i++) {
    console.log(i);
}


//while


let i=0;

while(i<10) {
    console.log('while ',i);
    i++;
};


for(let i=0; i<todos.length; i++) {
    console.log(todos[i].text)
}

for(let todo of todos) {
    console.log(todo.id);
}

//High order array methods foreach, map, filter


todos.forEach(function(todo) {
        console.log(todo.text)
});

const todoText =todos.map(function(todo){
    return todo.text;
}) ;

console.log(todoText);
const todoFilter = todos.filter(function(todo){
    return todo.isComplete===true;
}).map(function(todo){
    return todo.text,todo.id;
})

console.log(todoFilter);


//Conditionals

const xnum = 10;

const color = x>10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
        case 'blue': 
        console.log('color is blue');
        break;
        default:
            console.log('color is unknown');
            break;
}


//function


function addNums(num1, num2) {
    return num1+num2;

}


console.log(addNums(1,2));

//or

const adding = (num1=1,num2=2)=> {
    return num1+num2;
}

console.log(adding(4,5));

todos.forEach((todo)=> console.log(todo));



//lexical this







//Constructor function in es5 before classes

function Person(firstname,lastname,dob) {
this.firstName = firstName;
this.lastname=lastname;
this.dob = new Date(dob);
this.getBirthYear = function() {
    return this.dob.getFullYear();
}
this.getFullName = function(){
    return `${this.firstName} ${this.lastname}`;
}

};


//Instantiate Object

const person1 = new Person('john', 'Doe', '4-3-1980');

//console.log(person1.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());
console.log(person1);


//object prototype

Person.prototype.getYear = function(){
    return this.dob.getFullYear();
}


console.log(person1.getYear());

console.log(person1);


//ES6 classes



class PersonClass{
    constructor(firstname,lastname,dob){
        this.firstName= firstName;
        this.lastname = lastname;
        this.dob = dob;
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastname}`;
    }
}


  const personClass = new PersonClass('reza','razjoo','7-2-1980');

  console.log(personClass);

  //Dom selectors


  //Single element selectors

  console.log(window);

 console.log(document.getElementById('my-form'));
const form = document.getElementById('my-form');
console.log(form)
 console.log(document.querySelector('.container') );
 const f = document.querySelector('item');
 console.log(f);

 console.log(document.getElementsByTagName('li'));

 const items = document.querySelectorAll('item');
 items.forEach((item)=> console.log(item));


 //DOM manipulation

 const ul = document.querySelector('.items');
 //ul.remove();
 //ul.lastElementChild.remove();
 //ul.firstElementChild.remove();
 ul.firstElementChild.textContent = 'Hello';
 ul.children[1].innerText = 'Reza';
 ul.lastElementChild.innerHTML = '<h1>Hello H1</h1>'
 

 const btn = document.querySelector('.btn');
 btn.style.background = 'black';

 //Events

//  btn.addEventListener('click',(e)=> {
//     e.preventDefault();
//    // console.log(e.target.className)
//    document.querySelector('#my-form')
//    .style.background  = '#ccc';
//    document.querySelector('body')
//    .classList.add('bg-dark');
//    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>';
//  } );


 const myForm = document.querySelector('#my-form');
 const nameInput = document.querySelector('#name');
 const emailInput = document.querySelector('#email');
 const msg = document.querySelector('.msg');
 const userList = document.querySelector('#users');

 myForm.addEventListener('submit',onSubmit);

 function onSubmit(e) {
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value === ' ' || emailInput.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields';

        //setTimeout(()=> msg.remove(),3000)

    }else {
       // console.log('success');
       const li = document.createElement('li');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
       userList.appendChild(li);
       nameInput.value = '';
       emailInput.value = '';
    }
 }









  //Multiple el selctors

console.log(document.querySelectorAll('.item'));

console.log(document.getElementsByClassName('item'));


























