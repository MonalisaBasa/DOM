// document.querySelector('.btn').style.background="Red";
// const btn=document.querySelector(".btn");
// btn.addEventListener('click',(e) => {
//     e.preventDefault();
//     btn.style.background=" pink";
//     document.querySelector('body').classList.add('bg-dark');
// })

const myform=document.querySelector('#my-form');
const name1=document.querySelector('#name');
const email1=document.querySelector('#Email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');
 
myform.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    // console.log(name1.value);
    if(name1.value==='' || email1.value==='')

    {
        // alert("PLEASE ENTER A VALID INPUT");
        msg.innerHTML="please enter all fields";

        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${name1.value}:${email1.value}`));
        userList.appendChild(li);

        name1.value='';
        email1.value='';

    }

    

}

