import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, Filter } from 'lucide-react';

export default function Compliance() {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    // Shared state simulation
    const stored = JSON.parse(localStorage.getItem('shared_compliance') || '[]');
    const mapped = stored.map((s: any) => ({
      id: s.id,
      ngo: 'Sunrise Welfare',
      title: s.title,
      detected: s.detected || 'Today',
      status: s.status
    }));
    if (mapped.length === 0) {
      mapped.push({ id: 'CMP-001', ngo: 'Sunrise Welfare', title: 'Attendance records require clarification', detected: '24 Sep 2026', status: 'Pending' });
    }
    setIssues(mapped);
  }, []);

  const resolveIssue = (id: string) => {
    const stored = JSON.parse(localStorage.getItem('shared_compliance') || '[]');
    const updated = stored.map((s: any) => s.id === id ? { ...s, status: 'Resolved' } : s);
    localStorage.setItem('shared_compliance', JSON.stringify(updated));
    setIssues(issues.map(i => i.id === id ? { ...i, status: 'Resolved' } : i));
    alert('Issue marked as resolved.');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Compliance & Observations</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search NGO or Issue ID..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <button className="flex items-center text-slate-600 border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">Issue ID</th>
                <th className="p-4 font-medium">NGO Name</th>
                <th className="p-4 font-medium">Observation / Issue</th>
                <th className="p-4 font-medium">Detected Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((iss, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600">{iss.id}</td>
                  <td className="p-4 font-bold text-slate-800">{iss.ngo}</td>
                  <td className="p-4 text-slate-700">{iss.title}</td>
                  <td className="p-4 text-slate-500">{iss.detected}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                      iss.status === 'Pending' ? 'bg-red-100 text-red-800' : 
                      iss.status === 'Response Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {iss.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {iss.status === 'Response Submitted' ? (
                      <button onClick={() => resolveIssue(iss.id)} className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 rounded text-sm hover:bg-green-100">Review & Resolve</button>
                    ) : (
                      <button className="text-primary-600 hover:text-primary-900 font-medium text-sm">View Details</button>
                    )}
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
