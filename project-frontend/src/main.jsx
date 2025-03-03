import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/Dashboard';
import Interactions from './pages/Interactions';
import './index.css'
import Complaints from './pages/Complaints';
import Customer from './pages/Customer';
import Notifications from './pages/Notifications';
import Activity from './pages/Activity';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="interactions" element={<Interactions />} />
          <Route path="complaint-handling" element={<Complaints />} />
          <Route path="customer-management" element={<Customer />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="activity-log" element={<Activity />} />    
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
