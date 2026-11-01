import TasksFilter from './TasksFilter';

function Footer({ tasks, onClearCompleted, filter, onFilterChange }) {
  const activeCount = tasks.filter(task => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} items left
      </span>

      <TasksFilter
        filter={filter}
        onFilterChange={onFilterChange}
      />

      <button
        className="clear-completed"
        onClick={onClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;