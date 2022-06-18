import { useState } from 'react'
import Layout from './Layout';
import WrapperBody from './WrapperBody';
import Header from './Header';
import Lists from './Lists';
import WrapperInput from './WrapperInput';
import InputText from './partials/InputText';
import ButtonAdd from './partials/ButtonAdd';
import { useTodo } from '../fetures/todo-contex';
import Title from './Title';
import FloatingButton from './partials/FloatingButton';
import Modal from './Modal';
import Footer from './partials/Footer';

const TodoList = () => {
    const { dispatch } = useTodo();

    const [inputValue, setInputValue] = useState('')
    const [isInputError, setIsInputError] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        setIsInputError(false)
    }

    const handleAddTodo = () => {
        if (inputValue.length <= 0) {
            setIsInputError(true)
            return
        }

        // store todo in context global state
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                label: inputValue,
                isDone: false
            }
        })

        // reset input
        setInputValue('')
    }

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <Layout>
            <Title />
            <WrapperInput>
                <InputText
                    onChange={handleInputChange}
                    isError={isInputError}
                    value={inputValue}
                />
                <ButtonAdd
                    onClick={handleAddTodo}
                    type="add"
                />
            </WrapperInput>
            <WrapperBody>
                <div>
                    <Header />
                    <Lists />
                </div>
                <FloatingButton
                    onClick={handleOpenModal}
                />
                <Footer />
            </WrapperBody>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                type="add"
            />
        </Layout>
    )
}

export default TodoList