import { useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      description: "Active task",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      description: "Another active task",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  const [filter, setFilter] = useState("All");

  function handleToggle(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function handleDelete(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id != id));
  }

  function handleSave(id, newDescription) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            description: newDescription,
          };
        }
      }),
    );
  }
  function handleClearCompleted() {
    setTasks((prevTasks) =>
      prevTasks.filter((taskcompl) => !taskcompl.completed),
    );
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>

        <NewTaskForm onAddTask={setTasks} />
      </header>

      <section className="main">
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onSave={handleSave}
        />

        <Footer
          tasks={tasks}
          onClearCompleted={handleClearCompleted}
          filter={filter}
          onFilterChange={setFilter}
        />
      </section>
    </section>
  );
}

export default App;
