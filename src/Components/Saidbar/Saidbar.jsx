import { Link } from "react-router-dom";

export default function Saidbar() {
  return (
    <div className="h-screen bg-gray-800 text-white p-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
           Home
        </Link>
        <Link to="/allemployees" className="hover:bg-gray-700 p-2 rounded">
           Employees List
        </Link>
        <Link to="/formdata" className="hover:bg-gray-700 p-2 rounded">
           Add Employee
        </Link>
        <Link to="/reports" className="hover:bg-gray-700 p-2 rounded">
           Reports
        </Link>
        <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">
           Settings
        </Link>
      </nav>
    </div>
  );
}
