import React, { useState } from 'react';
import { Search, Filter, Eye } from 'lucide-react';

const mockBeneficiaries = [
  { id: 'BEN-001', name: 'Rahul D.', age: 12, category: 'Orphan', enrolled: '2025-01-15', attendance: '95%', status: 'Active' },
  { id: 'BEN-002', name: 'Priya K.', age: 10, category: 'Destitute', enrolled: '2025-02-20', attendance: '92%', status: 'Active' },
  { id: 'BEN-003', name: 'Amit S.', age: 14, category: 'Orphan', enrolled: '2024-11-10', attendance: '88%', status: 'Active' },
  { id: 'BEN-004', name: 'Neha M.', age: 9, category: 'Abandoned', enrolled: '2025-05-05', attendance: '97%', status: 'Active' },
  { id: 'BEN-005', name: 'Ravi P.', age: 15, category: 'Destitute', enrolled: '2024-08-12', attendance: '99%', status: 'Active' },
];

export default function Beneficiaries() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBen, setSelectedBen] = useState<any>(null);

  const filtered = mockBeneficiaries.filter(b => b.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Beneficiary Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Beneficiaries</p>
          <p className="text-2xl font-bold text-slate-800">126</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Active</p>
          <p className="text-2xl font-bold text-green-600">120</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">New This Month</p>
          <p className="text-2xl font-bold text-primary-600">4</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Attendance Today</p>
          <p className="text-2xl font-bold text-orange-500">118</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center gap-4 flex-wrap">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search beneficiaries..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
              <option value="">All Categories</option>
              <option value="Orphan">Orphan</option>
              <option value="Destitute">Destitute</option>
              <option value="Abandoned">Abandoned</option>
            </select>
            <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm">
              <option value="">All Ages</option>
              <option value="0-5">0-5 yrs</option>
              <option value="6-12">6-12 yrs</option>
              <option value="13-18">13-18 yrs</option>
            </select>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">Beneficiary ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Age</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Enrollment Date</th>
                <th className="p-4 font-medium">Attendance</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-slate-600">{b.id}</td>
                  <td className="p-4 font-medium text-slate-800">{b.name}</td>
                  <td className="p-4 text-slate-600">{b.age}</td>
                  <td className="p-4 text-slate-600">{b.category}</td>
                  <td className="p-4 text-slate-600">{b.enrolled}</td>
                  <td className="p-4 text-slate-600">{b.attendance}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {b.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button onClick={() => setSelectedBen(b)} className="text-primary-600 hover:text-primary-900 flex items-center text-sm font-medium">
                      <Eye className="w-4 h-4 mr-1" /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedBen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-slate-800">Beneficiary Profile</h2>
              <button onClick={() => setSelectedBen(null)} className="text-slate-400 hover:text-slate-600">&times;</button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-slate-50 rounded-lg">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {selectedBen.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{selectedBen.name}</h3>
                  <p className="text-slate-500">{selectedBen.id}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-slate-500">Age</p>
                  <p className="font-medium">{selectedBen.age} years</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Category</p>
                  <p className="font-medium">{selectedBen.category}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Enrolled On</p>
                  <p className="font-medium">{selectedBen.enrolled}</p>
                </div>
                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <p className="font-medium text-green-600">{selectedBen.status}</p>
                </div>
              </div>
              <div className="bg-orange-50 text-orange-800 p-3 rounded-lg text-sm flex items-start">
                <p><strong>Note:</strong> Sensitive information (medical history, guardian details) is restricted in this demo view.</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setSelectedBen(null)} className="px-4 py-2 bg-slate-200 text-slate-800 rounded-lg hover:bg-slate-300">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
