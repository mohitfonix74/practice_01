import React, { useEffect, useState } from 'react';
import { FiUser, FiMail, FiMapPin } from 'react-icons/fi';

const UserCards = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 p-4"> User Cards</h1>

            {loading ? (
                <p className="text-center text-gray-500 text-xl">Loading users...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-10">
                    {users.map((user) => (
                        <div key={user.id} className="bg-white p-5 m-10 rounded-2xl shadow-md hover:shadow-lg transition-all">
                            <div className="flex m-10 items-center space-x-4 mb-4">
                                <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center">
                                    <FiUser size={28} />
                                </div>
                                <div className='ms-2'>
                                    <h5 className="text-lg font-semibold text-gray-800">{user.name}</h5>
                                    <p className="text-sm text-gray-500">{user.username}</p>
                                </div>
                            </div>
                            <div className="text-sm text-gray-700 space-y-1">
                                <p className="flex items-center gap-2"><FiMail /> {user.email}</p>
                                <p className="flex items-center gap-2"><FiMapPin /> {user.address.city}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserCards;
