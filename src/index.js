import './style.css';
import toggleTaskStatus from './status';

let toDoTasks = [];

const storeLocalStorage = () => {
  const tasksJson = JSON.stringify(toDoTasks);
  localStorage.setItem('tasks', tasksJson);
};

const restoreLocalStorage = () => {
  const tasksJson = localStorage.getItem('tasks');
  const toDoTasks = JSON.parse(tasksJson);
  return toDoTasks;
};

function showTasks() {
  const list = document.querySelector('.list');
  list.innerHTML = '';
  toDoTasks = restoreLocalStorage();
  toDoTasks.forEach((task, index) => {
    if (task.completed === false) {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
      <span class="rows">
        <input type="checkbox"/>
        <input type="text" value="${task.description}" class="task"/>
        <i class="fa-solid fa-trash dull trash-icon"></i>
      </span>
    `;

      list.appendChild(listItem);
      const checkbox = listItem.querySelector('input[type="checkbox"]');
      const taskText = listItem.querySelector('.task');
      const trashIcon = listItem.querySelector('.trash-icon');

      checkbox.addEventListener('change', () => {
        toggleTaskStatus(toDoTasks, index, taskText, storeLocalStorage, showTasks);
      });

      trashIcon.addEventListener('click', () => {
        toDoTasks.splice(index, 1);
        storeLocalStorage();
        showTasks();
      });

      taskText.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
          const taskDescription = taskText.value.trim();
          alert(taskDescription);
          if (taskDescription === '') {
            alert('Please enter a task.');
          }
          toDoTasks[index].description = taskDescription;
          storeLocalStorage();
          showTasks();
        }
      });
    }
  });
}

showTasks();

const taskInput = document.getElementById('taskInput');

function addTask() {
  const taskDescription = taskInput.value.trim();
  if (taskDescription === '') {
    alert('Please enter a task.');
    return;
  }
  const newTask = {
    description: taskDescription,
    completed: false,
    index: toDoTasks.length + 1,
  };

  toDoTasks.push(newTask);

  taskInput.value = '';
}

taskInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTask();
    storeLocalStorage();
    showTasks();
  }
});

const button = document.querySelector('.clear-btn');
button.addEventListener('click', () => {
  toDoTasks = restoreLocalStorage();
  toDoTasks = toDoTasks.filter((task) => !task.completed);
  storeLocalStorage();
  showTasks();
});

const refresh = document.querySelector('#refresh');
refresh.addEventListener('click', () => {
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});
