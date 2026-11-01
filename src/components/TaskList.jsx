import Task from './Task';

function TaskList({
  tasks,
  onToggle,
  onDelete,
  onSave,
}) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onSave={onSave}
        />
      ))}
    </ul>
  );
}

export default TaskList;