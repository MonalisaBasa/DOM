const forms=document.getElementById('form');
forms.addEventListener('submit',onsubmit)
function onsubmit(e){
    e.preventDefault();
    const Expenseamount=e.target.Amount.value;
    const desc=e.target.Description.value;
    const category=e.target.category.value;

    const obj={
        Expenseamount:Expenseamount,
        desc:desc,
        category:category
    }

    localStorage.setItem(obj.Expenseamount,JSON.stringify(obj));
ShowUserOnScreen(obj);


// console.log(localStorage.getItem(obj.Expenseamount));

}
window.addEventListener('DOMContentLoaded',()=>{
    const obj=localStorage;
    const key=Object.keys(obj);

    for(var i=0;i<key.length;i++){
        const k=key[i];
        const userDetailString=obj[k];
        const userDetailObj=JSON.parse(userDetailString);
        ShowUserOnScreen(userDetailObj);
    }
})




function ShowUserOnScreen(obj){
   const parentElem=document.getElementById("users");
   const childElem=document.createElement('li');
   childElem.textContent=obj.Expenseamount+"-"+obj.desc+"-"+obj.category;

   const deletebutton=document.createElement('input');
   deletebutton.type="button";
   deletebutton.value="Delete";
   deletebutton.onclick=()=>{
    localStorage.removeItem(obj.Expenseamount);
    parentElem.removeChild(childElem);
   }

   const Editbutton=document.createElement('input');
   Editbutton.type='button';
   Editbutton.value="Edit";
   Editbutton.onclick=()=>{
    localStorage.removeItem(obj.Expenseamount);
    parentElem.removeChild(childElem);
    document.getElementById('Amount').value;
    document.getElementById('Description').value;
    document.getElementById('category').value;
    
   }
   childElem.appendChild(deletebutton);
   childElem.appendChild(Editbutton);
   parentElem.appendChild(childElem);

}

