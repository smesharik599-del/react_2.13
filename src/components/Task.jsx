import { useState } from 'react';

function Task({ task, onToggle, onDelete, onSave }) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.description);

  function handleKeyDown(event) {
    if (event.key === 'Enter' && value.trim()) {
      onSave(task.id, value.trim());
      setEditing(false);
    }
  }

  return (
    <li className={`${task.completed ? 'completed' : ''} ${editing ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />

        <label>
          <span className="description">{task.description}</span>
        </label>

        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        />

        <button
          className="icon icon-edit"
          onClick={() => {
            setValue(task.description);
            setEditing(true);
          }}
        />
      </div>

      {editing && (
        <input
          className="edit"
          value={value}
          onChange={event => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      )}
    </li>
  );
}

export default Task;