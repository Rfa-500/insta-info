import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { Card } from './ui/Card';
import { DollarSign, Server, Smartphone, Mail, Users } from 'lucide-react';

const data = [
  { name: 'Proxies (50x)', cost: 15.00, fullMark: 100 },
  { name: 'SMS Verif (50x)', cost: 7.50, fullMark: 100 },
  { name: 'Temp Emails (50x)', cost: 1.00, fullMark: 100 },
];

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode; subtext: string }> = ({ title, value, icon, subtext }) => (
  <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-zinc-500 text-sm font-medium">{title}</p>
        <h4 className="text-2xl font-bold text-white mt-1">{value}</h4>
      </div>
      <div className="p-2 bg-zinc-800 rounded-md text-zinc-400">
        {icon}
      </div>
    </div>
    <p className="text-xs text-zinc-600 font-mono">{subtext}</p>
  </div>
);

export const CostBreakdown: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Residential Proxies" 
          value="$0.30" 
          icon={<Server size={18} />} 
          subtext="Per Sticky IP (1h)"
        />
        <StatCard 
          title="SMS Activation" 
          value="$0.15" 
          icon={<Smartphone size={18} />} 
          subtext="Per Code (Cheap Geo)"
        />
        <StatCard 
          title="Email Domains" 
          value="$0.02" 
          icon={<Mail size={18} />} 
          subtext="Bulk alias generation"
        />
        <StatCard 
          title="Total Bundle (50)" 
          value="$23.50" 
          icon={<Users size={18} />} 
          subtext="Estimated Market Rate"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 min-h-[400px]" title="Acc creation price aprox." description="Cost allocation for 50 accounts using budget providers.">
          <div className="h-[300px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" horizontal={false} />
                <XAxis type="number" stroke="#71717a" fontSize={12} tickFormatter={(value) => `$${value}`} />
                <YAxis dataKey="name" type="category" stroke="#a1a1aa" fontSize={12} width={100} />
                <Tooltip 
                  cursor={{fill: '#27272a', opacity: 0.4}}
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#27272a', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="cost" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card title="Infrastructure Requirements" description="Specs for 50 concurrent loads">
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-sm">
              <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
              <div>
                <span className="block text-zinc-200 font-medium">Residential Proxies</span>
                <p className="text-zinc-500 text-xs mt-1">Cheap rotating residential pool. High fraud score risk but low cost.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              <div>
                <span className="block text-zinc-200 font-medium">Device Fingerprint</span>
                <p className="text-zinc-500 text-xs mt-1">Standard emulation. Avoid high-end datacenter IPs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <div className="mt-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
              <div>
                <span className="block text-zinc-200 font-medium">SMS Verification</span>
                <p className="text-zinc-500 text-xs mt-1">Use Tier-2/3 countries for lower cost verification.</p>
              </div>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
};