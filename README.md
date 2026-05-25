
```markdown
# 📋 TaskFlow – Elegant To‑Do UI
Link:- https://to-do-list-abhi1.netlify.app/
TaskFlow is a simple yet elegant to‑do list application built with **HTML, CSS, and JavaScript**, powered by **MockAPI** for backend storage.  
It lets you add, edit, delete, and clear tasks while keeping track of the active task count dynamically.

---

## ✨ Features
- **Add tasks**: Create new tasks with a single click.
- **Edit inline**: Update tasks directly inside the card using the built‑in input field.
- **Delete tasks**: Remove individual tasks with the ❌ button.
- **Clear all**: Wipe the entire list (and API database) with one click.
- **Persistent storage**: Tasks are saved and synced with [MockAPI](https://mockapi.io).

---

## 🛠️ Tech Stack
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Backend**: MockAPI (RESTful endpoints)
- **Architecture**: Event delegation for clean, scalable DOM handling

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/taskflow.git
cd taskflow
```

### 2. Open in browser
Simply open `index.html` in your browser.  
No build tools or frameworks required.

---

## 📂 Project Structure
```
taskflow/
│── index.html      # Main HTML file
│── style.css       # Styling for the UI
│── javascript.js   # Core logic (CRUD + dynamic updates)
```

---

## 🔧 Configuration
- Replace the `api` variable in `javascript.js` with your own MockAPI endpoint:
```js
let api = "https://your-mockapi-url.com/todo";
```

---

## 🎮 Usage
1. Type a task in the input bar and click **+ Add task**.
2. Click **✏️ Edit** to toggle inline editing. Update the text and click **💾 Save**.
3. Click **✖** to delete a task.
4. Click **🗑️ Clear all** to remove all tasks.
5. Watch the **task counter** update dynamically.

---

## 📝 License
This project is open‑source and available under the MIT License.


