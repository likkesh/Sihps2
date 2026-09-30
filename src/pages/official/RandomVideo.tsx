import { useState, useEffect } from 'react';
import { PhoneCall, Video, Mic, MicOff, Camera, CameraOff, MonitorX, AlertCircle, FileText, User } from 'lucide-react';
import { mockProjects } from '../../data/mockData';

export default function RandomVideo() {
  const [inCall, setInCall] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [timer, setTimer] = useState(0);
  const [selectedProject, setSelectedProject] = useState(mockProjects[0].id);

  const activeProject = mockProjects.find(p => p.id === selectedProject);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (inCall) {
      interval = setInterval(() => {
        setTimer(t => t + 1);
      }, 1000);
    } else {
      setTimer(0);
    }
    return () => clearInterval(interval);
  }, [inCall]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleStartCall = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setInCall(true);
    }, 2000);
  };

  const handleEndCall = () => {
    setInCall(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Random Video Verification</h2>
        <div className="flex gap-2 text-sm text-slate-500 items-center">
          <AlertCircle className="w-4 h-4 text-primary-500" />
          <span className="font-medium text-primary-600">DEMO: Simulated video call interface</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 lg:col-span-1 h-fit">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Select Project</h3>
          
          <div className="space-y-4 mb-6">
            <div>
              <label className="label-text">Available Projects (Online)</label>
              <select 
                className="input-field"
                value={selectedProject}
                onChange={e => setSelectedProject(e.target.value)}
                disabled={inCall || connecting}
              >
                {mockProjects.filter(p => p.status === 'Active').map(p => (
                  <option key={p.id} value={p.id}>{p.name} ({p.district})</option>
                ))}
              </select>
            </div>
            
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <p className="text-sm font-semibold text-slate-700">Project Details</p>
              <p className="text-sm text-slate-600 mt-2"><span className="font-medium">In-charge:</span> {activeProject?.projectInCharge}</p>
              <p className="text-sm text-slate-600"><span className="font-medium">Contact:</span> {activeProject?.contact}</p>
              <p className="text-sm text-slate-600"><span className="font-medium">Beneficiaries:</span> {activeProject?.beneficiariesCount}</p>
            </div>
          </div>

          {!inCall && !connecting ? (
            <button onClick={handleStartCall} className="w-full btn-primary py-3 flex justify-center items-center gap-2 bg-green-600 hover:bg-green-700 focus:ring-green-500">
              <Video className="w-5 h-5" /> START RANDOM VIDEO CALL
            </button>
          ) : (
            <div className="space-y-4">
              <button onClick={handleEndCall} className="w-full btn-danger py-3 flex justify-center items-center gap-2">
                <MonitorX className="w-5 h-5" /> END CALL
              </button>
              <button className="w-full btn-secondary py-2 flex justify-center items-center gap-2">
                <Camera className="w-4 h-4" /> Capture Evidence
              </button>
              <button className="w-full btn-secondary py-2 flex justify-center items-center gap-2">
                <FileText className="w-4 h-4" /> Add Notes
              </button>
            </div>
          )}
        </div>

        <div className="card lg:col-span-2 bg-slate-900 overflow-hidden relative min-h-[500px] flex items-center justify-center">
          {!inCall && !connecting && (
            <div className="text-center text-slate-500">
              <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Select a project and start the call.</p>
            </div>
          )}

          {connecting && (
            <div className="text-center text-white">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mb-4">
                  <PhoneCall className="w-8 h-8 animate-bounce text-green-400" />
                </div>
                <p className="text-lg font-medium">Connecting to {activeProject?.name}...</p>
                <p className="text-sm text-slate-400 mt-2">Ringing {activeProject?.projectInCharge}</p>
              </div>
            </div>
          )}

          {inCall && (
            <div className="absolute inset-0 flex flex-col">
              {/* Main remote video placeholder */}
              <div className="flex-1 relative bg-slate-800 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <User className="w-32 h-32 mx-auto mb-4 opacity-30" />
                  <p className="text-xl font-medium">{activeProject?.projectInCharge}</p>
                  <p className="text-sm">Project In-charge • {activeProject?.name}</p>
                </div>
                
                {/* Overlay details */}
                <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm flex items-center gap-2 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  {formatTime(timer)}
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm text-sm font-medium">
                  Remote Video
                </div>

                {/* Local video thumbnail */}
                <div className="absolute bottom-6 right-6 w-48 h-36 bg-slate-700 rounded-lg overflow-hidden border-2 border-slate-600 shadow-xl flex items-center justify-center">
                  {camOn ? (
                    <User className="w-16 h-16 text-slate-400 opacity-50" />
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                      <CameraOff className="w-8 h-8 mb-2" />
                      <span className="text-xs">Camera Off</span>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-0.5 rounded text-xs">
                    You (Official)
                  </div>
                </div>
              </div>

              {/* Call Controls */}
              <div className="h-20 bg-slate-950 flex items-center justify-center gap-6">
                <button 
                  onClick={() => setMicOn(!micOn)}
                  className={`p-4 rounded-full transition-colors ${micOn ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                >
                  {micOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
                </button>
                <button 
                  onClick={() => setCamOn(!camOn)}
                  className={`p-4 rounded-full transition-colors ${camOn ? 'bg-slate-700 hover:bg-slate-600 text-white' : 'bg-red-500 hover:bg-red-600 text-white'}`}
                >
                  {camOn ? <Camera className="w-6 h-6" /> : <CameraOff className="w-6 h-6" />}
                </button>
                <button 
                  onClick={handleEndCall}
                  className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  <PhoneCall className="w-6 h-6 transform rotate-[135deg]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
