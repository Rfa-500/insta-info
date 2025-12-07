import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { View } from './types';
import { ScreenSignup, ScreenBirthday, ScreenEmailConfirm, ScreenRecaptcha, ScreenHardCaptcha, ScreenPhone, ScreenPhoneDirect } from './components/MockScreens';
import { CostBreakdown } from './components/CostBreakdown';
import { ProfileSimulator } from './components/ProfileSimulator';
import { ChevronRight, Info, Fingerprint, Activity, Beaker } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('process');
  const [step, setStep] = useState(1);

  const steps = [
    { id: 1, title: 'Network Initialization', component: <ScreenSignup />, desc: "", difficulty: "Medium" },
    { id: 2, title: 'Age Gating', component: <ScreenBirthday />, desc: "", difficulty: "Low" },
    { id: 3, title: 'Email Verification', component: <ScreenEmailConfirm />, desc: "", difficulty: "Medium" },
    { id: 4, title: 'Bot Detection L1', component: <ScreenRecaptcha />, desc: "", difficulty: "High" },
    { id: 5, title: 'Visual Challenge', component: <ScreenHardCaptcha />, desc: "", difficulty: "High" },
    { id: 6, title: 'SIM Verification', component: <ScreenPhone />, desc: "Find good quality proxys for a fair price.", difficulty: "Extreme" },
  ];

  return (
    <div className="min-h-screen bg-black text-foreground font-sans flex antialiased selection:bg-zinc-800 selection:text-white">
      {/* Sidebar */}
      <Sidebar currentView={currentView} setView={setCurrentView} />

      {/* Main Content */}
      <main className="ml-[280px] flex-1 min-h-screen relative bg-black">
        <div className="max-w-7xl mx-auto px-12 py-10">
          
          {/* Header Area */}
          <header className="mb-12 flex justify-between items-start border-b border-zinc-900 pb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                 <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Research Documentation</span>
                 <span className="text-zinc-700 text-xs">/</span>
                 <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">{currentView}</span>
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white mb-2">
                {currentView === 'process' && 'Registration Pipeline'}
                {currentView === 'economics' && 'Acc creation price aprox.'}
                {currentView === 'profile' && 'Identity of the acc'}
                {currentView === 'phone-login' && 'Phone Direct Entry'}
              </h1>
              <p className="text-zinc-400 text-sm max-w-2xl">
                 An interactive analysis of modern anti-bot countermeasures and the resources required to bypass them.
              </p>
            </div>
            
            {(currentView === 'process' || currentView === 'phone-login') && (
               <div className="flex items-center gap-3 px-4 py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg backdrop-blur-sm">
                 <div className="relative">
                   <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                   <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-red-500 blur-[2px] opacity-50"></div>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-xs text-zinc-200 font-medium uppercase">HARD TO AUTOMATE</span>
                 </div>
               </div>
            )}
          </header>

          {/* View Content */}
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
          {currentView === 'process' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Step Navigation */}
              <div className="lg:col-span-4 space-y-6">
                 <div className="bg-zinc-950 border border-zinc-900 rounded-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-zinc-900 bg-zinc-900/20 flex justify-between items-center">
                       <span className="text-zinc-400 text-xs font-medium">Sequence</span>
                       <span className="text-zinc-600 text-[10px] font-mono">01/06</span>
                    </div>
                    <div>
                      {steps.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setStep(s.id)}
                          className={`w-full text-left px-4 py-3.5 text-sm flex justify-between items-center transition-all duration-200 border-b border-zinc-900 last:border-0 ${
                            step === s.id 
                              ? 'bg-zinc-900 text-white font-medium' 
                              : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                             <span className={`font-mono text-xs ${step === s.id ? 'text-zinc-400' : 'text-zinc-700'}`}>0{s.id}</span>
                             <span>{s.title}</span>
                          </div>
                          {step === s.id && <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]"></div>}
                        </button>
                      ))}
                    </div>
                 </div>

                 {steps.find(s => s.id === step)?.desc && (
                 <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl p-6">
                    <h4 className="text-zinc-200 text-sm font-medium mb-3 flex items-center gap-2">
                       <Fingerprint size={16} className="text-zinc-500" />
                       Technical Context
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                       {steps.find(s => s.id === step)?.desc}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2">
                       <div className="bg-black/40 border border-zinc-800 rounded p-2.5">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Difficulty</span>
                          <span className={`text-xs font-mono font-medium px-1.5 py-0.5 rounded ${
                             steps.find(s => s.id === step)?.difficulty === 'Extreme' ? 'bg-red-950/30 text-red-400 border border-red-900/30' : 
                             steps.find(s => s.id === step)?.difficulty === 'High' ? 'bg-orange-950/30 text-orange-400 border border-orange-900/30' :
                             'bg-blue-950/30 text-blue-400 border border-blue-900/30'
                          }`}>
                             {steps.find(s => s.id === step)?.difficulty.toUpperCase()}
                          </span>
                       </div>
                       <div className="bg-black/40 border border-zinc-800 rounded p-2.5">
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1">Status</span>
                          <div className="flex items-center gap-1.5">
                             <Activity size={12} className="text-emerald-500" />
                             <span className="text-xs text-zinc-300">Monitoring</span>
                          </div>
                       </div>
                    </div>
                 </div>
                 )}
              </div>

              {/* Mock Device Display */}
              <div className="lg:col-span-8 flex justify-center bg-zinc-900/20 border border-zinc-900/50 rounded-2xl py-12">
                {steps.find(s => s.id === step)?.component}
              </div>
            </div>
          )}

          {currentView === 'economics' && <CostBreakdown />}
          
          {currentView === 'profile' && <ProfileSimulator />}

          {currentView === 'phone-login' && (
             <div className="max-w-3xl mx-auto">
               <div className="bg-zinc-900/20 border border-zinc-900 rounded-xl p-8 text-center mb-8">
                  <Beaker className="w-12 h-12 text-zinc-500 mx-auto mb-4" />
                  <h2 className="text-xl font-medium text-white mb-2">Experimental Module</h2>
                  <p className="text-zinc-400 max-w-md mx-auto">
                     This method skips the initial email assignment and attempts to register directly with a phone number. Success rate is currently untracked.
                  </p>
               </div>
               <div className="flex justify-center">
                  <ScreenPhoneDirect />
               </div>
             </div>
          )}
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;