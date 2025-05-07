import React, { useState } from 'react';
import '../Componentscss/Form.css';
import Buttoncomp from './Buttoncomp';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Form = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState('');
    const [errors, setErrors] = useState({ name: '', city: '', dob: '' });

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', city: '', dob: '' };

        if (!name) {
            newErrors.name = 'Name is required';
            valid = false;
        }
        if (!city) {
            newErrors.city = 'City is required';
            valid = false;
        }
        if (!dob) {
            newErrors.dob = 'Date of birth is required';
            valid = false;
        } else {
            const currentDate = new Date();
            const dobDate = new Date(dob);
            if (dobDate > currentDate) {
                newErrors.dob = 'Date of birth cannot be in the future';
                valid = false;
            }
        }

        setErrors(newErrors);
        return valid;
    };

    const formdataa = (e) => {
        e.preventDefault();
        if (validateForm()) {
            toast.success('Form submitted successfully');
            setName('');
            setCity('');
            setDob('');
        } else {
            toast.error('Please fill out the form correctly');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-5 sm:p-10"
            >
                <h2 className="text-3xl font-bold text-center text-black mb-8">Student Registration</h2>
                <form onSubmit={formdataa} className="space-y-6">
                    
                    {/* Name */}
                    <div className="relative">
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 py-2 text-gray-700 placeholder-gray-400"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* City */}
                    <div className="relative">
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter your city"
                            className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 py-2 text-gray-700 placeholder-gray-400"
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                    </div>

                    {/* DOB */}
                    <div className="relative">
                        <input
                            type="date"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            className="w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 py-2 text-gray-700"
                        />
                        {errors.dob && <p className="text-red-500 text-sm mt-1">{errors.dob}</p>}
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                        <Buttoncomp type="submit" variant="primary" className="w-full">
                            Submit
                        </Buttoncomp>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default Form;
