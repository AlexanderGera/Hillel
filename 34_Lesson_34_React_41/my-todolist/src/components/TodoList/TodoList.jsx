export function TodoList(props) {
    let {todo, removeTask, changeTaskStatus} = props;
    return <div className="todo_task-container">
        <span className={todo.completed ? "task_list_ready" : "task_list"} onClick={() => changeTaskStatus(todo.id)}>
        {todo.task}
        </span>
        <div className="todo_button-container">
            <div onClick={() => removeTask(todo.id)}
                 className="delete_task"
            >Delete
            </div>
        </div>


    </div>;
}

