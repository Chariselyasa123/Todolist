import { useTab } from '../../fetures/tab-contex'
import '../../styles/partials/FloatingTabs.css'

const FloatingTabs = () => {

    const { tab, dispatch } = useTab();

    return (
        <button
            className={`float float-button float-button-tabs ${tab.isOpen ? 'todo-neumorphism-inside' : 'todo-neumorphism-outside'}`}
            onClick={() => dispatch({ type: 'TOGLE_TABS' })}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        </button>
    )
}

export default FloatingTabs