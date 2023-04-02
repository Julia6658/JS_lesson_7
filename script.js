const btnAdd = document.querySelector('.btn-add');
const todolist = document.querySelector('.to-do-list');
const form = document.querySelector('#form');
let taskContent = document.querySelector('.taskname');
const msgEmpty = document.querySelector('.message-empty');
const btnClear = document.querySelector('.btn-clear');


function updateList() { 
  if (taskContent.value) {
    let task = document.createElement('div');
    let check = document.createElement('input');
    
    check.setAttribute('type', 'checkbox');
    todolist.append(task);
   
    task.innerText = taskContent.value;
    task.append(check);
    msgEmpty.style.display = "none";
    btnClear.removeAttribute('disabled'); 
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  updateList();
  form.reset();
});

btnClear.addEventListener('click', function() {
  msgEmpty.style.display = "block";
  const tasks = document.querySelectorAll('.to-do-list > div');
  for (let i = 0; i < tasks.length; i ++) {
    tasks[i].remove();
  }
 
});

// 2. Задание

let q = prompt('введите число');
let arr = Array.from(q);
console.log(arr);

function count(arr) {
  let sum = 0;
  for (let item = 0; item < arr.length; item ++) {
    sum += +arr[item]
  }
  return sum;
}
console.log(`цифр в числе: ${arr.length}`);
console.log(`сумма: ${count(arr)}`);
console.log(`обратный порядок: ${arr.reverse()}`);






/*for (let index = 0; index < arr.length; index++) {

  sum+ = arr[index];
}

console.log(sum);  */


