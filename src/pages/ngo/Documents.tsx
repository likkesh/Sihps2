import { useState } from 'react';
import { FileText, Upload, Download, Eye, Trash2 } from 'lucide-react';

const mockDocs = [
  { name: 'Registration_Certificate_2024.pdf', category: 'Registration', date: '12 Jan 2024', status: 'Verified' },
  { name: 'Fire_Safety_NOC_Q3.pdf', category: 'Compliance Documents', date: '05 Aug 2026', status: 'Pending Review' },
  { name: 'Staff_Background_Checks_Batch1.zip', category: 'Staff Documents', date: '20 Jul 2026', status: 'Verified' },
  { name: 'Annual_Audit_Report_FY25.pdf', category: 'Financial Documents', date: '10 Apr 2026', status: 'Verified' },
];

export default function Documents() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Document Management</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <Upload className="w-4 h-4 mr-2" />
          Upload Document
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
        {['Registration', 'Scheme Documents', 'Staff Documents', 'Inspection Documents', 'Compliance Documents', 'Financial'].map(cat => (
          <div key={cat} className="bg-white border border-slate-200 p-3 rounded-lg text-center shadow-sm cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-colors">
            <FileText className="w-6 h-6 mx-auto mb-2 text-primary-500" />
            <p className="text-xs font-medium text-slate-700">{cat}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">Document Name</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Uploaded Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockDocs.map((doc, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600 flex items-center">
                    <FileText className="w-4 h-4 mr-2 text-slate-400" /> {doc.name}
                  </td>
                  <td className="p-4 text-slate-600">{doc.category}</td>
                  <td className="p-4 text-slate-600">{doc.date}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${doc.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-end space-x-2">
                      <button className="p-1.5 text-slate-500 hover:text-primary-600 bg-slate-100 rounded" title="View"><Eye className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-500 hover:text-primary-600 bg-slate-100 rounded" title="Download"><Download className="w-4 h-4" /></button>
                      <button className="p-1.5 text-slate-500 hover:text-red-600 bg-slate-100 rounded" title="Delete"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Upload New Document</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Document Category</label>
                <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                  <option>Registration</option>
                  <option>Compliance Documents</option>
                  <option>Financial Documents</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">File</label>
                <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center bg-slate-50">
                   <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                   <p className="text-sm text-slate-500">Drag and drop file here, or click to browse</p>
                   <input type="file" className="hidden" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">Cancel</button>
              <button onClick={() => {alert('Demo upload successful'); setIsModalOpen(false);}} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Upload</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
