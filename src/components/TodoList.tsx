import { isVisible } from "@testing-library/user-event/dist/utils"
import { useState } from
interface TodoListProps {
    text: string,
};
export const TodoList = ({text}: TodoListProps) => {
    consr [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    }
    return (
        <div>
            <p>Todo List</p>
            <p>{text}</p>
            <button>Click me</button>
            <button data-test-id='clickMe' onclick={handleClick}>Click me2</button>
            {isVisible && (
                <p data-testid='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere amet ratione ipsum officia odio non hic asperiores laborum repellat harum.</p>
            )}
        </div>
    )
}