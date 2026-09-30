import { useState } from 'react';
import { Search, Filter, Eye, MoreVertical } from 'lucide-react';
import { mockProjects } from '../../data/mockData';

export default function ProjectsList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDistrict, setFilterDistrict] = useState('All');
  
  const filteredProjects = mockProjects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.ngoName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDistrict = filterDistrict === 'All' || p.district === filterDistrict;
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Projects & Institutes</h2>
        <button className="btn-primary">Add Project</button>
      </div>

      <div className="card">
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by project or NGO name..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center text-sm font-medium text-slate-700">
              <Filter className="w-4 h-4 mr-2" />
              District:
            </div>
            <select 
              className="input-field w-full sm:w-48 py-1.5"
              value={filterDistrict}
              onChange={e => setFilterDistrict(e.target.value)}
            >
              <option value="All">All Districts</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
              <option value="Salem">Salem</option>
              <option value="Chennai">Chennai</option>
              <option value="Erode">Erode</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-6 py-4 font-medium">Project ID</th>
                <th className="px-6 py-4 font-medium">NGO / Institute</th>
                <th className="px-6 py-4 font-medium">District</th>
                <th className="px-6 py-4 font-medium">Beneficiaries</th>
                <th className="px-6 py-4 font-medium">CCTV Status</th>
                <th className="px-6 py-4 font-medium">Compliance</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {filteredProjects.map(project => (
                <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-primary-600">{project.id}</td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-800">{project.name}</p>
                    <p className="text-xs text-slate-500">{project.ngoName}</p>
                  </td>
                  <td className="px-6 py-4">{project.district}</td>
                  <td className="px-6 py-4">{project.beneficiariesCount}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.cctvStatus === 'ONLINE' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {project.cctvStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      project.complianceStatus === 'Compliant' ? 'bg-green-100 text-green-800' : 
                      project.complianceStatus === 'Partially Compliant' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {project.complianceStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary-600 mr-3">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="text-slate-400 hover:text-slate-600">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
              {filteredProjects.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-500">
                    No projects found matching the criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
