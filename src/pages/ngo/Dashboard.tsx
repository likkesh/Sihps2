import { Users, UserCheck, Camera, ShieldAlert, Calendar, FileText } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { name: 'Mon', percentage: 92 },
  { name: 'Tue', percentage: 89 },
  { name: 'Wed', percentage: 95 },
  { name: 'Thu', percentage: 88 },
  { name: 'Fri', percentage: 91 },
  { name: 'Sat', percentage: 94 },
  { name: 'Sun', percentage: 90 },
];

export default function NgoDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">NGO Dashboard</h2>
        <span className="bg-primary-100 text-primary-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
          Status: Active
        </span>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Total Beneficiaries</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">126</h3>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Today's Attendance</p>
              <h3 className="text-3xl font-bold text-slate-800 mt-1">91%</h3>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <UserCheck className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">115 / 126 Present</p>
        </div>

        <div className="card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">CCTV Status</p>
              <h3 className="text-3xl font-bold text-green-600 mt-1">ONLINE</h3>
            </div>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
              <Camera className="w-6 h-6 text-slate-600" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">All 4 cameras active</p>
        </div>

        <div className="card p-6 flex flex-col justify-between border-l-4 border-l-red-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500">Pending Compliance</p>
              <h3 className="text-3xl font-bold text-red-600 mt-1">2</h3>
            </div>
            <div className="p-3 bg-red-50 rounded-lg">
              <ShieldAlert className="w-6 h-6 text-red-600" />
            </div>
          </div>
          <p className="text-xs text-red-500 mt-4 font-medium">Action Required</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 col-span-2">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Weekly Attendance Trend</h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAtt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <Tooltip />
                <Area type="monotone" dataKey="percentage" stroke="#10b981" fillOpacity={1} fill="url(#colorAtt)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card p-6 bg-blue-50 border-blue-100">
            <h3 className="text-md font-bold text-blue-900 flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5" /> Upcoming Inspection
            </h3>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-sm font-medium text-slate-500">Date Scheduled</p>
              <p className="text-lg font-bold text-slate-800 mt-1">30 Sep 2026</p>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="text-sm text-slate-600"><span className="font-medium">Type:</span> Routine</p>
                <p className="text-sm text-slate-600"><span className="font-medium">Inspector:</span> PMU Assigned</p>
              </div>
            </div>
          </div>

          <div className="card p-6 bg-orange-50 border-orange-100">
            <h3 className="text-md font-bold text-orange-900 flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" /> Documents Pending
            </h3>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Q3 Financial Report</span>
                <button className="text-xs font-bold text-primary-600 hover:text-primary-800">Upload</button>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm flex justify-between items-center">
                <span className="text-sm font-medium text-slate-700">Staff Details Update</span>
                <button className="text-xs font-bold text-primary-600 hover:text-primary-800">Upload</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
