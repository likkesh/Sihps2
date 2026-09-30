import { useState } from 'react';
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
          <div key={n.id} className={`p-4 border-b border-slate-100 flex items-start transition-colors hover:bg-slate-50 ${n.unread ? 'bg-blue-50/30' : ''}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm border border-slate-100 mr-4 flex-shrink-0 ${n.color}`}>
              <n.icon className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className={`text-sm ${n.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>{n.title}</h3>
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
