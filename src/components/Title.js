import '../styles/Title.css'
import { name } from '../fetures/name'

const Title = () => {

    return (
        <div className="title">
            <h1 className="text-4xl">Todo List App 📝</h1>
            <i className="credit text-sm">By: {name}</i>
        </div>
    )
}

export default Title