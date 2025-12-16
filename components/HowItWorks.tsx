import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { Mic, BrainCircuit, ArrowUpRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            <ScrollReveal>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-slate-900 border border-white/10 shadow-lg shadow-black/20 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                        <Mic size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white mb-2">1. Track</h3>
                    <p className="text-sm text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Install our Jupyter plugin or connect your cloud infrastructure. Kairos automatically tracks GPU costs, training jobs, and inference workloads.
                    </p>
                </div>
            </ScrollReveal>

             <ScrollReveal delay={0.1}>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-slate-900 border border-white/10 shadow-lg shadow-black/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                        <BrainCircuit size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white mb-2">2. Optimize</h3>
                    <p className="text-sm text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Kairos analyzes your workloads and automatically schedules jobs, pauses idle resources, and right-sizes GPU instances to reduce costs by 40-60%.
                    </p>
                </div>
            </ScrollReveal>

             <ScrollReveal delay={0.2}>
                <div className="text-center relative z-10">
                    <div className="w-16 h-16 mx-auto bg-slate-900 border border-white/10 shadow-lg shadow-black/20 rounded-2xl flex items-center justify-center mb-6 text-emerald-400">
                        <ArrowUpRight size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-serif font-medium text-white mb-2">3. Prevent</h3>
                    <p className="text-sm text-blue-100/60 leading-relaxed max-w-xs mx-auto">
                        Get PR-level cost impact analysis before merge. Block cost regressions and simulate multi-cloud pricing to prevent waste before deployment.
                    </p>
                </div>
            </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
