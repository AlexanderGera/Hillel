import './App.css'
import {MainContentWrapper} from "./components/MainContentWrapper/MainContentWrapper.jsx";

import {TodoInput} from "./components/TodoInput/TodoInput.jsx";
import {TodoList} from "./components/TodoList/TodoList.jsx";
import {useState} from "react";


function App() {
//массив для хранения задач
    let [toDoList, setToDoList] = useState([]);

    // функция для добавления задач
    function addNewTask(userInput) {
        if (userInput) {
            let newTask = {
                id: Date.now(),
                task: userInput,
                completed: false,
            };
            setToDoList([...toDoList, newTask])
        }
    }

    console.log(toDoList);

    // функция для удаления задач
    function removeTask(id) {
        setToDoList([...toDoList.filter((todo) => todo.id !== id)])
    }

    function changeTaskStatus(id) {
        setToDoList([...toDoList.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : {...todo})]);
    }

    return (
        <>

            <MainContentWrapper>
                <header className="header">
                    <span className="header_title">Numbers of tasks in the Tasks-list: {toDoList.length}</span>
                </header>
                <TodoInput addNewTask={addNewTask}/>
                {toDoList.map((todo) => (
                    <TodoList
                        todo={todo}
                        key={todo.id}
                        removeTask={removeTask}
                        changeTaskStatus={changeTaskStatus}
                    />
                ))}


            </MainContentWrapper>

        </>

    )
}

export default App
