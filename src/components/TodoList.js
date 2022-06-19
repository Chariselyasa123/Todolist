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
import '../styles/TodoList.css';
import Tabs from './partials/Tabs';
import FloatingTabs from './partials/FloatingTabs';

const TodoList = () => {
    const { dispatch } = useTodo();

    const [inputValue, setInputValue] = useState('')
    const [isInputError, setIsInputError] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        setIsInputError(false)
    }

    const addTodo = () => {
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

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo()
        }
    }

    const handleAddTodo = () => {
        addTodo();
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
                <Tabs />
                <InputText
                    onChange={handleInputChange}
                    isError={isInputError}
                    value={inputValue}
                    onKeyPress={handleEnterKeyPress}
                />
                <ButtonAdd
                    onClick={handleAddTodo}
                    type="add"
                />
            </WrapperInput>
            <WrapperBody>
                <div className="todo-list">
                    <Header />
                    <Lists />
                </div>

                {/* This only show on responsive view */}
                {/* <div className="hidden-gem"></div> */}
                <FloatingButton
                    onClick={handleOpenModal}
                />
                <FloatingTabs />
                <Tabs isFloat={true} />
                <Footer />
                {/* This only show on responsive view */}

            </WrapperBody>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                type="add"
                todo={{ label: '' }}
            />
        </Layout>
    )
}

export default TodoList