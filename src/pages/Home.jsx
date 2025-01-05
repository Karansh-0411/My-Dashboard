import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-6 text-3xl font-bold text-center">Welcome to Personal Dashboard</h1>
      <p className="mb-4 text-center text-gray-600">A secure way to manage your personal data.</p>
      <button
        onClick={() => navigate('/signup')}
        className="px-6 py-2 mb-3 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Get Started
      </button>
      <button
        onClick={() => navigate('/login')}
        className="px-6 py-2 text-white bg-gray-500 rounded hover:bg-gray-600"
      >
        Login
      </button>
    </div>
  );
}

export default Home;
