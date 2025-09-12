import React, { useEffect, useRef, useState } from 'react'
import { LuListTodo } from 'react-icons/lu'
import TodoItems from './TodoItems'



const getSavedTodos = (itemName) => {
    try {
        const saved = localStorage.getItem(itemName);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
};

const Todo = () => {
    const savedTodos = getSavedTodos("todos")
    const [todoList, setTodoList] = useState(savedTodos)
    const inputRef = useRef();
    const addTask = () => {
        const inputText = inputRef.current.value.trim();
        if (inputText === "")
            return null
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }
        setTodoList((prevTask) => [...prevTask, newTodo]);
        inputRef.current.value = ''
    }
    const deleteTask = (id) => {
        setTodoList((prevData) => prevData.filter(f => f.id !== id))
    }
    const markComplete = (id) => {
        console.log("mark complete", id);
        setTodoList((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo;
            })
        });

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList));
    }, [todoList])


    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            {/* title */}

            <div className="flex items-center mt-7 gap-2">
                <LuListTodo className='h-20' />
                <h1 className="text-3xl font-semibold">To-Do List</h1>
            </div>
            <div className='flex items-center my-7 bg-gray-200 rounded-full'>
                <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                <button className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'
                    onClick={addTask}
                >Add + </button>
            </div>


            {/* ---- todo list ----- */}
            <div>
                {
                    (todoList.length > 0) ? todoList.map((todo, index) => {
                        return (
                            <TodoItems
                                key={index}
                                isComplete={todo.isComplete}
                                id={todo.id}
                                text={todo.text}
                                onDelete={deleteTask}
                                markComplete={markComplete} />
                        )
                    }) : <p>No pending task!</p>
                }
            </div>
        </div>
    )
}

export default Todo