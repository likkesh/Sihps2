import { useState } from 'react';
import { AlertTriangle, ShieldAlert, CheckCircle, Search } from 'lucide-react';
import { mockAlerts } from '../../data/mockData';

export default function AIAlerts() {
  const [alerts, setAlerts] = useState(mockAlerts);

  const handleInvestigate = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: 'Investigating' } : a));
  };

  const handleMarkReviewed = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, status: 'Reviewed' } : a));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">AI Alerts & Insights</h2>
        <div className="flex gap-2 text-sm text-slate-500 items-center">
          <ShieldAlert className="w-4 h-4 text-primary-500" />
          <span className="font-medium text-primary-600">DEMO: AI-generated simulation alerts</span>
        </div>
      </div>

      <div className="grid gap-4">
        {alerts.map(alert => (
          <div key={alert.id} className="card p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className={`p-4 rounded-full flex-shrink-0 ${
              alert.severity === 'HIGH' ? 'bg-red-100 text-red-600' :
              alert.severity === 'MEDIUM' ? 'bg-orange-100 text-orange-600' : 'bg-yellow-100 text-yellow-600'
            }`}>
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  alert.severity === 'HIGH' ? 'bg-red-500 text-white' :
                  alert.severity === 'MEDIUM' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-white'
                }`}>
                  {alert.severity}
                </span>
                <span className="text-xs text-slate-500 font-medium">{alert.time}</span>
                <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-medium border ${
                  alert.status === 'New' ? 'border-blue-200 bg-blue-50 text-blue-700' :
                  alert.status === 'Investigating' ? 'border-orange-200 bg-orange-50 text-orange-700' : 'border-green-200 bg-green-50 text-green-700'
                }`}>
                  {alert.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-800">{alert.title}</h3>
              <p className="text-sm font-medium text-slate-700 mt-1">{alert.project} • {alert.district}</p>
              <p className="text-sm text-slate-600 mt-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                {alert.description}
              </p>
              <p className="text-sm font-medium text-primary-700 mt-3">
                Recommended action: {alert.recommendedAction}
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              {alert.status === 'New' && (
                <button onClick={() => handleInvestigate(alert.id)} className="btn-primary w-full md:w-40 flex items-center justify-center gap-2">
                  <Search className="w-4 h-4" /> Investigate
                </button>
              )}
              {(alert.status === 'New' || alert.status === 'Investigating') && (
                <button onClick={() => handleMarkReviewed(alert.id)} className="btn-secondary w-full md:w-40 flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" /> Mark Reviewed
                </button>
              )}
              {alert.severity === 'HIGH' && alert.status !== 'Reviewed' && (
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-sm shadow-sm">
                  Assign Inspection
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
