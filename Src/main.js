const main=document.getElementById('main');
const button=document.getElementById('button');
button.addEventListener('click',function(){
  console.log('object');
  main.classList.toggle("hidden");
});