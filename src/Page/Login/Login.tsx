/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login: React.FC = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({

        email: '',
        password: '',
    });
    const [errors, setErrors] = useState<any>({});


    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.email) newErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email format is invalid.";

        if (!formData.password) newErrors.password = "Password is required.";
        return newErrors;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            // Simulate successful registration
            toast.success("Log In successful!");
            navigate('/login');
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="bg-white relative lg:py-20">
            <div className="flex flex-col items-center justify-between max-w-7xl mx-auto lg:flex-row xl:px-5 py-10">
                {/* Image Section */}
                <div className="flex flex-col items-center w-full lg:flex-row lg:pt-20">
                    <div className="w-full bg-cover max-w-md lg:max-w-2xl lg:w-7/12">
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <img
                                src="https://res.cloudinary.com/macxenon/image/upload/v1631570592/Run_-_Health_qcghbu.png"
                                alt="Sign Up Illustration"
                                className="btn-"
                            />
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className="w-full mt-20 lg:mt-0 lg:w-5/12 relative z-10 max-w-2xl">
                        <div className="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                            <p className="w-full text-4xl font-medium text-center leading-snug font-serif">
                                Sign Up for an Account
                            </p>

                            {/* Form Fields */}
                            <form className="w-full mt-6 space-y-8" onSubmit={handleSubmit}>

                                <div className="relative form-control">
                                    <label className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        placeholder="example@domain.com"
                                        type="email"
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 px-4 mt-2 text-base bg-white border-gray-300 rounded-md"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div className="relative form-control">
                                    <label className="bg-white px-2 -mt-3 ml-2 font-medium text-gray-600 absolute" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        placeholder="Password"
                                        type="password"
                                        className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 px-4 mt-2 text-base bg-white border-gray-300 rounded-md"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                    />
                                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                                </div>

                                {/* Submit Button */}
                                <div className="relative">
                                    <button className="w-full py-4 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                                        Log In
                                    </button>
                                </div>
                            </form>

                            <h3 className="mt-5">
                                Create an account?{" "}
                                <Link to="/register" className="text-blue-500">
                                    Sign In Instead
                                </Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
