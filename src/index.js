import './style.css';

const toDoTasks = [
  {
    description: 'Buy groceries',
    completed: false,
    index: 1,
  },
  {
    description: 'Go to the gym',
    completed: true,
    index: 2,
  },
  {
    description: 'Read a book',
    completed: false,
    index: 3,
  },
  {
    description: 'Write a report',
    completed: true,
    index: 4,
  },
];

function showTasks() {
  const list = document.querySelector('.list');
  list.innerHTML = '';
  toDoTasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span class="rows">
        <input type="checkbox"/>
        <input type="text" value="${task.description}" class="task"/>
        <i class="fa-solid fa-trash dull"></i>
        <i class="fa-solid fa-ellipsis-vertical dull"></i>
      </span>
    `;
    list.appendChild(listItem);
    const checkbox = listItem.querySelector('input[type="checkbox"]');
    const taskText = listItem.querySelector('.task');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        taskText.classList.add('completed');
      } else {
        taskText.classList.remove('completed');
      }
    });
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
    showTasks();
  }
});
