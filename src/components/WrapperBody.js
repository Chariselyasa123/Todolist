import '../styles/WrapperBody.css'

const WrapperBody = ({ children }) => {
    return (
        <div className="wrapper-todolist todo-neumorphism-outside">
            {children}
        </div>
    )
}

export default WrapperBody