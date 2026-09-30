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
                <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                  cam.status === 'ONLINE' ? 'bg-green-500 text-white' : 
                  cam.status === 'OFFLINE' ? 'bg-red-500 text-white' : 'bg-yellow-500 text-white'
                }`}>
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
