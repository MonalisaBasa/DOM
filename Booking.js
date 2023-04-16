// document.querySelector('.btn').style.background="Red";
// const btn=document.querySelector(".btn");
// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     btn.style.background=" pink";
//     document.querySelector('body').classList.add('bg-dark');
// })

//Dispaly li data in sreen dynamically

// const myform=document.querySelector('#my-form');
// const name1=document.querySelector('#name');
// const email1=document.querySelector('#Email');
// const msg=document.querySelector('.msg');
// const userList=document.querySelector('#users');
 
// myform.addEventListener('submit',onsubmit);
// function onsubmit(e){
//     e.preventDefault();
//     // console.log(name1.value);
//     if(name1.value==='' || email1.value==='')

//     {
//         // alert("PLEASE ENTER A VALID INPUT");
//         msg.innerHTML="please enter all fields";

//         setTimeout(()=>msg.remove(),3000);
//     }
//     else{
//         const li=document.createElement('li');
//         li.appendChild(document.createTextNode(`${name1.value}:${email1.value}`));
//         userList.appendChild(li);

//         const del=document.createElement('button');
//         del.appendChild(document.createTextNode('Delete'));
//         userList.appendChild(del);

// //clear fields

//         name1.value='';
//         email1.value='';

//     }
    

    

// }



//storing details in single row of local storage
const form=document.getElementById('my-form');
    form.addEventListener('submit',(e) => {
    e.preventDefault();
    const name=e.target.username.value;          //to retrive value from input field and store in obj
    const email=e.target.EmailId.value;
    // localStorage.setItem('name',name);
    // localStorage.setItem('Email',email);

    const obj={
        name:name,
        email:email
        
    };
    localStorage.setItem(obj.name,JSON.stringify(obj));
    // console.log(localStorage);
    ShowUserOnScreen(obj);
    Edit(obj);
    
});
// localStorage.getItem(form);
 function ShowUserOnScreen(obj){
    const parentElem=document.getElementById('users')

    const childElem=document.createElement('li');
    childElem.textContent=obj.name + '-' +obj.email;
    console.log(childElem);

    const deletebutton=document.createElement('input')
    deletebutton.type= 'button';
    deletebutton.value= 'Delete';
    deletebutton.onclick =()=>{
        localStorage.removeItem(obj.name);
        parentElem.removeChild(childElem);
    }
    

    const Editbutton=document.createElement('input')
    Editbutton.type='button';
    Editbutton.value='Edit';
    Editbutton.onclick=()=>{
        localStorage.removeItem(obj.name);
        parentElem.removeChild(childElem);
        document.getElementById('username')=obj.name;
        document.getElementById('EmailId')=obj.email;
    }
    childElem.appendChild(deletebutton);
    childElem.appendChild(Editbutton);
    parentElem.appendChild(childElem)

 }

 



