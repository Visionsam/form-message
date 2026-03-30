const btn=document.getElementById('btn')
const del=document.getElementById('del')
const form=document.getElementById('form')
form.addEventListener('click',function(e){
    e.preventDefault();
})
del.addEventListener('click',function(){
    const user=document.getElementById('int1')
    const emi=document.getElementById('int2')
    const msg=document.getElementById('int3')
    user.value="";
    emi.value="";
    msg.value="";
})

btn.addEventListener('click',function(){
 const user=document.getElementById('int1')
 const emi=document.getElementById('int2')
 const msg=document.getElementById('int3')
 let name=user.value
localStorage.setItem('name',name)
 let email=emi.value
localStorage.setItem('Email',email)
 let mgs=msg.value
localStorage.setItem('msg',mgs)

let arr=[];
arr.push("name:",name,"email:",email,"msg:",mgs)
console.log(arr)
let list=document.getElementById('list')
list.innerHTML+='<li id='+(arr.length-1)+'>'+arr+'</li>'
list.style.display='inline'
})
















