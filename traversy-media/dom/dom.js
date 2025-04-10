//console.dir(document);


//examine the document object


// console.log(document.domain);
// console.log(document.URL)
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);

//document.all[9].textContent = 'hello'


// console.log(document.forms[0]);
// console.log(document.links);


//console.log(document.images);

 var headerTitle = document.getElementById('header-title');
 var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'GoodBye';
// headerTitle.innerHTML = '<h3>Hello</h3>'

header.style.borderBottom = 'solid 3px #000';



var items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for(var i=0;i<items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
}

//Elements by tagName


var li = document.getElementsByTagName('li');

for(var i=0; i<li.length; i++) {
    li[i].style.backgroundColor = '#f4f4f4';
}


//Query selector

var header = document.querySelector('#main-header');
header.style.borderBottom = '5px solid red';

var input = document.querySelector('input');
input.value = 'Hello';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'green';


//QuerySelector ALL

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}


//Traversing the DOM

var itemList = document.querySelector('#items');
console.log("parents of items :  ",itemList.parentNode);

itemList.parentNode.style.backgroundColor = '#f4f4f4';


//Parent element

//  var itemListel = document.querySelector('#items');
//  itemListel.parentElement.style.backgroundColor = 'red''


//child nodes

console.log(itemList.childNodes);
console.log(itemList.children);

console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';



//First child


console.log(itemList.firstChild);

//FirstElement child

console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = 'Hello 1';

console.log(itemList.nextSibling);

console.log(itemList.nextElementSibling);


//previous siblings

console.log(itemList.previousSibling);




//createElement

//Create a div

var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//add id

newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title', 'Hello Div');

//Create a text node

var newDivText = document.createTextNode('Hello World');

//Add trxt to div

newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

newDiv.style.fontSize = '30px';


console.log(newDiv);


container.insertBefore(newDiv, h1);
































