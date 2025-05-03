import React, { useState } from 'react'
import '../Componentscss/Counter.css'

const Todo = () => {
    const [items, setItem] = useState([])
    const [employee, setEmployee] = useState("")
    const [editIndex, setEditIndex] = useState(null);

    const additems = () => {
        if (!employee.trim()) return alert("Please enter a name!");

        if (editIndex !== null) {
            const updatedItems = [...items];
            updatedItems[editIndex].name = employee;
            setItem(updatedItems);
            setEditIndex(null);
            alert(`${employee} updated successfully`);
        } else {
            alert(`${employee} added successfully`);
            setItem([...items, {
                id: Date.now(),
                name: employee
            }]);
        }

        setEmployee("");
    };

    const deleteitems = () => {
        setItem([])

        setTimeout(() => {
            alert("all employee are successfully deleted")
        }, 1000);
    }

    const editfunction = (index) => {
        setEmployee(items[index].name);
        setEditIndex(index);
    };
    const deletefunction = (index) => {
        const updatedList = items.filter((_, i) => i !== index);
        setItem(updatedList);
        setTimeout(() => {
            alert(`Employee deleted successfully`);
        }, 500);
    };
    return (
        <div>
            <h1 className='text-center text-primary'> Add Employee Todo</h1>
            <div className="box2">
                <input className='ms-3 me-2 center' type="text" value={employee} onChange={(e) => setEmployee(e.target.value)} />
                <button className='btn btn-dark' onClick={() => additems()}> {editIndex !== null ? "Update Employee" : "Add Employee"}</button>
                <button className='btn btn-danger ms-2' onClick={() => deleteitems()}>Delete All Employee</button>
                <ol >
                    {
                        items.map((item, index) => {
                            return (
                                <div className='mt-2 itembox text-black' key={item.id}>


                                    <li className='text-2xl text-blue-600' key={item.id}>{item.name}</li>
                                    <button onClick={() => editfunction(index)} className='btn btn-primary ms-2'>Edit</button>
                                    <button onClick={() => deletefunction(index)} className='btn btn-danger ms-2'>Delete</button>
                                </div>
                            )
                        })


                    }
                </ol>
            </div>

        </div>
    )
}

export default Todo