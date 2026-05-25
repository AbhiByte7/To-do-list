let bar = document.querySelector(".bar");
let add_task = document.querySelector(".btn");
let container = document.querySelector(".container");
let clear_link = document.querySelector(".clear-link");
let api = "https://6a13571f78d0434e0d5dfc7b.mockapi.io/kaam/todo";

// Render a card
function task_pusher(kaam, apiId) {
  if (kaam !== "") {
    let inner = `
      <div class="card" data-id="${apiId}">
          <div class="work-group">
              <input type="text" class="edit-input , bar"  id="badal" style="display:none;" value="${kaam}">
              <div class="work">${kaam}</div>
              <div class="edit-badge">✏️ Edit</div>
          </div>
          <div class="cross">✖</div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", inner);
  }
}

// Fetch all tasks from API and render
async function fetch_tasks() {
  const response = await fetch(api);
  const data = await response.json();
  container.innerHTML = "";
  data.forEach(obj => task_pusher(obj.title, obj.id));
}

// Push new task to API and render
async function api_push(kaam) {
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({ title: kaam }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  const data = await response.json();
  return data.id; // return MockAPI’s id
}

// Add task button
add_task.addEventListener("click", async () => {
  let kaam = bar.value.trim();
  bar.value = "";
  if (kaam) {
    let id = await api_push(kaam); // wait for real id
    task_pusher(kaam, id);
  }
});

// Delete all tasks
async function delete_all() {
  const response = await fetch(api);
  const data = await response.json();
  container.innerHTML = "";
  for (let item of data) {
    await fetch(`${api}/${item.id}`, { method: "DELETE" });
  }
}
clear_link.addEventListener("click", delete_all);

// Event delegation for delete/edit
container.addEventListener("click", async (e) => {
  // Delete
  if (e.target.classList.contains("cross")) {
    let card = e.target.closest(".card");
    let id = card.dataset.id;
    card.remove();
    await fetch(`${api}/${id}`, { method: "DELETE" });
  }

  // Edit
  if (e.target.classList.contains("edit-badge")) {
    let card = e.target.closest(".card");
    let id = card.dataset.id;
    let workDiv = card.querySelector(".work");
    let input = card.querySelector(".edit-input");

    if (input.style.display === "none") {
      // Switch to edit mode
      input.style.display = "inline-block";
      workDiv.style.display = "none";
      e.target.textContent = "💾 Save";
    } else {
      // Save mode
      let newTitle = input.value.trim();
      if (newTitle) {
        workDiv.textContent = newTitle;
        input.style.display = "none";
        workDiv.style.display = "block";
        e.target.textContent = "✏️ Edit";

        // Update API
        await fetch(`${api}/${id}`, {
          method: "PUT",
          body: JSON.stringify({ title: newTitle }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
      }
    }
  }
});

// Load tasks on page start
fetch_tasks();
