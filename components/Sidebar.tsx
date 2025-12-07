import React from 'react';
import { Shield, DollarSign, UserCog, Terminal, Smartphone } from 'lucide-react';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView }) => {
  const navItemClass = (view: View) => `
    w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-sm transition-all duration-200 group
    ${currentView === view 
      ? 'bg-zinc-900 text-white font-medium' 
      : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50'}
  `;

  return (
    <div className="w-[280px] border-r border-zinc-900 bg-black flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
           <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              <span className="text-black font-bold font-mono tracking-tighter">IG</span>
           </div>
           <div>
             <span className="font-semibold text-sm block leading-none">SecDoc</span>
             <span className="text-[10px] text-zinc-500 font-mono">v1.0.4 // REL-5</span>
           </div>
        </div>

        <div className="space-y-1">
          <div className="px-3 mb-2 text-[10px] font-medium text-zinc-600 uppercase tracking-widest">Modules</div>
          <button onClick={() => setView('process')} className={navItemClass('process')}>
            <Shield size={16} className={currentView === 'process' ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'} />
            Security Pipeline
          </button>
          <button onClick={() => setView('economics')} className={navItemClass('economics')}>
            <DollarSign size={16} className={currentView === 'economics' ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'} />
            Acc creation price aprox.
          </button>
          <button onClick={() => setView('profile')} className={navItemClass('profile')}>
            <UserCog size={16} className={currentView === 'profile' ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'} />
            Identity of the acc
          </button>
          <button onClick={() => setView('phone-login')} className={navItemClass('phone-login')}>
            <Smartphone size={16} className={currentView === 'phone-login' ? 'text-white' : 'text-zinc-600 group-hover:text-zinc-400'} />
            Phone Direct (Untested)
          </button>
        </div>
      </div>

      <div className="mt-auto p-6 border-t border-zinc-900 bg-zinc-950/30">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Terminal size={14} className="text-zinc-500" />
          </div>
          <div className="text-xs text-zinc-500 leading-relaxed">
            <p className="mb-2">Made and researched fast by <span className="text-zinc-300 font-medium">rfa500</span></p>
            <div className="flex items-center gap-2 text-[10px] opacity-60">
               <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
               System Operational
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};