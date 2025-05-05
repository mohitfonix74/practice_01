import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Buttoncomp from './Buttoncomp';
import Inputcomp from './Inputcomp';

const Apiform = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState('');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch users from API
    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get('https://68188b385a4b07b9d1cfa5c6.mockapi.io/api/v1/user');
    
            // Ensure loader stays for at least 2 seconds
            setTimeout(() => {
                setUsers(response.data);
                setLoading(false);
            }, 2000);
    
        } catch (err) {
            setTimeout(() => {
                setError('Failed to fetch users. Please try again.');
                setLoading(false);
            }, 1500);
        }
    };
    
    // Load users on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { name, city, dob };

        try {
            await axios.post('https://68188b385a4b07b9d1cfa5c6.mockapi.io/api/v1/user', payload);
            toast.success('Form submitted!');
            setName('');
            setCity('');
            setDob('');
            fetchUsers(); // Refresh user list
        } catch (error) {
            toast.error('Something went wrong while submitting');
        }
    };

    return (
        <div className="min-h-screen  py-10 px-4">
            {/* Form Card */}
            <div className="max-w-xl mx-auto bg-white shadow rounded-md p-5 mt-5 mb-10">
                <form onSubmit={handleSubmit}>
                    <h2 className="text-xl font-semibold mb-4 text-center">Add New User</h2>
                    <Inputcomp
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="mb-3"
                    />
                    <Inputcomp
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Enter your city"
                        className="mb-3"
                    />
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                        className="mb-4 w-full p-2 border border-gray-300 rounded"
                    />
                    <Buttoncomp
                        type="submit"
                        variant="primary"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Submit
                    </Buttoncomp>
                </form>
            </div>

            {/* User List Section */}
            <div className="max-w-6xl mx-auto">
                {/* Loading Spinner */}
                {loading && (
                    <div className="flex justify-center items-center py-10">
                        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
                    </div>
                )}

                {/* Error Message */}
                {error && (
                    <div className="text-center text-red-500 font-semibold mb-4">{error}</div>
                )}

                {/* Empty Data Message */}
                {!loading && !error && users.length === 0 && (
                    <div className="text-center text-gray-500">No users found.</div>
                )}

                {/* User Cards */}
                {!loading && !error && users.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300"
                            >
                                <h3 className="text-lg font-bold text-gray-800 capitalize">{user.name}</h3>
                                <p className="text-gray-600 capitalize"><strong>City:</strong> {user.city}</p>
                                <p className="text-gray-600"><strong>DOB:</strong> {user.dob}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Apiform;
