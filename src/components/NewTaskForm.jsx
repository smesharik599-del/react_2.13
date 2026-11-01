import { useState } from 'react';

function NewTaskForm({ onAddTask }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    if (!value.trim()) return;

    const newTask = {
      id: Date.now(),
      description: value.trim(),
      completed: false,
      createdAt: new Date(),
    };

    onAddTask((prevTasks) => [...prevTasks, newTask]);

    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  );
}

export default NewTaskForm;