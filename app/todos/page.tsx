"use client";

import React, { useState } from 'react';

const TodoApp: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-black">Todo List</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        className="border p-2 w-full rounded mb-2 text-black"
                        placeholder="Add a new todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 text-white p-2 mt-2 w-full"
                        onClick={addTodo}
                    >
                        Add Todo
                    </button>
                </div>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="border-b p-2 text-black text-lg flex justify-between">
                            {todo}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TodoApp;