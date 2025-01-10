import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const EmailSection = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      navigate('/login', { state: { email } });
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div className='text-white'>
      <h2 className='text-center text-[1.125rem] mt-[64px]'>
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className='flex gap-3 pt-[16px] justify-center'>
        <input
          className='bg-transparent border border-gray-600 rounded-[5px] p-2 text-[1rem] w-[600px] h-[60px]'
          type='email'
          placeholder='Email address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className='text-[1.5rem] w-[200px] bg-[#e50914] rounded-[5px]'
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default EmailSection;
