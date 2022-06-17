import { useState } from 'react'
import Layout from './Layout';
import WrapperBody from './WrapperBody';
import Header from './Header';
import Lists from './Lists';
import WrapperInput from './WrapperInput';
import InputText from './partials/InputText';
import ButtonAdd from './partials/ButtonAdd';
import { useTodo } from '../fetures/todo-contex';

const TodoList = () => {
    const { dispatch } = useTodo();

    const [inputValue, setInputValue] = useState('')
    const [isInputError, setIsInputError] = useState(false)

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

    return (
        <Layout>
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
                <Header />
                <Lists />
            </WrapperBody>
        </Layout>
    )
}

export default TodoList