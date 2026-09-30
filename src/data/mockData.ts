export interface Project {
  id: string;
  name: string;
  ngoName: string;
  scheme: string;
  district: string;
  address: string;
  beneficiariesCount: number;
  staffCount: number;
  cctvStatus: 'ONLINE' | 'OFFLINE';
  lastInspection: string;
  complianceStatus: 'Compliant' | 'Partially Compliant' | 'Non-Compliant' | 'Under Review';
  status: 'Active' | 'Inactive';
  projectInCharge: string;
  contact: string;
}

export const mockProjects: Project[] = [
  {
    id: 'PRJ-1001',
    name: 'Sunrise Welfare Centre',
    ngoName: 'Sunrise Foundation',
    scheme: 'Integrated Programme for Senior Citizens',
    district: 'Coimbatore',
    address: '12, Sunrise Avenue, Coimbatore',
    beneficiariesCount: 126,
    staffCount: 18,
    cctvStatus: 'ONLINE',
    lastInspection: '2026-08-15',
    complianceStatus: 'Compliant',
    status: 'Active',
    projectInCharge: 'Ramesh Kumar',
    contact: '+91 9876543210'
  },
  {
    id: 'PRJ-1002',
    name: 'Hope Rehabilitation Institute',
    ngoName: 'Hope Society',
    scheme: 'De-addiction Centre',
    district: 'Madurai',
    address: '45, Hope Street, Madurai',
    beneficiariesCount: 85,
    staffCount: 12,
    cctvStatus: 'OFFLINE',
    lastInspection: '2026-07-10',
    complianceStatus: 'Partially Compliant',
    status: 'Active',
    projectInCharge: 'Kavitha S',
    contact: '+91 9876543211'
  },
  {
    id: 'PRJ-1003',
    name: 'Helping Hands NGO',
    ngoName: 'Helping Hands',
    scheme: 'Half-way Home',
    district: 'Salem',
    address: '78, Main Road, Salem',
    beneficiariesCount: 45,
    staffCount: 8,
    cctvStatus: 'ONLINE',
    lastInspection: '2026-09-01',
    complianceStatus: 'Non-Compliant',
    status: 'Active',
    projectInCharge: 'Suresh Menon',
    contact: '+91 9876543212'
  },
  {
    id: 'PRJ-1004',
    name: 'Care & Compassion Home',
    ngoName: 'Care Foundation',
    scheme: 'Integrated Programme for Senior Citizens',
    district: 'Chennai',
    address: '101, Care Street, Chennai',
    beneficiariesCount: 210,
    staffCount: 25,
    cctvStatus: 'ONLINE',
    lastInspection: '2026-09-20',
    complianceStatus: 'Compliant',
    status: 'Active',
    projectInCharge: 'Meena R',
    contact: '+91 9876543213'
  },
  {
    id: 'PRJ-1005',
    name: 'New Life Centre',
    ngoName: 'New Life Trust',
    scheme: 'De-addiction Centre',
    district: 'Erode',
    address: '22, New Life Road, Erode',
    beneficiariesCount: 60,
    staffCount: 10,
    cctvStatus: 'ONLINE',
    lastInspection: '2026-08-05',
    complianceStatus: 'Compliant',
    status: 'Active',
    projectInCharge: 'Anand T',
    contact: '+91 9876543214'
  }
];

export const mockAlerts = [
  {
    id: 'ALT-001',
    severity: 'HIGH',
    title: 'Attendance anomaly detected',
    project: 'Sunrise Welfare Centre',
    district: 'Coimbatore',
    time: '10:42 AM',
    description: 'Observed attendance: 38% | Expected attendance: 82%',
    recommendedAction: 'Schedule surprise inspection.',
    status: 'New'
  },
  {
    id: 'ALT-002',
    severity: 'MEDIUM',
    title: 'CCTV offline',
    project: 'Hope Rehabilitation Institute',
    district: 'Madurai',
    time: '09:18 AM',
    description: 'Camera 03 has been offline for over 4 hours.',
    recommendedAction: 'Contact project in-charge.',
    status: 'Investigating'
  },
  {
    id: 'ALT-003',
    severity: 'LOW',
    title: 'Inspection report pending',
    project: 'Helping Hands NGO',
    district: 'Salem',
    time: 'Yesterday',
    description: 'Routine inspection report from Sept 01 is still pending submission.',
    recommendedAction: 'Send reminder to inspector.',
    status: 'New'
  }
];

export const mockInspections = [
  {
    id: 'INSP-2026-001',
    project: 'Sunrise Welfare Centre',
    inspector: 'PMU Inspector – Arun Kumar',
    district: 'Coimbatore',
    scheduledDate: '2026-09-30',
    type: 'Routine',
    status: 'Upcoming',
    priority: 'Normal'
  },
  {
    id: 'INSP-2026-002',
    project: 'Hope Rehabilitation Institute',
    inspector: 'District Officer – Priya M',
    district: 'Madurai',
    scheduledDate: '2026-09-28',
    type: 'Surprise',
    status: 'Pending',
    priority: 'High'
  },
  {
    id: 'INSP-2026-003',
    project: 'New Life Centre',
    inspector: 'PMU Inspector – Arun Kumar',
    district: 'Erode',
    scheduledDate: '2026-08-05',
    type: 'Routine',
    status: 'Completed',
    priority: 'Normal'
  }
];

export const mockBeneficiaries = [
  { id: 'BEN-001', name: 'Krishnan M', age: 72, category: 'Senior Citizen', enrollmentDate: '2025-01-15', attendance: 'Present', status: 'Active' },
  { id: 'BEN-002', name: 'Lakshmi S', age: 68, category: 'Senior Citizen', enrollmentDate: '2025-02-20', attendance: 'Absent', status: 'Active' },
  { id: 'BEN-003', name: 'Raja V', age: 75, category: 'Senior Citizen', enrollmentDate: '2025-03-10', attendance: 'Present', status: 'Active' },
  { id: 'BEN-004', name: 'Kannan P', age: 45, category: 'De-addiction', enrollmentDate: '2026-05-12', attendance: 'Present', status: 'Active' },
  { id: 'BEN-005', name: 'Ramesh G', age: 38, category: 'De-addiction', enrollmentDate: '2026-06-05', attendance: 'Present', status: 'Active' },
];

export const mockStaff = [
  { id: 'STF-001', name: 'Ramesh Kumar', role: 'Project In-charge', phone: '+91 9876543210', attendance: 'Present', status: 'Active' },
  { id: 'STF-002', name: 'Sita M', role: 'Counselor', phone: '+91 9876543299', attendance: 'Present', status: 'Active' },
  { id: 'STF-003', name: 'Vijay K', role: 'Warden', phone: '+91 9876543288', attendance: 'Absent', status: 'Active' },
];
