const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const taskList = document.getElementById('taskList');

taskInput.addEventListener('keypress', function (e) {
    if(e.keyCode === 13) {
        e.preventDefault();
        addTask();
    }
});

function addTask() {
    const newTask = taskInput.value.trim();

    if(newTask.length > 0) {
        const newItem = document.createElement('li');
        newItem.classList.add('list-group-item');
        newItem.textContent = taskInput.value;
        taskList.appendChild(newItem);

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('btn', 'btn-sm', 'btn-success', 'ms-5');
        completeBtn.appendChild(document.createTextNode('Done'));
        newItem.appendChild(completeBtn);


        taskInput.value = ' ';

        completeBtn.addEventListener('click', function() { 
            completeTask(newItem);
          });

    
    }
}

function completeTask(task) {
    taskInput.classList.add('completed-item');
    const completeBtn = task.querySelector('button');
    completeBtn.remove();
    completedList.appendChild(task);
}

