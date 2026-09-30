import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, User } from 'lucide-react';

export default function Login() {
  const [email, setEmail] = useState('official@dosje.gov.in');
  const [password, setPassword] = useState('demo123');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'official@dosje.gov.in' && password === 'demo123') {
      localStorage.setItem('role', 'official');
      navigate('/official');
    } else if (email === 'ngo@demo.org' && password === 'demo123') {
      localStorage.setItem('role', 'ngo');
      navigate('/ngo');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-primary-900 p-8 text-white text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-4 text-primary-300" />
          <h1 className="text-2xl font-bold mb-2">DoSJE Platform</h1>
          <p className="text-primary-200">Centralized Monitoring and Inspection</p>
        </div>
        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>}
            
            <div>
              <label className="label-text">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  required
                  className="input-field pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="label-text">Password</label>
              <input
                type="password"
                required
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="w-full btn-primary py-3 flex justify-center items-center gap-2">
              Sign In
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-semibold text-gray-500 mb-4 text-center">Demo Credentials</h3>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => { setEmail('official@dosje.gov.in'); setPassword('demo123'); }}>
                <p className="font-semibold text-primary-700 mb-1">DoSJE Official</p>
                <p>official@dosje.gov.in</p>
                <p>demo123</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors" onClick={() => { setEmail('ngo@demo.org'); setPassword('demo123'); }}>
                <p className="font-semibold text-primary-700 mb-1">NGO / Institute</p>
                <p>ngo@demo.org</p>
                <p>demo123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
