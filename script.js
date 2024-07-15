const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");
const addBtn = document.getElementById("addBtn");

function addTodo() {
  const newTodoText = newTodoInput.value;
  newTodoInput.value = "";

  const completeCheckbox = document.createElement("input");
  completeCheckbox.type = "checkbox";

  const todoText = document.createElement("span");
  todoText.textContent = newTodoText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  const listItem = document.createElement("li");
  listItem.appendChild(completeCheckbox);
  listItem.appendChild(todoText);
  listItem.appendChild(deleteBtn);

  todoList.append(listItem);

  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(listItem);
  });

  completeCheckbox.addEventListener("change", function () {
    if (completeCheckbox.checked) {
      listItem.classList.add("completed");
    } else {
      listItem.classList.remove("completed");
    }
  });
  newTodoInput.focus();
}

addBtn.addEventListener("click", addTodo);
// //1.discount scenario
// let totalAmount;
// let discountAmount;
// function applyDiscount(totalAmount) {
//   if (totalAmount > 500) {
//     discountAmount = (totalAmount * 20) / 100;
//   } else if (totalAmount >= 100 && totalAmount <= 500) {
//     discountAmount = (totalAmount * 10) / 100;
//   } else if (totalAmount < 100) {
//     discountAmount = totalAmount;
//   }
//   return discountAmount;
// }
// let amount = applyDiscount(300);
// console.log(amount);

// //2.grade calculator
// let score;

// let grade;
// function gradeCalculator(score) {
//   if (score >= 90 && score <= 100) {
//     grade = "A";
//   } else if (score >= 80 && score <= 90) {
//     grade = "B";
//   } else if (score >= 70 && score <= 79) {
//     grade = "C";
//   } else if (score >= 60 && score <= 69) {
//     grade = "D";
//   } else {
//     grade = "E";
//   }
//   return grade;
// }
// let stdgrade = gradeCalculator(76);
// console.log(stdgrade);

// //3.temperature conversion


