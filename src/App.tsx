import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import OfficialLayout from './layouts/OfficialLayout';
import NgoLayout from './layouts/NgoLayout';

// Official Pages
import OfficialDashboard from './pages/official/Dashboard';
import ProjectsList from './pages/official/ProjectsList';
import AIAlerts from './pages/official/AIAlerts';
import RandomInspection from './pages/official/RandomInspection';
import RandomVideo from './pages/official/RandomVideo';
import LiveMonitoring from './pages/official/LiveMonitoring';
import CCTVSurveillance from './pages/official/CCTVSurveillance';
import OfficialInspections from './pages/official/Inspections';
import AttendanceAnalytics from './pages/official/AttendanceAnalytics';
import OfficialCompliance from './pages/official/Compliance';
import Reports from './pages/official/Reports';

// NGO Pages
import NgoDashboard from './pages/ngo/Dashboard';
import NgoCompliance from './pages/ngo/Compliance';
import Attendance from './pages/ngo/Attendance';
import MyProject from './pages/ngo/MyProject';
import Staff from './pages/ngo/Staff';
import Beneficiaries from './pages/ngo/Beneficiaries';
import CCTVStatus from './pages/ngo/CCTVStatus';
import Documents from './pages/ngo/Documents';
import NgoInspections from './pages/ngo/Inspections';
import Notifications from './pages/ngo/Notifications';

import type { ReactNode } from 'react';

function RequireAuth({ children, role }: { children: ReactNode; role: string }) {
  const currentRole = localStorage.getItem('role');
  if (currentRole !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* Official Routes */}
        <Route path="/official" element={<RequireAuth role="official"><OfficialLayout /></RequireAuth>}>
          <Route index element={<OfficialDashboard />} />
          <Route path="projects" element={<ProjectsList />} />
          <Route path="monitoring" element={<LiveMonitoring />} />
          <Route path="cctv" element={<CCTVSurveillance />} />
          <Route path="inspections" element={<OfficialInspections />} />
          <Route path="random-inspection" element={<RandomInspection />} />
          <Route path="random-video" element={<RandomVideo />} />
          <Route path="attendance" element={<AttendanceAnalytics />} />
          <Route path="alerts" element={<AIAlerts />} />
          <Route path="compliance" element={<OfficialCompliance />} />
          <Route path="reports" element={<Reports />} />
          <Route path="*" element={<Navigate to="/official" replace />} />
        </Route>

        {/* NGO Routes */}
        <Route path="/ngo" element={<RequireAuth role="ngo"><NgoLayout /></RequireAuth>}>
          <Route index element={<NgoDashboard />} />
          <Route path="project" element={<MyProject />} />
          <Route path="staff" element={<Staff />} />
          <Route path="beneficiaries" element={<Beneficiaries />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="cctv" element={<CCTVStatus />} />
          <Route path="documents" element={<Documents />} />
          <Route path="inspections" element={<NgoInspections />} />
          <Route path="compliance" element={<NgoCompliance />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="*" element={<Navigate to="/ngo" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
