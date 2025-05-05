import React, { useState } from 'react';
import '../Componentscss/Form.css';
import Buttoncomp from './Buttoncomp';
import Inputcomp from './Inputcomp';
import { toast } from 'react-toastify';

const Form = () => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [dob, setDob] = useState('');

    // Error message states
    const [errors, setErrors] = useState({
        name: '',
        city: '',
        dob: ''
    });

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            name: '',
            city: '',
            dob: ''
        };

        // Name validation
        if (!name) {
            newErrors.name = 'Name is required';
            valid = false;
        }

        // City validation
        if (!city) {
            newErrors.city = 'City is required';
            valid = false;
        }

        // Date of birth validation (checking if the date is not in the future)
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
        <div className="container">
            <div className="row">
                <div className="col-md-10 formcontainer py-3">
                    <form onSubmit={formdataa}>
                        {/* Name Input */}
                        <Inputcomp
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Your Name"
                        />
                        {errors.name && <span className="text-red-500">{errors.name}</span>}
                        <br />

                        {/* City Input */}
                        <Inputcomp
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter Your City"
                        />
                        {errors.city && <span className="text-red-500">{errors.city}</span>}
                        <br />

                        {/* Date of Birth Input */}

                        <input
                            type="date"
                            className="mb-2"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            placeholder='Enter Your Dob'
                            required
                        />
                        {errors.dob && <span className="text-red-500">{errors.dob}</span>}
                        <br />

                        {/* Submit Button */}
                        <Buttoncomp type="submit" variant="danger" className="mt-1">
                            Submit
                        </Buttoncomp>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
