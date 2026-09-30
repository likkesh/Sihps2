import { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';

const mockStaff = [
  { id: 'STF-001', name: 'Ramesh Kumar', role: 'Project In-charge', phone: '+91 9876543210', attendance: '98%', status: 'Active' },
  { id: 'STF-002', name: 'Anita Sharma', role: 'Social Worker', phone: '+91 9876543211', attendance: '95%', status: 'Active' },
  { id: 'STF-003', name: 'Vikram Singh', role: 'Caregiver', phone: '+91 9876543212', attendance: '90%', status: 'Active' },
  { id: 'STF-004', name: 'Priya Patel', role: 'Counsellor', phone: '+91 9876543213', attendance: '99%', status: 'Active' },
  { id: 'STF-005', name: 'Mohan Das', role: 'Accountant', phone: '+91 9876543214', attendance: '100%', status: 'Active' },
  { id: 'STF-006', name: 'Sunita Reddy', role: 'Caregiver', phone: '+91 9876543215', attendance: '88%', status: 'Active' },
  { id: 'STF-007', name: 'Rajeev Menon', role: 'Support Staff', phone: '+91 9876543216', attendance: '92%', status: 'Active' },
  { id: 'STF-008', name: 'Kavita Joshi', role: 'Social Worker', phone: '+91 9876543217', attendance: '96%', status: 'Active' },
  { id: 'STF-009', name: 'Suresh Verma', role: 'Support Staff', phone: '+91 9876543218', attendance: '85%', status: 'On Leave' },
  { id: 'STF-010', name: 'Meena Kumari', role: 'Caregiver', phone: '+91 9876543219', attendance: '94%', status: 'Active' },
];

export default function Staff() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredStaff = mockStaff.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Staff Management</h1>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Staff
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search staff..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center text-slate-600 border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">Staff ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Phone</th>
                <th className="p-4 font-medium">Attendance</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStaff.map((staff, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-slate-600">{staff.id}</td>
                  <td className="p-4 font-medium text-slate-800">{staff.name}</td>
                  <td className="p-4 text-slate-600">{staff.role}</td>
                  <td className="p-4 text-slate-600">{staff.phone}</td>
                  <td className="p-4 text-slate-600">{staff.attendance}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${staff.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                      {staff.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-primary-600 hover:text-primary-900 font-medium">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Add New Staff</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
                <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                  <option>Project In-charge</option>
                  <option>Social Worker</option>
                  <option>Caregiver</option>
                  <option>Counsellor</option>
                  <option>Accountant</option>
                  <option>Support Staff</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="text" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1">Email (Optional)</label>
                <input type="email" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Joining Date</label>
                <input type="date" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select className="w-full border border-slate-300 rounded-lg px-3 py-2">
                  <option>Active</option>
                  <option>On Leave</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">Cancel</button>
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Save Staff</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
