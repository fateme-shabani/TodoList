import React from 'react';

export function TodoItem({ todo, deleteTodo, startEditing }) {
  return (
    <li className="flex items-center p-2 bg-white rounded-md shadow">
      <span className="flex-grow bg-red-100 text-left">{todo.text}</span>
      <div className='flex gap-2'>
      <button onClick={() => startEditing(todo.id, todo.text)} className="flex items-center justify-center w-14 h-10 bg-yellow-100 text-yellow-500 text-center">
        ویرایش
      </button>
      <button onClick={() => deleteTodo(todo.id)} className="flex items-center justify-center w-14 h-10 bg-red-100 text-red-500 text-center">
        حذف
      </button>
      </div>
    </li>
  );
}

