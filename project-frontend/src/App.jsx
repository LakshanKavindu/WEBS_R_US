import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Outlet /> {/* This is where the routed components will be rendered */}
      </div>
    </div>
  );
}