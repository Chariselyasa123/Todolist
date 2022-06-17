import '../styles/WrapperBody.css'

const WrapperBody = ({ children }) => {
    return (
        <div className="wrapper-todolist">
            {children}
        </div>
    )
}

export default WrapperBody