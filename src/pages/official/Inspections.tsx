import React, { useState } from 'react';
import { FileCheck, Search, Dices, Calendar } from 'lucide-react';

const mockIns = [
  { id: 'INS-2026-089', ngo: 'Sunrise Welfare', type: 'Surprise', inspector: 'S. Mehta', date: '18 Sep 2026', status: 'Completed', result: 'Satisfactory' },
  { id: 'INS-2026-090', ngo: 'Hope Foundation', type: 'Routine', inspector: 'A. Patel', date: '20 Sep 2026', status: 'Pending', result: '-' },
  { id: 'INS-2026-091', ngo: 'Care Center', type: 'Follow-up', inspector: 'R. Sharma', date: '21 Sep 2026', status: 'In Progress', result: '-' },
];

export default function Inspections() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Inspection Management</h1>
        <div className="flex space-x-3">
          <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg flex items-center hover:bg-slate-50">
            <Calendar className="w-4 h-4 mr-2" /> Schedule Routine
          </button>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <Dices className="w-4 h-4 mr-2" /> Assign Random Inspection
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
           <p className="text-sm text-slate-500">Inspections This Month</p>
           <p className="text-2xl font-bold text-slate-800">24</p>
         </div>
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
           <p className="text-sm text-slate-500">Pending</p>
           <p className="text-2xl font-bold text-orange-500">8</p>
         </div>
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
           <p className="text-sm text-slate-500">Completed</p>
           <p className="text-2xl font-bold text-green-600">16</p>
         </div>
         <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
           <p className="text-sm text-red-600 font-medium">Critical Findings</p>
           <p className="text-2xl font-bold text-red-700">2</p>
         </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search NGO or ID..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">NGO Name</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Inspector</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Result</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockIns.map((ins, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600">{ins.id}</td>
                  <td className="p-4 font-medium text-slate-800">{ins.ngo}</td>
                  <td className="p-4 text-slate-600">{ins.type}</td>
                  <td className="p-4 text-slate-600">{ins.date}</td>
                  <td className="p-4 text-slate-600">{ins.inspector}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      ins.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      ins.status === 'Pending' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {ins.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">{ins.result}</td>
                  <td className="p-4">
                     <button className="text-primary-600 hover:text-primary-900 font-medium text-sm">View Report</button>
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
