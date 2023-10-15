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
  let items = '';
  toDoTasks.forEach((task) => {
    items += `<li>
    <span class="rows"
      ><input type="checkbox"/><input
        type="text" value="${task.description}"
        class="task" /><i class="fa-solid fa-ellipsis-vertical dull"></i
    ></span>
  </li>`;
  });
  list.innerHTML = items;
}

showTasks();
