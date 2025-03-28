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





















