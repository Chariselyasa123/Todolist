import '../../styles/partials/Progressbar.css'
import { useState, useEffect } from 'react';
import { useTodo } from '../../fetures/todo-contex';

const Progressbar = () => {
    const [progress, setprogress] = useState(0);
    const [circle, setCircle] = useState({})
    const { todos } = useTodo()

    const getPercentage = () => {
        const todoCount = todos.length;
        const doneTodoCount = todos.filter(todo => todo.isDone).length;
        const progress = Math.round((doneTodoCount / todoCount) * 100);
        return progress;
    }

    useEffect(() => {
        const progress = getPercentage();

        const radius = 24.4;
        const circumference = Math.PI * (radius * 2);
        setCircle({
            ...circle,
            percentage: progress,
            circumference: circumference
        })

        // increase progress bar
        const timer = setInterval(() => {
            setprogress(prev => {
                if (prev >= progress) {
                    clearInterval(timer);
                    return progress;
                } else {
                    return prev + 1;
                }
            });
        }, todos.length * 10);
    }, [todos])

    return (
        <div className="wrapper-progressbar">
            <div className="circle1">
                <div className="circle2 text-sm">{progress}%</div>
            </div>
            <svg className='circle'>
                <circle cx="28px" cy="28px" r="24.4px" strokeDasharray={circle.circumference} strokeDashoffset={circle.circumference * (1 - circle.percentage / 100)} />
            </svg>
        </div>
    )
}

export default Progressbar