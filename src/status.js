export default function toggleTaskStatus(toDoTasks, index, taskText, storeLocalStorage) {
  const task = toDoTasks[index];
  if (task.completed) {
    task.completed = false;
    taskText.classList.remove('completed');
  } else {
    task.completed = true;
    taskText.classList.add('completed');
  }
  storeLocalStorage();
}
