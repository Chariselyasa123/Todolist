import '../styles/Modal.css'
import InputText from './partials/InputText';
import ButtonAdd from './partials/ButtonAdd';
import { useTodo } from '../fetures/todo-contex';
import { useEffect, useState } from 'react';

const Modal = ({ isOpen, onClose, todo }) => {
    const { dispatch } = useTodo();

    const [inputValue, setInputValue] = useState(todo.label)
    const [isInputError, setIsInputError] = useState(false)

    useEffect(() => {
        setInputValue(todo.label)
    }, [todo.label])


    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        setIsInputError(false)
    }

    const handleEditTodo = () => {
        if (inputValue?.length <= 0) {
            setIsInputError(true)
            return
        }

        // edit todo in context global state
        dispatch({
            type: 'EDIT_TODO',
            payload: {
                id: todo.id,
                label: inputValue
            }
        })

        // reset input
        setInputValue('')

        // close modal
        onClose()
    }


    return (
        <div className={`modal fade ${isOpen && 'show'}`}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="card">
                        <button
                            className="button-close-modal"
                            onClick={onClose}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <h2 className="text-2xl text-center">Edit Todo</h2>
                        <div className="edit-todo">
                            <InputText
                                value={inputValue}
                                onChange={handleInputChange}
                                isError={isInputError}
                            />
                            <ButtonAdd
                                onClick={handleEditTodo}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal