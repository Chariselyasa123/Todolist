import '../styles/Lists.css'
import ListItem from './partials/ListItem';
import { useTodo } from '../fetures/todo-contex';
import { useTab } from '../fetures/tab-contex';
import { Fragment, useState } from 'react';
import Modal from './Modal';

const Lists = () => {
    const { todos, dispatch } = useTodo();
    const { tab } = useTab();

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalData, setModalData] = useState({})

    const handleCheckboxChange = (e, id) => {
        const isChecked = e.target.checked;

        if (isChecked) {
            // Make todo done
            dispatch({
                type: 'COMPLETE_TODO',
                payload: {
                    id
                }
            })
        }
        else {
            // Make todo undone
            dispatch({
                type: 'UNCOMPLETE_TODO',
                payload: {
                    id
                }
            })
        }
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: {
                id
            }
        })
    }

    const handleOpenModal = (todo) => {
        setIsModalOpen(true)
        setModalData(todo)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setModalData({})
    }

    return (
        <>
            <main className="lists">
                {(tab.tab === 'todo' || tab.tab === 'all') &&
                    <div className="undone">
                        <h3 className="text-lg">Todo's</h3>
                        {todos.map(todo => (
                            <>
                                {!todo.isDone && (
                                    <Fragment key={todo.id}>
                                        <ListItem
                                            todo={todo}
                                            onChange={handleCheckboxChange}
                                            onDelete={handleDeleteTodo}
                                            openModal={handleOpenModal}
                                        />
                                    </Fragment>
                                )}
                            </>
                        ))}
                    </div>
                }
                {(tab.tab === 'completed' || tab.tab === 'all') &&
                    <div className="done">
                        {todos.find(todo => todo.isDone) && (
                            <h3 className="text-lg">Completed</h3>
                        )}
                        {todos.map(todo => (
                            <>
                                {todo.isDone && (
                                    <Fragment key={todo.id}>
                                        <ListItem
                                            todo={todo}
                                            onChange={handleCheckboxChange}
                                            onDelete={handleDeleteTodo}
                                        />
                                    </Fragment>
                                )}
                            </>
                        ))}
                    </div>
                }
            </main>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                todo={modalData}
            />
        </>
    )
}

export default Lists