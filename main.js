const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const vacio = document.querySelector(".vacio");

// Función para agregar tarea
function addTask() {
  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");

    const checkbox = document.createElement("span");
    checkbox.classList.add("task-checkbox");
    checkbox.addEventListener("click", () => {
      checkbox.classList.toggle("checked");
    });

    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    vacio.style.display = "none";
  }
}

// Evento de clic en el botón
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

// Evento de presionar Enter
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevenir el comportamiento por defecto
    addTask();
  }
});

// Función para agregar botón de eliminar
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");
    if (items.length === 0) {
      vacio.style.display = "block";
    }
  });

  return deleteBtn;
}

//Musica
const music = document.getElementById('music');

function playMusic() {
  music.play().catch(error => {
      console.log('Error al intentar reproducir música:', error);
  });
}

window.onload = () => {
  setTimeout(playMusic, 2000);
};