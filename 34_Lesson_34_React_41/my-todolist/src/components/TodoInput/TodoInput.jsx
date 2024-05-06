import {useState} from "react";



export function TodoInput({addNewTask}) {
let [userInput, setUserInput] = useState('');

    function putChange(event) {
        setUserInput(event.target.value);
    }

    function putSubmit(event) {
        event.preventDefault();
        addNewTask(userInput);
        setUserInput('');
    }

    return <>
        <form onSubmit={putSubmit}>
            <input
                className='todo_input'
                type="text"
                placeholder='Put new task here...'
                onChange={putChange}
                value={userInput}
            />
            <button className="button">Add new task</button>

        </form>

    </>;
}