import { Building2, FileCheck, Camera, AlertTriangle, ShieldAlert, TrendingUp } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { mockAlerts } from '../../data/mockData';

const inspectionData = [
  { name: 'Apr', completed: 120 },
  { name: 'May', completed: 135 },
  { name: 'Jun', completed: 150 },
  { name: 'Jul', completed: 145 },
  { name: 'Aug', completed: 160 },
  { name: 'Sep', completed: 172 },
];



export default function OfficialDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Dashboard Overview</h2>
        <button className="btn-primary">Generate Report</button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 border-l-4 border-l-primary-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Projects</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">248</h3>
            </div>
            <div className="p-3 bg-primary-50 rounded-lg">
              <Building2 className="w-6 h-6 text-primary-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" /> +12 this year
          </p>
        </div>

        <div className="card p-6 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Active Institutes</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">186</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-green-600 mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" /> Active in 10 districts
          </p>
        </div>

        <div className="card p-6 border-l-4 border-l-orange-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Inspections Pending</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">24</h3>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <FileCheck className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            172 completed this month
          </p>
        </div>

        <div className="card p-6 border-l-4 border-l-red-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Active Alerts</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">17</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <p className="text-sm text-red-600 mt-4">
            3 High Priority
          </p>
        </div>

        <div className="card p-6 border-l-4 border-l-green-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">CCTV Online</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">214</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <Camera className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-sm text-red-500 mt-4">
            34 Offline
          </p>
        </div>

        <div className="card p-6 border-l-4 border-l-red-600">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Compliance Issues</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">12</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <ShieldAlert className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <p className="text-sm text-slate-500 mt-4">
            Requires immediate attention
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="card p-6 col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Monthly Inspection Completion</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={inspectionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip />
                <Area type="monotone" dataKey="completed" stroke="#3b82f6" fillOpacity={1} fill="url(#colorCompleted)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="card p-0 flex flex-col">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-800">Recent Alerts</h3>
            <span className="text-sm text-primary-600 font-medium cursor-pointer">View All</span>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {mockAlerts.map(alert => (
              <div key={alert.id} className="p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors">
                <div className="flex items-start">
                  <div className={`mt-1 flex-shrink-0 w-2.5 h-2.5 rounded-full ${
                    alert.severity === 'HIGH' ? 'bg-red-500' :
                    alert.severity === 'MEDIUM' ? 'bg-orange-500' : 'bg-yellow-500'
                  }`}></div>
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-slate-800">{alert.title}</p>
                    <p className="text-xs text-slate-500 mt-1">{alert.project} • {alert.district}</p>
                    <p className="text-xs text-slate-400 mt-1">{alert.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
