import { useEffect, useState } from 'react';
import API from '../utils/api';
import NotesWidget from '../components/widgets/NotesWidget';
import WeatherWidget from '../components/widgets/WeatherWidget';
import CalenderWidget from '../components/widgets/CalenderWidget';
import QuoteWidget from '../components/widgets/QuoteWidget';

function Dashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found. Please login again.');
        }

        const response = await API.get('/api/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      }
    };

    fetchData();
  }, []);

  console.log(data);
  return (
    <>
      <h1 className="font-extrabold text-5xl">My Dashboard</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        <WeatherWidget />
        <NotesWidget />
        <CalenderWidget />
        <QuoteWidget />
      </div>
    </>
    
  );
}

export default Dashboard;
