import {  Outlet } from 'react-router-dom';
import SideBar from './components/SideBar';

export default function App() {
  return (
    <div className="min-h-screen max-h-screen flex">
      <SideBar />
      <div className="md:w-4/5 w-full max-h-screen overflow-y-scroll">
        <Outlet /> 
      </div>
    </div>
  );
}