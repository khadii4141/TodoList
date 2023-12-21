const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');


function addTask() {
  const newTask = newTaskInput.value;
  if (newTask) {
    const listItem = document.createElement('li');    
    listItem.textContent = newTask;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    newTaskInput.value = '';
  }
}

