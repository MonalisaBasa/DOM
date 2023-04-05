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
// var heading=document.getElementsByClassName('title');
// heading[0].style.color="Green";
// heading[0].style.fontWeight='bold';

//GETELEMENTBYCLASSNAME//

// var items=document.getElementsByClassName("list-group-item");
// items[2].style.backgroundColor="green";
// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight="bold";
// }
// document.getElementsByClassName("list")[0].innerHTML="Item No.5"
// document.getElementsByTagName("li")[4].innerText="Item No.5"  //TAGNAME//

;

//QUERYSELECTOR//
var items=document.getElementsByClassName("list-group-item");
items[1].style.backgroundColor="green"
var secondItem=document.querySelectorAll('.list-group-item');
secondItem[1].style.color="Green";
var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="#ccc";
}

//INSERTBEFORE//
//Before header
var newDiv=document.createElement("div");
var newDivText=document.createTextNode("Hello World");
newDiv.appendChild(newDivText);


var container=document.querySelector('header .container');
var h1=document.querySelector('header h1')
console.log(container.insertBefore(newDiv,h1));

//Before Item 1
var newDiv1=document.createElement("div");
var newDivText=document.createTextNode("Hello World");
newDiv1.appendChild(newDivText);

var list=document.getElementById("items");
list.insertBefore(newDiv1,list.children[0]);




