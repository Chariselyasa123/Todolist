import '../styles/Header.css'
import { useTab } from '../fetures/tab-contex'
import Progressbar from './partials/Progressbar';

const Header = () => {
    const { tab } = useTab();

    return (
        <div className="header">
            <h1 className="text-4xl">
                {tab.tab === 'all' && "Today's Tasks"}
                {tab.tab === 'todo' && "Current Tasks"}
                {tab.tab === 'completed' && "Completed Tasks"}
            </h1>
            <Progressbar />
        </div>
    )
}

export default Header