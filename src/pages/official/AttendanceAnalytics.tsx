import React from 'react';
import { Users, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AttendanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Attendance Analytics</h1>
        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white shadow-sm">
          <option>Last 7 Days</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between">
             <h3 className="text-slate-500 font-medium">Global Avg Attendance</h3>
             <Users className="w-5 h-5 text-primary-500" />
           </div>
           <p className="text-3xl font-bold text-slate-800 mt-4">88.4%</p>
           <p className="text-sm text-green-600 mt-2 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> +1.2% from last week</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between">
             <h3 className="text-slate-500 font-medium">NGOs Below Threshold (&lt;75%)</h3>
             <AlertTriangle className="w-5 h-5 text-orange-500" />
           </div>
           <p className="text-3xl font-bold text-slate-800 mt-4">3</p>
           <p className="text-sm text-red-600 mt-2 flex items-center"><TrendingDown className="w-4 h-4 mr-1" /> Requires attention</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between">
             <h3 className="text-slate-500 font-medium">Total Beneficiaries Monitored</h3>
             <Users className="w-5 h-5 text-blue-500" />
           </div>
           <p className="text-3xl font-bold text-slate-800 mt-4">4,250</p>
           <p className="text-sm text-slate-500 mt-2">Across 45 NGOs</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
         <h2 className="text-lg font-bold text-slate-800 mb-4">NGOs Flagged for Attendance Drops</h2>
         <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">NGO ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Expected</th>
                <th className="p-4 font-medium">Actual (Today)</th>
                <th className="p-4 font-medium">Variance</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
               <tr className="border-b border-slate-100 hover:bg-slate-50 bg-red-50/30">
                 <td className="p-4 font-medium text-primary-600">NGO-001</td>
                 <td className="p-4 font-bold text-slate-800">Sunrise Welfare Centre</td>
                 <td className="p-4 text-slate-600">126</td>
                 <td className="p-4 text-red-600 font-bold">48</td>
                 <td className="p-4 text-red-600 font-medium">-62%</td>
                 <td className="p-4">
                   <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700" onClick={()=>alert('Investigating Sunrise Welfare')}>Investigate</button>
                 </td>
               </tr>
            </tbody>
          </table>
         </div>
      </div>
    </div>
  );
}
