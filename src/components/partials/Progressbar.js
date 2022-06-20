import '../../styles/partials/Progressbar.css'
import { useState, useEffect, useRef } from 'react';
import { useTodo } from '../../fetures/todo-contex';

const Progressbar = () => {
    const [progress, setprogress] = useState(0);
    const [circle, setCircle] = useState({})
    const { todos } = useTodo()
    const infiniteLoopStopper = useRef(0)

    console.log(infiniteLoopStopper);


    useEffect(() => {
        const todoCount = todos.length;
        const doneTodoCount = todos.filter(todo => todo.isDone).length;
        const progress = Math.round((doneTodoCount / todoCount) * 100);

        const radius = 24.4;
        const circumference = Math.PI * (radius * 2);
        setCircle(prev => ({
            ...prev,
            percentage: progress,
            circumference: circumference
        }))

        const timer = setInterval(() => {
            setprogress(prev => {
                if (infiniteLoopStopper.current >= 201) {
                    clearInterval(timer);
                    infiniteLoopStopper.current = 0;
                    return prev;
                }
                infiniteLoopStopper.current++;
                // increase previous progress by 1 if it's less than progress
                // clear interval if previous progress is equal to progress
                if (prev < progress) {
                    return prev + 1;
                }
                // decrease previous progress by 1 if it's more than progress
                // clear interval if previous progress is equal to progress
                if (prev > progress) {
                    return prev - 1;
                }
                clearInterval(timer);
                infiniteLoopStopper.current = 0;
                return prev;
            });
        }, todoCount * 10);

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