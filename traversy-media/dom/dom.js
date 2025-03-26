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










