import React, { useState } from 'react';
import { Eye, EyeOff, RefreshCw, CheckCircle, Smartphone, Mail, ShieldAlert, Globe } from 'lucide-react';

// --- Reusable Mock UI Wrapper ---
const MockPhoneFrame: React.FC<{ children: React.ReactNode, title: string }> = ({ children, title }) => (
  <div className="mx-auto w-full max-w-sm bg-black border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[600px] relative">
    <div className="bg-zinc-950 p-4 border-b border-zinc-800 flex justify-between items-center">
      <span className="text-xs font-mono text-zinc-500">12:41</span>
      <span className="text-xs font-mono text-zinc-500">5G</span>
    </div>
    <div className="flex-1 p-6 flex flex-col justify-center relative z-10">
      <div className="mb-8 text-center">
        <h2 className="font-serif italic text-4xl mb-2">Instagram</h2>
        <p className="text-zinc-500 text-xs uppercase tracking-widest">{title}</p>
      </div>
      {children}
    </div>
    {/* Grid Background Effect */}
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
         style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
    </div>
  </div>
);

const InputField: React.FC<{ placeholder: string; type?: string; value?: string; readOnly?: boolean }> = ({ placeholder, type = "text", value, readOnly }) => (
  <div className="mb-3">
    <input
      type={type}
      className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500 transition-colors"
      placeholder={placeholder}
      value={value}
      readOnly={readOnly}
    />
  </div>
);

const BlueButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded text-sm transition-colors mt-4">
    {children}
  </button>
);

// --- Step 1: Signup (Proxy + Email) ---
export const ScreenSignup: React.FC = () => (
  <MockPhoneFrame title="Registration">
    <div className="mb-6 bg-emerald-900/20 border border-emerald-900/50 p-3 rounded text-xs text-emerald-400 flex items-center gap-2">
      <Globe size={14} />
      <span>Proxy Active: 192.168.x.x (US-Res)</span>
    </div>
    <InputField placeholder="Mobile Number or Email" value="4ah5yb6gy7@crunchmails.org" readOnly />
    <div className="relative mb-3">
      <input
        type="password"
        className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
        placeholder="Password"
        value=".........."
        readOnly
      />
      <button className="absolute right-3 top-3 text-zinc-500 text-xs font-bold border border-zinc-700 px-2 py-0.5 rounded">Show</button>
    </div>
    <InputField placeholder="Full Name" value="Testuser_72kickbot" readOnly />
    <InputField placeholder="Username" value="TestUser_72kickbot" readOnly />
    
    <p className="text-zinc-500 text-xs text-center mt-4 px-2">
      People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-400">Learn More</span>
    </p>
    
    <BlueButton>Sign up</BlueButton>
  </MockPhoneFrame>
);

// --- Step 2: Birthday ---
export const ScreenBirthday: React.FC = () => (
  <MockPhoneFrame title="Age Verification">
    <div className="text-center mb-8">
      <div className="w-16 h-16 mx-auto mb-4 border-2 border-white rounded-full flex items-center justify-center">
         <span className="text-2xl">🎂</span>
      </div>
      <h3 className="text-white text-lg font-medium">Add Your Birthday</h3>
      <p className="text-zinc-400 text-xs mt-2 px-4">This won't be part of your public profile.</p>
    </div>
    
    <div className="flex gap-2 mb-6">
      <div className="flex-1 bg-zinc-900 border border-zinc-700 rounded p-2 text-center text-sm">December</div>
      <div className="w-16 bg-zinc-900 border border-zinc-700 rounded p-2 text-center text-sm">7</div>
      <div className="w-20 bg-zinc-900 border border-zinc-700 rounded p-2 text-center text-sm">2000</div>
    </div>
    
    <p className="text-zinc-500 text-xs text-center mb-6">
      Use your own birthday, even if this account is for a business, a pet, or something else.
    </p>
    
    <BlueButton>Next</BlueButton>
    <button className="w-full text-blue-500 text-sm font-semibold mt-4">Go back</button>
  </MockPhoneFrame>
);

// --- Step 3: Email Confirmation ---
export const ScreenEmailConfirm: React.FC = () => (
  <MockPhoneFrame title="Validation">
    <div className="text-center mb-6">
      <Mail className="w-12 h-12 mx-auto mb-4 text-white" />
      <h3 className="text-white text-lg font-medium">Enter Confirmation Code</h3>
      <p className="text-zinc-400 text-xs mt-4 px-2">
        Enter the confirmation code we sent to <span className="text-white">4ah5yb6gy7@crunchmails.org</span>. <span className="text-blue-500">Resend Code.</span>
      </p>
    </div>
    
    <InputField placeholder="Confirmation Code" />
    
    <BlueButton>Next</BlueButton>
    <button className="w-full text-blue-500 text-sm font-semibold mt-4">Go back</button>
  </MockPhoneFrame>
);

// --- Step 4: Recaptcha ---
export const ScreenRecaptcha: React.FC = () => (
  <MockPhoneFrame title="Bot Detection L1">
     <div className="text-center mb-8">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-zinc-800 flex items-center justify-center relative">
         <div className="absolute top-0 right-0 bg-purple-500 p-1 rounded-full border-2 border-black">
            <CheckCircle size={12} className="text-white" />
         </div>
         <div className="w-8 h-8 rounded-full border-2 border-zinc-500"></div>
         <div className="w-4 h-4 rounded-full border-2 border-zinc-500 mt-1"></div>
      </div>
      <h3 className="text-white text-lg font-medium leading-tight">Confirm you're human to use your account</h3>
      <p className="text-white font-bold mt-2">test.user72kickbot</p>
    </div>
    
    <div className="bg-zinc-800/50 p-4 rounded-lg border border-zinc-700 flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 border-2 border-zinc-400 rounded-sm"></div>
        <span className="text-sm">I'm not a robot</span>
      </div>
      <div className="flex flex-col items-center">
         <RefreshCw size={16} className="text-blue-500 mb-1" />
         <span className="text-[10px] text-zinc-500">reCAPTCHA</span>
      </div>
    </div>

    <BlueButton>Continue</BlueButton>
  </MockPhoneFrame>
);

// --- Step 5: Hard Captcha ---
export const ScreenHardCaptcha: React.FC = () => (
  <MockPhoneFrame title="Bot Detection L2">
    <div className="text-center mb-4">
      <h3 className="text-white text-lg font-medium">Confirm you're human</h3>
    </div>
    
    <div className="bg-white p-2 rounded mb-4 relative overflow-hidden">
      {/* CSS-only captcha distortion */}
      <div className="text-4xl font-black tracking-widest text-black transform skew-x-12 blur-[0.5px] select-none text-center font-mono">
        6514S3
      </div>
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black rotate-12"></div>
      <div className="absolute top-1/3 left-0 w-full h-0.5 bg-black -rotate-6"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </div>
    
    <p className="text-zinc-400 text-xs mb-4">
      Can't read this text? <span className="text-blue-500">Hear this code</span> or <span className="text-blue-500">Get a new code</span>
    </p>

    <InputField placeholder="Enter the code from the image" />
    
    <BlueButton>Next</BlueButton>
  </MockPhoneFrame>
);

// --- Step 6: Phone Verif ---
export const ScreenPhone: React.FC = () => (
  <MockPhoneFrame title="SMS Verification">
    <div className="text-center mb-6">
      <h3 className="text-white text-lg font-medium">Enter your mobile number</h3>
      <p className="text-zinc-400 text-xs mt-4 px-2 mb-6">
        You'll need to confirm this mobile number with a code via SMS or WhatsApp.
      </p>
    </div>
    
    <div className="flex gap-2 mb-4">
       <div className="w-24 bg-zinc-900 border border-zinc-700 rounded px-3 py-3 text-sm flex items-center justify-between text-zinc-300">
          <span>US +1</span>
       </div>
       <div className="flex-1">
         <input
          type="tel"
          className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          placeholder="Phone number"
        />
       </div>
    </div>

    <div className="bg-red-900/20 border border-red-900/50 p-3 rounded text-xs text-red-500 flex items-start gap-2 mb-6">
      <ShieldAlert size={16} className="shrink-0 mt-0.5" />
      <span>
        Security Alert: Sim Verification Required
      </span>
    </div>

    <p className="text-zinc-600 text-[10px] mb-6 leading-relaxed">
       We use phone numbers added here to help you log in, protect our community... Only you will see this number on your profile.
    </p>
    
    <BlueButton>Send code</BlueButton>
  </MockPhoneFrame>
);

// --- Phone Direct (Untested) ---
export const ScreenPhoneDirect: React.FC = () => (
  <MockPhoneFrame title="Direct Phone Login">
    <div className="absolute top-4 right-4 bg-zinc-800 text-zinc-400 text-[10px] px-2 py-1 rounded border border-zinc-700">
      EXPERIMENTAL
    </div>
    <div className="mb-8 text-center">
       <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-500">
         <Smartphone size={32} />
       </div>
       <h3 className="text-white text-lg font-medium">Phone-First Entry</h3>
       <p className="text-zinc-500 text-xs mt-2 px-4">
         Attempting to bypass email verification loop by initiating directly with premium SIM carrier.
       </p>
    </div>

    <div className="flex gap-2 mb-6">
       <div className="w-24 bg-zinc-900 border border-zinc-700 rounded px-3 py-3 text-sm flex items-center justify-between text-zinc-300">
          <span>US +1</span>
       </div>
       <div className="flex-1">
         <input
          type="tel"
          className="w-full bg-zinc-900 border border-zinc-700 rounded px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          placeholder="Mobile Number"
          value="212-555-0192"
        />
       </div>
    </div>
    
    <div className="bg-zinc-900 border border-zinc-800 p-3 rounded mb-6">
       <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-zinc-500">Success Probability</span>
          <span className="text-yellow-500">Unknown</span>
       </div>
       <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
          <div className="w-1/3 bg-yellow-600 h-full"></div>
       </div>
    </div>
    
    <BlueButton>Send Login Code</BlueButton>
  </MockPhoneFrame>
);