import React, { useState, useEffect } from 'react';
import { Card } from './ui/Card';
import { RefreshCcw, Lock, Unlock, User, Image as ImageIcon, FileText } from 'lucide-react';

const MOCK_BIOS = [
  "Living life one pixel at a time 📸",
  "Digital nomad | Coffee enthusiast ☕",
  "Just here for the memes.",
  "Artist based in NYC 🎨",
  "Creating moments.",
];

const MOCK_PICS = [
  "https://picsum.photos/200/200?random=1",
  "https://picsum.photos/200/200?random=2",
  "https://picsum.photos/200/200?random=3",
  "https://picsum.photos/200/200?random=4",
];

export const ProfileSimulator: React.FC = () => {
  const [profile, setProfile] = useState({
    pic: MOCK_PICS[0],
    bio: MOCK_BIOS[0],
    isPrivate: true,
    posts: 1,
    following: 42,
    followers: 12
  });

  const generateRandom = () => {
    setProfile({
      pic: MOCK_PICS[Math.floor(Math.random() * MOCK_PICS.length)],
      bio: MOCK_BIOS[Math.floor(Math.random() * MOCK_BIOS.length)],
      isPrivate: Math.random() > 0.5,
      posts: Math.random() > 0.5 ? 1 : 0,
      following: Math.floor(Math.random() * 200) + 20,
      followers: Math.floor(Math.random() * 50) + 5,
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Profile Humanization</h2>
          <p className="text-zinc-400 text-sm">Simulating organic user behavior to increase trust score.</p>
        </div>
        <button 
          onClick={generateRandom}
          className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-black rounded hover:bg-zinc-200 transition-colors font-medium text-sm"
        >
          <RefreshCcw size={16} />
          <span>Randomize Identity</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Preview Card */}
        <div className="bg-black border border-zinc-800 rounded-xl p-6 flex flex-col items-center shadow-2xl relative overflow-hidden">
             <div className="w-full flex justify-between items-center mb-6 px-2">
                <span className="font-bold text-lg">test_user_72</span>
                {profile.isPrivate ? <Lock size={18} /> : <Unlock size={18} />}
             </div>
             
             <div className="flex w-full items-center justify-between mb-6 px-4">
                <img src={profile.pic} alt="Profile" className="w-20 h-20 rounded-full border-2 border-zinc-800" />
                <div className="flex gap-4 text-center">
                   <div>
                      <div className="font-bold text-lg">{profile.posts}</div>
                      <div className="text-xs text-zinc-400">Posts</div>
                   </div>
                   <div>
                      <div className="font-bold text-lg">{profile.followers}</div>
                      <div className="text-xs text-zinc-400">Followers</div>
                   </div>
                   <div>
                      <div className="font-bold text-lg">{profile.following}</div>
                      <div className="text-xs text-zinc-400">Following</div>
                   </div>
                </div>
             </div>
             
             <div className="w-full px-4 mb-6">
                <div className="font-bold text-sm mb-1">Test User</div>
                <div className="text-sm whitespace-pre-wrap">{profile.bio}</div>
             </div>
             
             {/* Feed Preview */}
             <div className="w-full border-t border-zinc-800 pt-1">
                <div className="flex justify-around py-3 text-zinc-400">
                   <ImageIcon size={24} className={profile.posts > 0 ? "text-white" : ""} />
                   <User size={24} />
                </div>
                <div className="grid grid-cols-3 gap-1">
                   {profile.posts > 0 ? (
                      <div className="aspect-square bg-zinc-800 relative group overflow-hidden">
                         <img src={`https://picsum.photos/200/200?seed=${Math.random()}`} className="w-full h-full object-cover" />
                      </div>
                   ) : (
                      <div className="col-span-3 py-10 text-center text-xs text-zinc-500">
                         No Posts Yet
                      </div>
                   )}
                </div>
             </div>
        </div>

        {/* Configuration Details */}
        <div className="md:col-span-2 space-y-4">
           <Card title="Trust Score Factors" description="Variables that influence account longevity.">
              <div className="space-y-4">
                 <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-blue-900/20 rounded text-blue-400"><ImageIcon size={18} /></div>
                       <div>
                          <span className="block text-sm font-medium">Unique Profile Picture</span>
                          <span className="text-xs text-zinc-500">Hash-checked against database</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-purple-900/20 rounded text-purple-400"><FileText size={18} /></div>
                       <div>
                          <span className="block text-sm font-medium">Bio Consistency</span>
                          <span className="text-xs text-zinc-500">Language matches IP location</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-orange-900/20 rounded text-orange-400"><Lock size={18} /></div>
                       <div>
                          <span className="block text-sm font-medium">Privacy Setting</span>
                          <span className="text-xs text-zinc-500">50/50 Split (Private/Public)</span>
                       </div>
                    </div>
                 </div>
              </div>
           </Card>

           <Card title="Action Simulation" description="Automated initial warm-up actions.">
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                    <span className="text-xs text-zinc-500 block mb-1">Initial Post</span>
                    <div className="flex items-center justify-between">
                       <span className="text-sm">Random (0/1)</span>
                       <span className="text-xs font-mono text-zinc-600">50% Chance</span>
                    </div>
                 </div>
                 <div className="p-3 bg-zinc-950 rounded border border-zinc-800">
                    <span className="text-xs text-zinc-500 block mb-1">Follow Targets</span>
                    <div className="flex items-center justify-between">
                       <span className="text-sm">Verified Accts</span>
                       <span className="text-xs font-mono text-zinc-600">3-5 Users</span>
                    </div>
                 </div>
              </div>
           </Card>
        </div>
      </div>
    </div>
  );
};