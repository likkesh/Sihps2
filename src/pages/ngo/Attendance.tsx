import { useState } from 'react';
import { AlertCircle, Save } from 'lucide-react';

export default function Attendance() {
  const [attendance, setAttendance] = useState<Record<string, boolean>>({
    'BEN-001': true, 'BEN-002': true, 'BEN-003': false, 'BEN-004': true, 'BEN-005': true
  });

  const toggle = (id: string) => setAttendance(prev => ({...prev, [id]: !prev[id]}));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Attendance Management</h1>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <Save className="w-4 h-4 mr-2" />
          Save Attendance
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Expected Attendance</p>
          <p className="text-2xl font-bold text-slate-800">126</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Actual Attendance</p>
          <p className="text-2xl font-bold text-green-600">118</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Staff Present</p>
          <p className="text-2xl font-bold text-primary-600">17 / 18</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Attendance %</p>
          <p className="text-2xl font-bold text-slate-800">93.6%</p>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start">
        <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
        <div className="flex-1">
          <h3 className="text-red-800 font-semibold">Attendance Anomaly Detected (Simulated)</h3>
          <p className="text-red-600 text-sm mt-1">AI has detected that yesterday's attendance was 38% compared with an expected 82%. This has been flagged in the Official Portal.</p>
        </div>
        <button className="bg-white border border-red-300 text-red-700 px-3 py-1 rounded text-sm hover:bg-red-50"
         onClick={() => {
            const issues = JSON.parse(localStorage.getItem('shared_compliance') || '[]');
            issues.push({ id: 'CMP-NEW', title: 'Attendance Anomaly Review', status: 'Pending' });
            localStorage.setItem('shared_compliance', JSON.stringify(issues));
            alert('Anomaly reported to Official Portal. Issue created.');
         }}
        >
          Report / Investigate
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
            <h2 className="font-semibold text-slate-800">Mark Today's Attendance</h2>
            <span className="text-sm text-slate-500">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white text-slate-600 border-b border-slate-200">
                  <th className="p-4 font-medium">ID</th>
                  <th className="p-4 font-medium">Name</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {['BEN-001', 'BEN-002', 'BEN-003', 'BEN-004', 'BEN-005'].map((id, i) => (
                  <tr key={id} className="border-b border-slate-100">
                    <td className="p-4 text-slate-600">{id}</td>
                    <td className="p-4 font-medium text-slate-800">Beneficiary {i+1}</td>
                    <td className="p-4">
                      {attendance[id] ? 
                        <span className="text-green-600 font-medium">Present</span> : 
                        <span className="text-red-600 font-medium">Absent</span>}
                    </td>
                    <td className="p-4">
                      <button onClick={() => toggle(id)} className="px-3 py-1 border border-slate-300 rounded hover:bg-slate-50 text-sm">
                        Toggle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 flex flex-col items-center justify-center min-h-[300px]">
          <h3 className="font-semibold text-slate-800 mb-6">Weekly Trend</h3>
          <div className="flex items-end space-x-4 h-40 w-full justify-center">
            <div className="w-8 bg-primary-200 rounded-t-md h-[80%] relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">80%</span></div>
            <div className="w-8 bg-primary-300 rounded-t-md h-[85%] relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">85%</span></div>
            <div className="w-8 bg-red-400 rounded-t-md h-[38%] relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 text-red-600 font-bold">38%</span></div>
            <div className="w-8 bg-primary-500 rounded-t-md h-[92%] relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">92%</span></div>
            <div className="w-8 bg-primary-600 rounded-t-md h-[95%] relative group"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100">95%</span></div>
          </div>
          <div className="flex space-x-4 w-full justify-center mt-2 text-xs text-slate-500">
            <div className="w-8 text-center">M</div>
            <div className="w-8 text-center">T</div>
            <div className="w-8 text-center text-red-500 font-bold">W</div>
            <div className="w-8 text-center">T</div>
            <div className="w-8 text-center">F</div>
          </div>
        </div>
      </div>
    </div>
  );
}
