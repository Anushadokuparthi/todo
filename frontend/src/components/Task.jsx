import React from 'react';

function Task({task}) {
  return (
    <div className="shadow-inner border rounded w-full flex justify-between py-1 px-3 items-center mt-4">
        <div className="text-gray-700">{task}</div>
        <div className="flex justify-end grow">
            <button className="text-purple-700 p-2 leading-tight ml-3 text-sm">
                <span className="material-symbols-outlined">
                    edit
                </span></button>
            <button className="text-red-700 p-2 leading-tight ml-3 text-sm">
            <span className="material-symbols-outlined">
                delete
            </span>
            </button>
        </div>
    </div>
  )
}

export default Task