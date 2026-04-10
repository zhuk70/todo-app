function Task({ task, toggleTask, deleteTask, editTask }) {
  return (
    <div style={{ marginTop: "10px" }}>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.title}
      </span>

      <button onClick={() => toggleTask(task.id)}>✔</button>
      <button onClick={() => deleteTask(task.id)}>🗑</button>
      <button onClick={() => editTask(task.id)}>✏</button>
    </div>
  );
}

export default Task;