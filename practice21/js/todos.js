//https://jsonplaceholder.typicode.com/users/1/todos 
// Выведите первые 4 задачи из данного списка. Обязательно нужно вывести название задачи, и текущее состоаяние выполнения(true/false)

// https://jsonplaceholder.typicode.com/todos/?_limit=30


const getTasks = (count = 1) => {

    fetch(`https://jsonplaceholder.typicode.com/todos/?_limit=${count}`)
  .then(response => response.json())

  .then(json => {
    const todosCard = document.querySelector('#todos');
    todosCard.innerHTML = '';
    json.forEach(element => {
        todosCard.innerHTML += `
        <div class="card pink darken-1">
            <div class="card-content white-text">
              <span class="card-title">${element.title}</span>
              <p>${element.completed}</p>
            </div>
          </div>
    `
    });
  })
}

document.querySelector('#ten-tasks').addEventListener('click', function(){
    getTasks(10)
})


document.querySelector('#thirty-tasks').addEventListener('click', function(){
    getTasks(30)
})

const getSpecificTask = (todosID = 1) => {

    fetch(`https://jsonplaceholder.typicode.com/todos/${todosID}`)
  .then(response => response.json())

  .then(json => {
    const todosCard = document.querySelector('#todos');
    todosCard.innerHTML = '';
    todosCard.innerHTML += `
        <div class="card pink darken-1">
            <div class="card-content white-text">
              <span class="card-title">${json.title}</span>
              <p>${json.completed}</p>
            </div>
        </div>
    `
  })
}

document.querySelector('#ninth-task').addEventListener('click', function(){
    getSpecificTask(9)
})