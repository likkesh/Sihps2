const fs = require('fs');
const path = require('path');

const writePage = (filePath, content) => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, content.trim() + '\n', 'utf8');
  console.log('Created: ' + filePath);
};

const ngoMyProject = `
import React, { useState } from 'react';
import { Building, MapPin, Users, Video, ShieldCheck, Edit } from 'lucide-react';

export default function MyProject() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Project Overview</h1>
        <button 
          onClick={() => setIsEditModalOpen(true)}
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Project
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center text-primary-600 mb-4">
            <Building className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold text-slate-800">Project Information</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-500">Project Name</p>
              <p className="font-medium text-slate-900">Sunrise Welfare Centre</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Project ID</p>
              <p className="font-medium text-slate-900">DOSJE-P095-001</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Project In-charge</p>
              <p className="font-medium text-slate-900">Ramesh Kumar</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Contact</p>
              <p className="font-medium text-slate-900">+91 98765 43210</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center text-primary-600 mb-4">
            <MapPin className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold text-slate-800">Location & Scheme</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-500">Scheme</p>
              <p className="font-medium text-slate-900">Social Welfare Support Scheme</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">District</p>
              <p className="font-medium text-slate-900">Coimbatore</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Project Status</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center text-primary-600 mb-4">
            <Users className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold text-slate-800">Capacity</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <span className="text-slate-600">Total Beneficiaries</span>
              <span className="text-xl font-bold text-primary-700">126</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-slate-600">Active Staff</span>
              <span className="text-xl font-bold text-primary-700">18</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center text-primary-600 mb-4">
            <Video className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold text-slate-800">CCTV Status</h2>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-slate-500">System Status</p>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                Online
              </span>
            </div>
            <div>
              <p className="text-sm text-slate-500">Active Cameras</p>
              <p className="font-medium text-slate-900">6 / 6</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 lg:col-span-2">
          <div className="flex items-center text-primary-600 mb-4">
            <ShieldCheck className="w-6 h-6 mr-2" />
            <h2 className="text-lg font-semibold text-slate-800">Compliance & Inspections</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-500">Last Inspection</p>
              <p className="font-medium text-slate-900 text-lg mt-1">18 Sep 2026</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <p className="text-sm text-slate-500">Compliance Score</p>
              <div className="flex items-center mt-1">
                <p className="font-bold text-green-600 text-xl">92%</p>
                <div className="w-full bg-slate-200 rounded-full h-2.5 ml-3">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Edit Project Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Name</label>
                <input type="text" defaultValue="Sunrise Welfare Centre" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project In-charge</label>
                <input type="text" defaultValue="Ramesh Kumar" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contact Number</label>
                <input type="text" defaultValue="+91 98765 43210" className="w-full border border-slate-300 rounded-lg px-3 py-2" />
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

const ngoStaff = `
import React, { useState } from 'react';
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
                    <span className={\`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium \${staff.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}\`}>
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
`;

const ngoBeneficiaries = `
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
`;

const ngoAttendance = `
import React, { useState } from 'react';
import { Calendar, Users, AlertCircle, Save } from 'lucide-react';

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
`;

const ngoCCTV = `
import React, { useState } from 'react';
import { Camera, AlertTriangle, Wifi, WifiOff } from 'lucide-react';

const cameras = [
  { id: 'CAM-01', location: 'Main Entrance', status: 'ONLINE', quality: 'Good', lastHeartbeat: 'Just now' },
  { id: 'CAM-02', location: 'Dining Hall', status: 'ONLINE', quality: 'Excellent', lastHeartbeat: 'Just now' },
  { id: 'CAM-03', location: 'Classroom A', status: 'OFFLINE', quality: 'None', lastHeartbeat: '45 mins ago' },
  { id: 'CAM-04', location: 'Playground', status: 'ONLINE', quality: 'Fair', lastHeartbeat: '2 mins ago' },
  { id: 'CAM-05', location: 'Corridor 1', status: 'WARNING', quality: 'Poor', lastHeartbeat: '5 mins ago' },
  { id: 'CAM-06', location: 'Kitchen', status: 'ONLINE', quality: 'Good', lastHeartbeat: 'Just now' },
];

export default function CCTVStatus() {
  const [selectedCam, setSelectedCam] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">CCTV System Status</h1>
        <div className="flex space-x-3">
          <span className="flex items-center text-sm"><span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span> Online (4)</span>
          <span className="flex items-center text-sm"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Offline (1)</span>
          <span className="flex items-center text-sm"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> Warning (1)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cameras.map(cam => (
          <div key={cam.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={() => setSelectedCam(cam)}>
            <div className="h-40 bg-slate-800 relative flex items-center justify-center">
              {cam.status === 'ONLINE' ? (
                <div className="text-slate-400 flex flex-col items-center">
                  <Camera className="w-8 h-8 mb-2" />
                  <span className="text-xs">DEMO FEED PREVIEW</span>
                </div>
              ) : (
                <div className="text-red-400 flex flex-col items-center">
                  <WifiOff className="w-8 h-8 mb-2" />
                  <span className="text-xs text-red-400 font-bold">SIGNAL LOST</span>
                </div>
              )}
              <div className="absolute top-2 right-2">
                <span className={\`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold \${
                  cam.status === 'ONLINE' ? 'bg-green-500 text-white' : 
                  cam.status === 'OFFLINE' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                }\`}>
                  {cam.status}
                </span>
              </div>
              <div className="absolute bottom-2 left-2 text-white text-xs font-mono bg-black bg-opacity-50 px-1 rounded">
                {cam.id} • {new Date().toLocaleTimeString()}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-slate-800">{cam.location}</h3>
              <div className="mt-2 space-y-1 text-sm text-slate-500">
                <p className="flex justify-between"><span>Connection:</span> <span className="font-medium text-slate-700">{cam.quality}</span></p>
                <p className="flex justify-between"><span>Heartbeat:</span> <span className="font-medium text-slate-700">{cam.lastHeartbeat}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCam && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-slate-200 bg-slate-50">
              <h2 className="text-xl font-bold text-slate-800 flex items-center">
                <Camera className="w-5 h-5 mr-2" />
                {selectedCam.id} - {selectedCam.location}
              </h2>
              <button onClick={() => setSelectedCam(null)} className="text-slate-500 hover:text-slate-700">&times;</button>
            </div>
            <div className="p-4 bg-slate-900 aspect-video relative flex items-center justify-center">
              {selectedCam.status === 'ONLINE' ? (
                 <div className="text-center">
                   <div className="w-16 h-16 border-4 border-slate-700 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
                   <p className="text-slate-400 font-mono tracking-widest">LOADING SECURE DEMO STREAM...</p>
                 </div>
              ) : (
                <div className="text-center text-red-500">
                  <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
                  <p className="font-bold text-xl">CONNECTION FAILED</p>
                  <p className="text-slate-400 mt-2">Cannot reach camera at this time.</p>
                </div>
              )}
              <div className="absolute top-4 left-4 text-white text-sm font-mono opacity-50">
                PROJECT: SUNRISE WELFARE
              </div>
            </div>
            <div className="p-4 bg-white flex justify-between items-center">
              <div className="text-sm text-slate-500">
                Status: <strong className={selectedCam.status === 'ONLINE' ? 'text-green-600' : 'text-red-600'}>{selectedCam.status}</strong>
              </div>
              <div className="space-x-3">
                <button className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50">Test Camera</button>
                <button className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100">Report Issue</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

const ngoDocuments = `
import React, { useState } from 'react';
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
                    <span className={\`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium \${doc.status === 'Verified' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}\`}>
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
`;

const ngoInspections = `
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
                    <span className={\`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium \${ins.result === 'Satisfactory' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800'}\`}>
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
`;

const ngoCompliance = `
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
                  <span className={\`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium \${
                    iss.status === 'Pending' ? 'bg-red-100 text-red-800' : 
                    iss.status === 'Response Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }\`}>
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
`;

const ngoNotifications = `
import React, { useState } from 'react';
import { Bell, FileCheck, Camera, AlertTriangle, FileText, CheckCircle } from 'lucide-react';

const mockNotifs = [
  { id: 1, title: 'New Inspection Scheduled', desc: 'A routine inspection has been scheduled for 12 Oct 2026.', date: 'Just now', icon: FileCheck, color: 'text-blue-500', unread: true },
  { id: 2, title: 'Attendance Anomaly Review Requested', desc: 'Please submit compliance response for yesterday’s attendance drop.', date: '2 hours ago', icon: AlertTriangle, color: 'text-red-500', unread: true },
  { id: 3, title: 'Camera CAM-03 Offline', desc: 'Connection lost to Classroom A camera. Please check network.', date: 'Yesterday', icon: Camera, color: 'text-orange-500', unread: false },
  { id: 4, title: 'Document Verified', desc: 'Your Fire Safety NOC has been verified by the district officer.', date: '2 days ago', icon: CheckCircle, color: 'text-green-500', unread: false },
  { id: 5, title: 'Quarterly Report Due', desc: 'Reminder to submit the Q3 financial report.', date: '1 week ago', icon: FileText, color: 'text-slate-500', unread: false },
];

export default function Notifications() {
  const [notifs, setNotifs] = useState(mockNotifs);

  const markAllRead = () => setNotifs(notifs.map(n => ({...n, unread: false})));

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800 flex items-center">
          <Bell className="w-6 h-6 mr-3 text-primary-600" />
          Notifications
        </h1>
        <button onClick={markAllRead} className="text-sm font-medium text-primary-600 hover:text-primary-800">
          Mark All as Read
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {notifs.map(n => (
          <div key={n.id} className={\`p-4 border-b border-slate-100 flex items-start transition-colors hover:bg-slate-50 \${n.unread ? 'bg-blue-50/30' : ''}\`}>
            <div className={\`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-100 mr-4 flex-shrink-0 \${n.color}\`}>
              <n.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className={\`text-sm \${n.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}\`}>{n.title}</h3>
                <span className="text-xs text-slate-500 whitespace-nowrap ml-2">{n.date}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{n.desc}</p>
            </div>
            {n.unread && <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 ml-4 flex-shrink-0"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
`;

writePage('src/pages/ngo/MyProject.tsx', ngoMyProject);
writePage('src/pages/ngo/Staff.tsx', ngoStaff);
writePage('src/pages/ngo/Beneficiaries.tsx', ngoBeneficiaries);
writePage('src/pages/ngo/Attendance.tsx', ngoAttendance); // Overwriting existing
writePage('src/pages/ngo/CCTVStatus.tsx', ngoCCTV);
writePage('src/pages/ngo/Documents.tsx', ngoDocuments);
writePage('src/pages/ngo/Inspections.tsx', ngoInspections);
writePage('src/pages/ngo/Compliance.tsx', ngoCompliance);
writePage('src/pages/ngo/Notifications.tsx', ngoNotifications);

console.log('NGO Pages done!');
