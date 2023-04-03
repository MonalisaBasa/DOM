//Examine the document object//

// console.dir(document);
// console.log(document.domain);
// console.log(document.links);
// console.log(document.URL);
// console.log(document.title);
// document.title='1324'
// console.log(document.all);
// console.log(document.forms);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var header=document.getElementById('header-title');
// var header1=document.getElementById('main-header');

// console.log(header);
// header.textContent="Hello";
// header.innerText="Welcome to DOM";
// header.innerHTML='<h3>Hello</h3>';


//style
// (header1.style.borderBottom = 'solid 3px #000');
var heading=document.getElementsByClassName('title');
heading[0].style.color="Green";
heading[0].style.fontWeight='bold';

//GETELEMENTBYCLASSNAME//

var items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight="bold";
}