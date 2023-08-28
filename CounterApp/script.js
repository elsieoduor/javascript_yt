let add = document.getElementById('count')
let reset = document.getElementById('reset')
let subtract = document.getElementById('subtract')
let count = document.getElementById('count')

add.addEventListener('click', ()=>{
  count.innerHTML ++;
})
subtract.addEventListener('click', ()=>{
  count.innerHTML --;
});
reset.addEventListener('click', ()=>{
  count.innerHTML = 0;
});