// Function to add a new task
function addtask() {
  const input = document.getElementById("input");
  const list = document.getElementById("list");

  if (input.value == "") {
    alert("Please Enter a Task");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>${input.value}</span><div>
        <button id="edit" onclick="taskedit(this)"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="delete" onclick="taskdelete(this)"><i class="fa-solid fa-trash"></i></button>
      </div>`;
    list.appendChild(listItem);
    input.value = "";
  }
}

// Function to remove a task
function taskdelete(button) {
  var listItem = button.parentNode.parentNode;
  listItem.parentNode.removeChild(listItem);
}

// Function to edit a task
function taskedit(button) {
  var listItem = button.parentNode.parentNode;
  var taskText = listItem.innerText;
  var newtext = prompt('Edit Task:', taskText);
  if (newtext !== null && newtext !== '') {
    listItem.querySelector('span').innerText = newtext;
  }
}
