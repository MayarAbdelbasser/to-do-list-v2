let btn = document.querySelector(".add");
let input = document.querySelector(".input");
let tasksContainer = document.querySelector(".tasks");

//getting storaged tasks
if (window.localStorage.getItem("taskArray")) {
  taskArray = window.localStorage.getItem("taskArray").split(",");
  taskArray.forEach(function (item) {
    tasksContainer.innerHTML += `<div class="task">
    <p>${item}</p>
    <span class="del">Delete</span>
  </div>`;
    deleteTask();
  });
} else {
  taskArray = [];
}
console.log(taskArray);

btn.addEventListener("click", function () {
  let inputValue = input.value;
  if (inputValue.trim() === "") {
    window.prompt(`Input is empty`);
  } else {
    // add task to local storage
    taskArray.push(inputValue);
    console.log(taskArray);

    //add task to documenet tree
    tasksContainer.innerHTML += `
      <div class="task">
          <p>${inputValue}</p>
          <span class="del">Delete</span>
        </div>`;
    input.value = "";
    addStorage();
    deleteTask();
  }
});
window.localStorage;
function addStorage() {
  window.localStorage.setItem("taskArray", taskArray);
}

function deleteTask() {
  let del = document.querySelectorAll(".del");
  del.forEach((item) => {
    item.addEventListener("click", function (event) {
      //delete div element
      event.target.parentNode.remove();

      //delete from array and local storage
      let index = taskArray.indexOf(
        event.target.previousElementSibling.textContent
      );
      taskArray.splice(index, 1);
      console.log(taskArray);
      window.localStorage.setItem("taskArray", taskArray);
    });
  });
}
