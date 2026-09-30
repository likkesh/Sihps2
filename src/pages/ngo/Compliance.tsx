import React, { useState, useEffect } from 'react';
import { ShieldAlert, CheckCircle, Clock } from 'lucide-react';

export default function Compliance() {
  const [issues, setIssues] = useState<any[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<any>(null);

  useEffect(() => {
    // Sync with local storage for demo connected workflow
    const stored = JSON.parse(localStorage.getItem('shared_compliance') || '[]');
    if (stored.length === 0) {
      const defaultIssues = [
        { id: 'CMP-001', title: 'Attendance records require clarification', severity: 'Medium', detected: '24 Sep 2026', deadline: '30 Sep 2026', status: 'Pending' }
      ];
      localStorage.setItem('shared_compliance', JSON.stringify(defaultIssues));
      setIssues(defaultIssues);
    } else {
      setIssues(stored);
    }
  }, []);

  const handleSubmitResponse = () => {
    const updated = issues.map(iss => iss.id === selectedIssue.id ? { ...iss, status: 'Response Submitted' } : iss);
    setIssues(updated);
    localStorage.setItem('shared_compliance', JSON.stringify(updated));
    setSelectedIssue(null);
    alert('Response submitted successfully to DoSJE.');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Compliance Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100 flex items-center justify-between">
          <div><p className="text-sm text-red-600 font-medium">Open Issues</p><p className="text-2xl font-bold text-red-700">{issues.filter(i=>i.status==='Pending').length}</p></div>
          <ShieldAlert className="w-8 h-8 text-red-500 opacity-50" />
        </div>
        <div className="bg-blue-50 p-4 rounded-xl shadow-sm border border-blue-100 flex items-center justify-between">
          <div><p className="text-sm text-blue-600 font-medium">Under Review</p><p className="text-2xl font-bold text-blue-700">{issues.filter(i=>i.status==='Response Submitted').length}</p></div>
          <Clock className="w-8 h-8 text-blue-500 opacity-50" />
        </div>
        <div className="bg-green-50 p-4 rounded-xl shadow-sm border border-green-100 flex items-center justify-between">
          <div><p className="text-sm text-green-600 font-medium">Resolved</p><p className="text-2xl font-bold text-green-700">{issues.filter(i=>i.status==='Resolved').length || 12}</p></div>
          <CheckCircle className="w-8 h-8 text-green-500 opacity-50" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
              <th className="p-4 font-medium">Issue ID</th>
              <th className="p-4 font-medium">Issue</th>
              <th className="p-4 font-medium">Detected</th>
              <th className="p-4 font-medium">Deadline</th>
              <th className="p-4 font-medium">Status</th>
              <th className="p-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((iss, i) => (
              <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-800">{iss.id}</td>
                <td className="p-4 text-slate-700">{iss.title}</td>
                <td className="p-4 text-slate-500">{iss.detected || 'Today'}</td>
                <td className="p-4 text-slate-500">{iss.deadline || 'N/A'}</td>
                <td className="p-4">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    iss.status === 'Pending' ? 'bg-red-100 text-red-800' : 
                    iss.status === 'Response Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {iss.status}
                  </span>
                </td>
                <td className="p-4">
                  <button onClick={() => setSelectedIssue(iss)} className="text-primary-600 hover:text-primary-900 font-medium text-sm">
                    {iss.status === 'Pending' ? 'Respond' : 'View'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedIssue && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Compliance Action: {selectedIssue.id}</h2>
            <div className="bg-slate-50 p-4 rounded-lg mb-4 border border-slate-200">
              <h3 className="font-bold text-slate-800">{selectedIssue.title}</h3>
              <p className="text-sm text-slate-600 mt-2">Observation: The system detected an anomaly or inspector raised a flag requiring your immediate clarification and evidence submission.</p>
              <div className="mt-4 flex space-x-4 text-sm">
                <span className="text-slate-500">Deadline: <strong className="text-red-600">{selectedIssue.deadline || 'Immediate'}</strong></span>
                <span className="text-slate-500">Status: <strong>{selectedIssue.status}</strong></span>
              </div>
            </div>

            {selectedIssue.status === 'Pending' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Response / Clarification</label>
                  <textarea rows={4} className="w-full border border-slate-300 rounded-lg px-3 py-2" placeholder="Explain the situation here..."></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Upload Evidence (Photos/Docs)</label>
                  <input type="file" className="w-full border border-slate-300 rounded-lg px-3 py-2 bg-slate-50" />
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <button onClick={() => setSelectedIssue(null)} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">Cancel</button>
                  <button onClick={handleSubmitResponse} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Submit Compliance</button>
                </div>
              </div>
            ) : (
              <div className="bg-blue-50 text-blue-800 p-4 rounded-lg border border-blue-200">
                Response has been submitted. Waiting for Official review.
                <div className="mt-4 flex justify-end">
                   <button onClick={() => setSelectedIssue(null)} className="px-4 py-2 bg-white border border-blue-200 rounded-lg text-blue-800 hover:bg-blue-100">Close</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
