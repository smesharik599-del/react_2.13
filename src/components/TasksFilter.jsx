function TasksFilter({ filter, onFilterChange }) {
  const filters = ['All', 'Active', 'Completed'];

  return (
    <ul className="filters">
      {filters.map(item => (
        <li key={item}>
          <button
            className={filter === item ? 'selected' : ''}
            onClick={() => onFilterChange(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TasksFilter;