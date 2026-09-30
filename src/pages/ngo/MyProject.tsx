import { useState } from 'react';
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
