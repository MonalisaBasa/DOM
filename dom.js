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
// var items=document.getElementsByClassName("list-group-item");
// items[1].style.backgroundColor="green"
// var secondItem=document.querySelectorAll('.list-group-item');
// secondItem[1].style.color="Green";
// var odd=document.querySelectorAll('li:nth-child(odd)');
// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor="#ccc";
// }

//INSERTBEFORE//
//Before header
// var newDiv=document.createElement("div");
// var newDivText=document.createTextNode("Hello World");
// newDiv.appendChild(newDivText);


// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1')
// console.log(container.insertBefore(newDiv,h1));

// //Before Item 1
// var newDiv1=document.createElement("div");
// var newDivText=document.createTextNode("Hello World");
// newDiv1.appendChild(newDivText);

// var list=document.getElementById("items");
// list.insertBefore(newDiv1,list.children[0]);

var form=document.getElementById('addform');
//ul tag
var item=document.getElementById('items');
var filter=document.getElementById('filter');

//Filter event
filter.addEventListener('keyup',filterItem);

//form submit Event
form.addEventListener('submit',addItem);

//Delete event 
item.addEventListener('click',removeItem)
//Add Item
function addItem(e)
{
    e.preventDefault();

    //Get Input value for class item 
    var newItem=document.getElementById('item').value;
    var newItem1=document.getElementById('item1').value;


    //create new li element
    var li=document.createElement('li');

    //Add class
     li.className='list-group-item';

     //Add textNode with input value

     li.appendChild(document.createTextNode(newItem));
    
     li.appendChild(document.createTextNode(newItem1));


     //create del button element
     var button=document.createElement('button');

     //Add class to del button
     button.className='btn btn-danger btn-sm float-right delete';

     //Add TextNode
     button.appendChild(document.createTextNode('X'));
     //Append button to li
     li.appendChild(button);
     
     //Append li to ul

     item.appendChild(li);
         //create edit button element
         var button1=document.createElement('button');

         //Add class to edit button
         button1.className='btn1 btn1-sm float-right edit';
    
         //Add TextNode
         button1.appendChild(document.createTextNode('Edit'));

         li.appendChild(button1);
         item.appendChild(li);


}

//Remove Item
function removeItem(e)
{
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?'))
    {
        var li=e.target.parentElement;
        item.removeChild(li);
    }
  }
}

//filter Item
function filterItem(e)
{
  //convert to text lowercase
  var text=e.target.value.toLowerCase();
  //Get li
  var ItemList=item.getElementsByTagName('li'); //it's an Html collection


  //To convert Html collection to Array
  Array.from(ItemList).forEach(function(item)
  {
    var Itemname=item.firstChild.textContent;
    console.log(Itemname);
    var description=item.childNodes[1].textContent;


    if(Itemname.toLowerCase().indexOf(text) !=-1||description.toLowerCase().indexOf(text) !=-1)

    {
      item.style.display='block';
    }
    else{
      item.style.display='none';  
    }
  })

}
//Add Edit button

// var edit=document.createElement('button');

// edit.appendChild(document.createTextNode('Edit'));

// for(var i=0;i<item.length;i++)
// {
//     .appendChild(edit);

// }
