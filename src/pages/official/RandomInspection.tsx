import { useState } from 'react';
import { Dices, UserCheck, Calendar, ShieldCheck, MapPin, CheckCircle, Building2 } from 'lucide-react';
import { mockProjects } from '../../data/mockData';

export default function RandomInspection() {
  const [assigned, setAssigned] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setAssigned(null);
    
    // Simulate AI generation delay
    setTimeout(() => {
      // Pick random project
      const project = mockProjects[Math.floor(Math.random() * mockProjects.length)];
      setAssigned({
        project: project.name,
        district: project.district,
        inspector: 'PMU Inspector – Arun Kumar',
        type: 'Surprise Inspection',
        priority: 'High',
        reason: 'Long interval since previous inspection + AI anomaly alert.'
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-600 mb-4">
          <Dices className="w-8 h-8" />
        </div>
        <h2 className="text-3xl font-bold text-slate-800">AI / Random Inspection Assignment</h2>
        <p className="text-slate-500 mt-2 max-w-2xl mx-auto">
          Our unbiased algorithm considers past inspection dates, risk levels, alerts, and inspector availability to randomly assign inspections across districts.
        </p>
      </div>

      <div className="card p-8 flex flex-col items-center justify-center border-t-4 border-t-primary-500">
        <button 
          onClick={handleGenerate}
          disabled={loading}
          className={`px-8 py-4 rounded-xl text-lg font-bold shadow-lg transition-all ${
            loading ? 'bg-primary-300 text-white cursor-not-allowed' : 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105 active:scale-95'
          }`}
        >
          {loading ? 'GENERATING ASSIGNMENT...' : 'GENERATE RANDOM INSPECTION'}
        </button>

        {loading && (
          <div className="mt-8 flex items-center gap-3 text-primary-600 font-medium">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-primary-600 border-t-transparent"></div>
            Analyzing eligible projects and available inspectors...
          </div>
        )}

        {assigned && (
          <div className="mt-8 w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-32 h-32 text-green-900" />
              </div>
              
              <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Random Inspection Assigned Successfully
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <p className="text-sm font-medium text-green-800 opacity-80 mb-1">Project</p>
                  <p className="text-lg font-bold text-green-950 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-green-700" /> {assigned.project}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800 opacity-80 mb-1">Location</p>
                  <p className="text-lg font-bold text-green-950 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-700" /> {assigned.district}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800 opacity-80 mb-1">Inspector</p>
                  <p className="text-lg font-bold text-green-950 flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-green-700" /> {assigned.inspector}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-800 opacity-80 mb-1">Inspection Type & Date</p>
                  <p className="text-lg font-bold text-green-950 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-700" /> {assigned.type} (Imminent)
                  </p>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <p className="text-sm font-medium text-green-800 opacity-80 mb-1">Reason for Selection</p>
                  <p className="text-md font-medium text-green-900 bg-green-100 p-3 rounded-lg">
                    {assigned.reason}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-4 relative z-10">
                <button className="px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors shadow-sm">
                  Accept Assignment & Notify NGO
                </button>
                <button className="px-6 py-2 bg-white text-green-700 border border-green-300 font-medium rounded-lg hover:bg-green-50 transition-colors">
                  View Project Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Need to add CheckCircle and Building2 import at the top
