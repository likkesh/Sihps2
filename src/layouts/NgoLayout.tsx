import { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Building, Users, CalendarCheck, Camera, 
  FileText, FileCheck, ShieldAlert, Bell, LogOut, Menu, UserCircle 
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const sidebarLinks = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/ngo' },
  { name: 'My Project', icon: Building, path: '/ngo/project' },
  { name: 'Staff', icon: Users, path: '/ngo/staff' },
  { name: 'Beneficiaries', icon: Users, path: '/ngo/beneficiaries' },
  { name: 'Attendance', icon: CalendarCheck, path: '/ngo/attendance' },
  { name: 'CCTV Status', icon: Camera, path: '/ngo/cctv' },
  { name: 'Documents', icon: FileText, path: '/ngo/documents' },
  { name: 'Inspections', icon: FileCheck, path: '/ngo/inspections' },
  { name: 'Compliance', icon: ShieldAlert, path: '/ngo/compliance' },
  { name: 'Notifications', icon: Bell, path: '/ngo/notifications' },
];

export default function NgoLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={twMerge(
        "bg-white text-slate-800 border-r border-slate-200 flex-shrink-0 transition-all duration-300 flex flex-col",
        sidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="h-16 flex items-center justify-center border-b border-slate-200 px-4">
          <Building className="w-8 h-8 text-primary-600" />
          {sidebarOpen && <span className="ml-3 font-bold text-lg text-primary-900 truncate">NGO Portal</span>}
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/ngo' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "flex items-center px-3 py-3 rounded-lg transition-colors group",
                    isActive ? "bg-primary-50 text-primary-700 font-semibold" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                  title={!sidebarOpen ? link.name : undefined}
                >
                  <link.icon className={clsx("w-5 h-5 flex-shrink-0", isActive ? "text-primary-600" : "text-slate-400 group-hover:text-slate-600")} />
                  {sidebarOpen && <span className="ml-3 text-sm">{link.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 z-10 flex-shrink-0">
          <div className="flex items-center">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-slate-500 hover:text-slate-700 mr-4 focus:outline-none">
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-slate-800 hidden sm:block">Sunrise Welfare Centre</h1>
          </div>
          <div className="flex items-center space-x-6">
            <span className="text-sm font-medium text-slate-500 hidden md:block">
              {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
            <button className="relative text-slate-500 hover:text-primary-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-orange-500 ring-2 ring-white"></span>
            </button>
            <div className="flex items-center border-l pl-6 border-slate-200">
              <UserCircle className="w-8 h-8 text-slate-400" />
              <div className="ml-3 hidden sm:block">
                <p className="text-sm font-medium text-slate-700">Ramesh Kumar</p>
                <p className="text-xs text-slate-500">Project In-charge</p>
              </div>
              <button onClick={handleLogout} className="ml-4 text-slate-400 hover:text-red-600 transition-colors" title="Logout">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
