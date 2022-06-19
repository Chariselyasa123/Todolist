import '../../styles/partials/Footer.css'
import {name} from '../../fetures/name'

const Footer = () => {
    return (
        <div className="footer">
            <h4>Todo List App</h4>
            <i className="text-sm">By: {name}</i>
        </div>
    )
}

export default Footer