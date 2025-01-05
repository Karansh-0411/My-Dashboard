import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdviceWidget = () => {
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
    } catch (error) {
      console.error('Error fetching advice:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-widget p-4 rounded-lg shadow-md bg-gray-100 flex flex-col items-center ">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <p className="advice-text text-xl italic text-center">"{advice}"</p>
      )}
      <button
        className="refresh-btn mt-4 px-4 py-2 rounded bg-blue-500 text-white"
        onClick={fetchAdvice}
      >
        Get New Advice
      </button>
    </div>
  );
};

export default AdviceWidget;
