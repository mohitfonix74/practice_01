import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Todo = () => {
    const [items, setItem] = useState([]);
    const [employee, setEmployee] = useState('');
    const [editIndex, setEditIndex] = useState(null);

    const additems = () => {
        if (!employee.trim()) return toast.error("Please enter a name!");

        if (editIndex !== null) {
            const updatedItems = [...items];
            const oldName = updatedItems[editIndex].name;
            updatedItems[editIndex].name = employee;
            setItem(updatedItems);
            setEditIndex(null);
            toast.success(`Updated "${oldName}" to "${employee}"`);
        } else {
            setItem([
                ...items,
                {
                    id: Date.now(),
                    name: employee,
                },
            ]);
            toast.success(`"${employee}" added successfully`);
        }

        setEmployee('');
    };

    const deleteitems = () => {
        if (items.length === 0) {
            toast.error("No employees to delete!");
            return;
        }

        setItem([]);
        setTimeout(() => {
            toast.success("All employees have been successfully deleted");
        }, 500);
    };

    const editfunction = (index) => {
        setEmployee(items[index].name);
        setEditIndex(index);
    };

    const deletefunction = (index) => {
        const deletedName = items[index].name;
        const updatedList = items.filter((_, i) => i !== index);
        setItem(updatedList);
        setTimeout(() => {
            toast.success(`"${deletedName}" deleted successfully`);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-cyan-100 to-blue-200 flex items-center justify-center p-4">
            <div className="bg-white bg-opacity-70 backdrop-blur-md shadow-lg rounded-2xl p-4 w-full max-w-lg sm:max-w-xl">
                <h1 className="text-3xl font-bold text-center text-black mb-6 pb-3">Employee Todo App</h1>

                {/* Input and Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-between sm:gap-4 mb-6 w-full">
                    <input
                        className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-800 focus:outline-none focus:ring-2 mt-4 focus:ring-blue-400 transition"
                        type="text"
                        placeholder="Enter employee name"
                        value={employee}
                        onChange={(e) => setEmployee(e.target.value)}
                    />
                    <div className="flex gap-4 mt-4 sm:mt-0">
                        <button
                            onClick={additems}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                        >
                            {editIndex !== null ? 'Update' : 'Add'}
                        </button>
                        <button
                            onClick={deleteitems}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                        >
                            Delete All
                        </button>
                    </div>
                </div>

                {/* Employee List */}
                <ol className="space-y-4">
                    {items.map((item, index) => (
                        <li
                            key={item.id}
                            className="flex flex-col sm:flex-row items-center justify-between bg-white rounded-xl px-4 py-3 shadow-md sm:px-6"
                        >
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <span className="font-bold text-gray-600 text-lg sm:text-xl">{index + 1}.</span>
                                <span className="text-lg font-medium text-blue-700 capitalize">{item.name}</span>
                            </div>
                            <div className="flex gap-2 mt-4 sm:mt-0">
                                <button
                                    onClick={() => editfunction(index)}
                                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg transition"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deletefunction(index)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Todo;
