import React from 'react';
import { Link } from 'react-router-dom';

type ErrorPageProps = {
  errorMessage?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ errorMessage }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-6">
          {errorMessage || "Page Not Found"}
        </p>
        <div className="space-x-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Go to Home
          </Link>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
