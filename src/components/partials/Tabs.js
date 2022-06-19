import ButtonTabs from './ButtonTabs'
import { useTab } from '../../fetures/tab-contex'
import '../../styles/partials/Tabs.css'

const Tabs = ({ isFloat }) => {

    const { tab, dispatch } = useTab();

    return (
        <div className={`tabs ${isFloat && `float ${tab.isOpen ? 'float-show' : 'float-hidden'}`}`}>
            <ButtonTabs
                label="All"
                isActive={tab.tab === 'all'}
                onClick={() => dispatch({ type: 'SET_TAB', payload: 'all' })}
            />
            <ButtonTabs
                label="Todo's"
                isActive={tab.tab === 'todo'}
                onClick={() => dispatch({ type: 'SET_TAB', payload: 'todo' })}
            />
            <ButtonTabs
                label="Completed"
                isActive={tab.tab === 'completed'}
                onClick={() => dispatch({ type: 'SET_TAB', payload: 'completed' })}
            />
        </div>
    )
}

export default Tabs