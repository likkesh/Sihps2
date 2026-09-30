import { FileText, Download } from 'lucide-react';

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Reports Generation</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Monthly District Summary', desc: 'Aggregated attendance and compliance data per district.' },
          { title: 'NGO Defaulters List', desc: 'List of NGOs with severe compliance or attendance issues.' },
          { title: 'Inspection Yield Report', desc: 'Analysis of routine vs random inspection findings.' },
          { title: 'CCTV Uptime Analysis', desc: 'Camera network reliability and downtime logs.' },
          { title: 'AI Anomaly Log', desc: 'Complete log of all AI-generated alerts and resolutions.' }
        ].map((rep, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow">
             <div className="flex items-center text-primary-600 mb-4">
               <FileText className="w-8 h-8 mr-3" />
               <h3 className="text-lg font-bold text-slate-800 leading-tight">{rep.title}</h3>
             </div>
             <p className="text-slate-600 text-sm mb-6 h-10">{rep.desc}</p>
             <button className="w-full bg-slate-50 border border-slate-300 text-slate-700 px-4 py-2 rounded-lg flex items-center justify-center hover:bg-slate-100 transition-colors">
               <Download className="w-4 h-4 mr-2" /> Generate & Download
             </button>
          </div>
        ))}
      </div>
    </div>
  );
}
