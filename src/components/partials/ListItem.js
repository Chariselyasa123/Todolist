import '../../styles/partials/ListItem.css'

const ListItem = ({ todo, onChange, onDelete, openModal }) => {
    return (
        <div className="list-item todo-neumorphism-outside">
            <input
                type="checkbox"
                id={todo.id}
                onChange={e => onChange(e, todo.id)}
                checked={todo.isDone && true}
                className="todo-neumorphism-outside"
            />
            <label
                htmlFor={todo.id}
                className="text-lg"
            >
                {todo.isDone
                    ? <s>{todo.label}</s>
                    : todo.label
                }
            </label>
            {!todo.isDone &&
                <button
                    className="button-edit"
                    onClick={() => openModal(todo)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
            }
            <button
                className="button-delete"
                onClick={() => onDelete(todo.id)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>
    )
}

export default ListItem