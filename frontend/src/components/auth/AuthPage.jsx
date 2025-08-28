import React, { useState } from 'react';
import { login, register } from '../../services/authService';
import { LeafIcon } from '../common/Icons';

const AuthPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let data;
      if (isLogin) {
        data = await login({ email, password });
      } else {
        data = await register({ email, password, username: email }); // Or a proper username field
      }
      onLogin(data.user);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col items-center">
          <LeafIcon className="h-16 w-16 text-primary" />
          <h2 className="mt-4 text-3xl font-bold text-center text-gray-900">
            {isLogin ? 'Welcome Back!' : 'Create an Account'}
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            {isLogin ? 'Log in to manage your waste.' : 'Join us to make your city cleaner.'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 font-semibold text-white bg-primary rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300"
            >
              {isLogin ? 'Log In' : 'Register'}
            </button>
          </div>
        </form>

        <p className="text-sm text-center text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button onClick={() => setIsLogin(!isLogin)} className="ml-1 font-medium text-primary hover:underline">
            {isLogin ? 'Register' : 'Log In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;