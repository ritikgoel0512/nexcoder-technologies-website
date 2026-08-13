
const menu = document.querySelector('.menu');
const mobile = document.querySelector('.mobile');
if(menu && mobile){menu.addEventListener('click',()=>mobile.classList.toggle('open'));}
document.querySelectorAll('.mobile a').forEach(a=>a.addEventListener('click',()=>mobile?.classList.remove('open')));
const back=document.querySelector('.backtop');
if(back){window.addEventListener('scroll',()=>back.classList.toggle('show',window.scrollY>700));back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
const params=new URLSearchParams(location.search);
const interest=params.get('interest');
const intent=document.querySelector('[data-intent]');
if(interest && intent){intent.textContent='Your enquiry: '+interest;intent.classList.add('show');}
