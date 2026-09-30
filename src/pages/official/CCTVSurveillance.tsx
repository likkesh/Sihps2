import React, { useState } from 'react';
import { Camera, Search, Filter, ShieldAlert } from 'lucide-react';

const mockSystem = [
  { ngo: 'Sunrise Welfare', id: 'NGO-001', total: 6, online: 5, offline: 1, lastCheck: '2 mins ago' },
  { ngo: 'Hope Foundation', id: 'NGO-042', total: 8, online: 8, offline: 0, lastCheck: '5 mins ago' },
  { ngo: 'Care Center', id: 'NGO-088', total: 4, online: 2, offline: 2, lastCheck: '1 hr ago' },
  { ngo: 'Bright Future', id: 'NGO-103', total: 10, online: 10, offline: 0, lastCheck: '10 mins ago' },
];

export default function CCTVSurveillance() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">CCTV System Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Monitored NGOs</p>
          <p className="text-2xl font-bold text-slate-800">45</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Cameras</p>
          <p className="text-2xl font-bold text-slate-800">324</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Online Cameras</p>
          <p className="text-2xl font-bold text-green-600">308</p>
        </div>
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100 flex justify-between items-center">
          <div>
             <p className="text-sm text-red-600 font-medium">Offline/Alerts</p>
             <p className="text-2xl font-bold text-red-700">16</p>
          </div>
          <ShieldAlert className="w-8 h-8 text-red-300" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search NGO..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          </div>
          <button className="flex items-center text-slate-600 border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">NGO ID</th>
                <th className="p-4 font-medium">NGO Name</th>
                <th className="p-4 font-medium">Total Cameras</th>
                <th className="p-4 font-medium">Online</th>
                <th className="p-4 font-medium">Offline</th>
                <th className="p-4 font-medium">Last Check-in</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockSystem.filter(s => s.ngo.toLowerCase().includes(searchTerm.toLowerCase())).map((sys, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600">{sys.id}</td>
                  <td className="p-4 font-medium text-slate-800">{sys.ngo}</td>
                  <td className="p-4 text-slate-600">{sys.total}</td>
                  <td className="p-4 text-green-600 font-medium">{sys.online}</td>
                  <td className="p-4"><span className={sys.offline > 0 ? 'text-red-600 font-bold' : 'text-slate-500'}>{sys.offline}</span></td>
                  <td className="p-4 text-slate-500">{sys.lastCheck}</td>
                  <td className="p-4">
                    <button className="text-primary-600 hover:text-primary-900 flex items-center text-sm font-medium">
                       View Nodes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
