import '../../styles/partials/ButtonTabs.css'

const ButtonTabs = ({ label, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`button-tabs todo-neumorphism-outside ${isActive && 'active'}`}
        >
            {label}
        </button>
    )
}

export default ButtonTabs