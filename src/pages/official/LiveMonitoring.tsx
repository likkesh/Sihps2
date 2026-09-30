import React, { useState } from 'react';
import { Video, Maximize, AlertCircle } from 'lucide-react';

const mockStreams = [
  { id: 'NGO-001', name: 'Sunrise Welfare', camera: 'Main Entrance', status: 'Live', aiFlag: false },
  { id: 'NGO-001', name: 'Sunrise Welfare', camera: 'Dining Hall', status: 'Live', aiFlag: false },
  { id: 'NGO-042', name: 'Hope Foundation', camera: 'Corridor 2', status: 'Live', aiFlag: true },
  { id: 'NGO-088', name: 'Care Center', camera: 'Playground', status: 'Live', aiFlag: false },
];

export default function LiveMonitoring() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Live Video Monitoring</h1>
        <div className="flex gap-2">
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">
            <option>All Districts</option>
            <option>Coimbatore</option>
            <option>Chennai</option>
          </select>
          <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white">
            <option>All NGOs</option>
            <option>Sunrise Welfare</option>
            <option>Hope Foundation</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mockStreams.map((stream, i) => (
          <div key={i} className={`bg-slate-900 rounded-xl overflow-hidden relative shadow-sm border ${stream.aiFlag ? 'border-red-500' : 'border-slate-800'}`}>
            <div className="aspect-video flex items-center justify-center">
              <div className="text-center opacity-30">
                <Video className="w-12 h-12 text-white mx-auto mb-2" />
                <p className="text-white font-mono text-sm">SECURE STREAM</p>
              </div>
            </div>
            
            <div className="absolute top-3 left-3 flex gap-2">
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded font-bold uppercase animate-pulse">Live</span>
              <span className="bg-black/60 text-white text-xs px-2 py-0.5 rounded backdrop-blur">{stream.id}</span>
            </div>
            
            {stream.aiFlag && (
              <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur text-white text-xs px-2 py-1 rounded flex items-center shadow-lg">
                <AlertCircle className="w-3 h-3 mr-1" />
                AI ALERT: Unusual Gathering
              </div>
            )}
            
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-white font-medium">{stream.name}</h3>
                  <p className="text-slate-300 text-sm flex items-center"><Video className="w-3 h-3 mr-1" /> {stream.camera}</p>
                </div>
                <button onClick={() => setSelected(stream)} className="text-white hover:text-primary-400 bg-black/40 p-2 rounded-lg backdrop-blur transition-colors">
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <div className="w-full max-w-6xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl font-bold flex items-center">
                <span className="w-3 h-3 bg-red-600 rounded-full mr-3 animate-pulse"></span>
                {selected.name} - {selected.camera}
              </h2>
              <button onClick={() => setSelected(null)} className="text-white hover:text-slate-300 bg-white/10 p-2 rounded-full backdrop-blur">
                &times;
              </button>
            </div>
            <div className="aspect-video bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center relative">
               <div className="text-center opacity-50">
                 <Video className="w-20 h-20 text-white mx-auto mb-4" />
                 <p className="text-white font-mono text-xl tracking-widest">FULLSCREEN SECURE FEED</p>
                 <p className="text-slate-400 text-sm mt-2">ID: {selected.id}</p>
               </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
               <button className="px-4 py-2 bg-red-600/20 text-red-500 border border-red-500/50 rounded-lg hover:bg-red-600/30">Raise Alert</button>
               <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">Schedule Video Verification</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
