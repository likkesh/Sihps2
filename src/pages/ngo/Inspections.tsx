import React, { useState } from 'react';
import { FileCheck, Search, Eye } from 'lucide-react';

const mockInspections = [
  { id: 'INS-2026-089', date: '18 Sep 2026', type: 'Surprise', inspector: 'S. Mehta (DoSJE)', status: 'Completed', result: 'Satisfactory' },
  { id: 'INS-2026-042', date: '10 Jun 2026', type: 'Routine', inspector: 'A. Patel (District)', status: 'Completed', result: 'Action Required' },
  { id: 'INS-2025-112', date: '15 Dec 2025', type: 'Random', inspector: 'V. Singh (DoSJE)', status: 'Completed', result: 'Satisfactory' },
];

export default function Inspections() {
  const [selectedIns, setSelectedIns] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Inspections</h1>
      </div>

      <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 flex items-start">
        <FileCheck className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0" />
        <div>
          <h2 className="text-lg font-bold text-primary-900">Upcoming Inspection Scheduled</h2>
          <p className="text-primary-700 mt-1">A routine inspection is scheduled for <strong className="font-bold">12 Oct 2026</strong>. Please ensure all documents and records are updated.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50">
          <h3 className="font-semibold text-slate-800">Inspection History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">Inspection ID</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Inspector</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Result</th>
              </tr>
            </thead>
            <tbody>
              {mockInspections.map((ins, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 cursor-pointer" onClick={() => setSelectedIns(ins)}>
                  <td className="p-4 font-medium text-primary-600">{ins.id}</td>
                  <td className="p-4 text-slate-600">{ins.date}</td>
                  <td className="p-4 text-slate-600">{ins.inspector}</td>
                  <td className="p-4 text-slate-600">{ins.type}</td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                      {ins.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${ins.result === 'Satisfactory' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}`}>
                      {ins.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedIns && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-xl font-bold text-slate-800">Inspection Report: {selectedIns.id}</h2>
              <button onClick={() => setSelectedIns(null)} className="text-slate-500 hover:text-slate-700">&times;</button>
            </div>
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs text-slate-500">Date</p><p className="font-bold">{selectedIns.date}</p></div>
                <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs text-slate-500">Type</p><p className="font-bold">{selectedIns.type}</p></div>
                <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs text-slate-500">Inspector</p><p className="font-bold">{selectedIns.inspector}</p></div>
                <div className="bg-slate-50 p-3 rounded-lg"><p className="text-xs text-slate-500">Result</p><p className="font-bold text-blue-600">{selectedIns.result}</p></div>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Checklist Findings</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between p-2 hover:bg-slate-50 rounded"><span>Infrastructure Quality</span> <span className="text-green-600 font-bold">Pass</span></li>
                  <li className="flex justify-between p-2 hover:bg-slate-50 rounded"><span>Staff Attendance Records</span> <span className="text-green-600 font-bold">Pass</span></li>
                  <li className="flex justify-between p-2 hover:bg-slate-50 rounded"><span>CCTV Functionality</span> <span className="text-orange-600 font-bold">Issue Noted</span></li>
                  <li className="flex justify-between p-2 hover:bg-slate-50 rounded"><span>Beneficiary Well-being</span> <span className="text-green-600 font-bold">Pass</span></li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Inspector Notes</h3>
                <p className="text-slate-600 bg-yellow-50 p-4 rounded-lg italic">
                  "The facility is generally well maintained. However, Camera 3 in the corridor was found to be offline during the inspection. Management is advised to rectify the connection immediately. All other parameters are satisfactory."
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
