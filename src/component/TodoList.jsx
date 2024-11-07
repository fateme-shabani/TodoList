import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const onSubmit = (data) => {
    if (editingId) {
      setTodos(todos.map(todo => 
        todo.id === editingId ? { ...todo, text: data.todo } : todo
      ));
      setEditingId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: data.todo }]);
    }
    reset(); 
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setValue('todo', text); 
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-md shadow-lg">
      <h1 className="text-xl text-gray-700 font-bold mb-4">لیست وظایف</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex mb-4">
        <input
          {...register('todo', { required: true })}
          placeholder="افزودن وظیفه جدید"
          className="flex-grow p-2 border rounded-md"
        />
        <button type="submit" className="flex items-center justify-center w-14 h-10 bg-teal-100 text-teal-500 p-2 rounded-md ml-2">
          {editingId ? 'ذخیره' : 'افزودن'}
        </button>
      </form>

      <ul className="space-y-2">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            startEditing={startEditing}
          />
        ))}
      </ul>
    </div>
  );
}

