
//Constructor

function Book(title,author,year) {
    this.title = title;
    this.year = year;
    this.author = author;
}

//getSummry

Book.prototype.getSummary = function() {
    return `${this.title} was written by
    ${this.author} in ${this.year}`;
};

//getAge

Book.prototype.getAge = function() {
 const years = new Date().getFullYear()-this.year;
 return `${this.title} is ${years} old`;
 
}

//Revise

Book.prototype.revise = function(newYear) {
    this.year  = newYear;
    this.revised = true;
}

//Instantiate an Object
const book1 = new Book('book one', 'john doe', '2013'); 
const book2 = new Book('book two', 'jane doe', '2016'); 

console.log(book2);

book2.revise('2018');

console.log(book2);
