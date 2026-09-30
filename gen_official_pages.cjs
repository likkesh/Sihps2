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

const offLiveMonitoring = `
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
          <div key={i} className={\`bg-slate-900 rounded-xl overflow-hidden relative shadow-sm border \${stream.aiFlag ? 'border-red-500' : 'border-slate-800'}\`}>
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
`;

const offCCTV = `
import React, { useState } from 'react';
import { Camera, Search, Filter, ShieldAlert } from 'lucide-react';

const mockSystem = [
  { ngo: 'Sunrise Welfare', id: 'NGO-001', total: 6, online: 5, offline: 1, lastCheck: '2 mins ago' },
  { ngo: 'Hope Foundation', id: 'NGO-042', total: 8, online: 8, offline: 0, lastCheck: '5 mins ago' },
  { ngo: 'Care Center', id: 'NGO-088', total: 4, online: 2, offline: 2, lastCheck: '1 hr ago' },
  { ngo: 'Bright Future', id: 'NGO-103', total: 10, online: 10, offline: 0, lastCheck: '10 mins ago' },
];

export default function CCTVSurveillance() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">CCTV System Overview</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Monitored NGOs</p>
          <p className="text-2xl font-bold text-slate-800">45</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Total Cameras</p>
          <p className="text-2xl font-bold text-slate-800">324</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500">Online Cameras</p>
          <p className="text-2xl font-bold text-green-600">308</p>
        </div>
        <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100 flex justify-between items-center">
          <div>
             <p className="text-sm text-red-600 font-medium">Offline/Alerts</p>
             <p className="text-2xl font-bold text-red-700">16</p>
          </div>
          <ShieldAlert className="w-8 h-8 text-red-300" />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search NGO..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
          </div>
          <button className="flex items-center text-slate-600 border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">NGO ID</th>
                <th className="p-4 font-medium">NGO Name</th>
                <th className="p-4 font-medium">Total Cameras</th>
                <th className="p-4 font-medium">Online</th>
                <th className="p-4 font-medium">Offline</th>
                <th className="p-4 font-medium">Last Check-in</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockSystem.filter(s => s.ngo.toLowerCase().includes(searchTerm.toLowerCase())).map((sys, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600">{sys.id}</td>
                  <td className="p-4 font-medium text-slate-800">{sys.ngo}</td>
                  <td className="p-4 text-slate-600">{sys.total}</td>
                  <td className="p-4 text-green-600 font-medium">{sys.online}</td>
                  <td className="p-4"><span className={sys.offline > 0 ? 'text-red-600 font-bold' : 'text-slate-500'}>{sys.offline}</span></td>
                  <td className="p-4 text-slate-500">{sys.lastCheck}</td>
                  <td className="p-4">
                    <button className="text-primary-600 hover:text-primary-900 flex items-center text-sm font-medium">
                       View Nodes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
`;

const offInspections = `
import React, { useState } from 'react';
import { FileCheck, Search, Dices, Calendar } from 'lucide-react';

const mockIns = [
  { id: 'INS-2026-089', ngo: 'Sunrise Welfare', type: 'Surprise', inspector: 'S. Mehta', date: '18 Sep 2026', status: 'Completed', result: 'Satisfactory' },
  { id: 'INS-2026-090', ngo: 'Hope Foundation', type: 'Routine', inspector: 'A. Patel', date: '20 Sep 2026', status: 'Pending', result: '-' },
  { id: 'INS-2026-091', ngo: 'Care Center', type: 'Follow-up', inspector: 'R. Sharma', date: '21 Sep 2026', status: 'In Progress', result: '-' },
];

export default function Inspections() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Inspection Management</h1>
        <div className="flex space-x-3">
          <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg flex items-center hover:bg-slate-50">
            <Calendar className="w-4 h-4 mr-2" /> Schedule Routine
          </button>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <Dices className="w-4 h-4 mr-2" /> Assign Random Inspection
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
           <p className="text-sm text-slate-500">Inspections This Month</p>
           <p className="text-2xl font-bold text-slate-800">24</p>
         </div>
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
           <p className="text-sm text-slate-500">Pending</p>
           <p className="text-2xl font-bold text-orange-500">8</p>
         </div>
         <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
           <p className="text-sm text-slate-500">Completed</p>
           <p className="text-2xl font-bold text-green-600">16</p>
         </div>
         <div className="bg-red-50 p-4 rounded-xl shadow-sm border border-red-100">
           <p className="text-sm text-red-600 font-medium">Critical Findings</p>
           <p className="text-2xl font-bold text-red-700">2</p>
         </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search NGO or ID..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">NGO Name</th>
                <th className="p-4 font-medium">Type</th>
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Inspector</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Result</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {mockIns.map((ins, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600">{ins.id}</td>
                  <td className="p-4 font-medium text-slate-800">{ins.ngo}</td>
                  <td className="p-4 text-slate-600">{ins.type}</td>
                  <td className="p-4 text-slate-600">{ins.date}</td>
                  <td className="p-4 text-slate-600">{ins.inspector}</td>
                  <td className="p-4">
                    <span className={\`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium \${
                      ins.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      ins.status === 'Pending' ? 'bg-orange-100 text-orange-800' : 'bg-blue-100 text-blue-800'
                    }\`}>
                      {ins.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600 font-medium">{ins.result}</td>
                  <td className="p-4">
                     <button className="text-primary-600 hover:text-primary-900 font-medium text-sm">View Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
`;

const offAttendanceAnalytics = `
import React from 'react';
import { Users, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react';

export default function AttendanceAnalytics() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Attendance Analytics</h1>
        <select className="border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white shadow-sm">
          <option>Last 7 Days</option>
          <option>This Month</option>
          <option>Last 3 Months</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between">
             <h3 className="text-slate-500 font-medium">Global Avg Attendance</h3>
             <Users className="w-5 h-5 text-primary-500" />
           </div>
           <p className="text-3xl font-bold text-slate-800 mt-4">88.4%</p>
           <p className="text-sm text-green-600 mt-2 flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> +1.2% from last week</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between">
             <h3 className="text-slate-500 font-medium">NGOs Below Threshold (&lt;75%)</h3>
             <AlertTriangle className="w-5 h-5 text-orange-500" />
           </div>
           <p className="text-3xl font-bold text-slate-800 mt-4">3</p>
           <p className="text-sm text-red-600 mt-2 flex items-center"><TrendingDown className="w-4 h-4 mr-1" /> Requires attention</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between">
             <h3 className="text-slate-500 font-medium">Total Beneficiaries Monitored</h3>
             <Users className="w-5 h-5 text-blue-500" />
           </div>
           <p className="text-3xl font-bold text-slate-800 mt-4">4,250</p>
           <p className="text-sm text-slate-500 mt-2">Across 45 NGOs</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
         <h2 className="text-lg font-bold text-slate-800 mb-4">NGOs Flagged for Attendance Drops</h2>
         <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">NGO ID</th>
                <th className="p-4 font-medium">Name</th>
                <th className="p-4 font-medium">Expected</th>
                <th className="p-4 font-medium">Actual (Today)</th>
                <th className="p-4 font-medium">Variance</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
               <tr className="border-b border-slate-100 hover:bg-slate-50 bg-red-50/30">
                 <td className="p-4 font-medium text-primary-600">NGO-001</td>
                 <td className="p-4 font-bold text-slate-800">Sunrise Welfare Centre</td>
                 <td className="p-4 text-slate-600">126</td>
                 <td className="p-4 text-red-600 font-bold">48</td>
                 <td className="p-4 text-red-600 font-medium">-62%</td>
                 <td className="p-4">
                   <button className="px-3 py-1 bg-primary-600 text-white rounded text-sm hover:bg-primary-700" onClick={()=>alert('Investigating Sunrise Welfare')}>Investigate</button>
                 </td>
               </tr>
            </tbody>
          </table>
         </div>
      </div>
    </div>
  );
}
`;

const offCompliance = `
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Search, Filter } from 'lucide-react';

export default function Compliance() {
  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    // Shared state simulation
    const stored = JSON.parse(localStorage.getItem('shared_compliance') || '[]');
    const mapped = stored.map((s: any) => ({
      id: s.id,
      ngo: 'Sunrise Welfare',
      title: s.title,
      detected: s.detected || 'Today',
      status: s.status
    }));
    if (mapped.length === 0) {
      mapped.push({ id: 'CMP-001', ngo: 'Sunrise Welfare', title: 'Attendance records require clarification', detected: '24 Sep 2026', status: 'Pending' });
    }
    setIssues(mapped);
  }, []);

  const resolveIssue = (id: string) => {
    const stored = JSON.parse(localStorage.getItem('shared_compliance') || '[]');
    const updated = stored.map((s: any) => s.id === id ? { ...s, status: 'Resolved' } : s);
    localStorage.setItem('shared_compliance', JSON.stringify(updated));
    setIssues(issues.map(i => i.id === id ? { ...i, status: 'Resolved' } : i));
    alert('Issue marked as resolved.');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-900">Compliance & Observations</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center">
          <div className="relative w-64">
            <Search className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" />
            <input type="text" placeholder="Search NGO or Issue ID..." className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <button className="flex items-center text-slate-600 border border-slate-300 rounded-lg px-4 py-2 hover:bg-slate-50">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                <th className="p-4 font-medium">Issue ID</th>
                <th className="p-4 font-medium">NGO Name</th>
                <th className="p-4 font-medium">Observation / Issue</th>
                <th className="p-4 font-medium">Detected Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((iss, i) => (
                <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-primary-600">{iss.id}</td>
                  <td className="p-4 font-bold text-slate-800">{iss.ngo}</td>
                  <td className="p-4 text-slate-700">{iss.title}</td>
                  <td className="p-4 text-slate-500">{iss.detected}</td>
                  <td className="p-4">
                    <span className={\`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium \${
                      iss.status === 'Pending' ? 'bg-red-100 text-red-800' : 
                      iss.status === 'Response Submitted' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }\`}>
                      {iss.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {iss.status === 'Response Submitted' ? (
                      <button onClick={() => resolveIssue(iss.id)} className="px-3 py-1 bg-green-50 border border-green-200 text-green-700 rounded text-sm hover:bg-green-100">Review & Resolve</button>
                    ) : (
                      <button className="text-primary-600 hover:text-primary-900 font-medium text-sm">View Details</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
`;

const offReports = `
import React from 'react';
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
`;

writePage('src/pages/official/LiveMonitoring.tsx', offLiveMonitoring);
writePage('src/pages/official/CCTVSurveillance.tsx', offCCTV);
writePage('src/pages/official/Inspections.tsx', offInspections);
writePage('src/pages/official/AttendanceAnalytics.tsx', offAttendanceAnalytics);
writePage('src/pages/official/Compliance.tsx', offCompliance);
writePage('src/pages/official/Reports.tsx', offReports);

console.log('Official Pages done!');
