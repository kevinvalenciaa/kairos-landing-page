import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';

const UseCaseCard: React.FC<{ title: string; quote: string; output: string; color: string; borderColor: string }> = ({ title, quote, output, color, borderColor }) => (
    <div className="min-w-[320px] md:min-w-[400px] bg-white/5 rounded-2xl p-8 border border-white/10 shadow-lg flex flex-col gap-6 mx-4 snap-center backdrop-blur-sm">
        <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider w-fit ${color}`}>
            {title}
        </div>
        <div>
            <div className="text-sm text-white/40 mb-2 font-serif italic">" {quote} "</div>
            <div className={`text-sm font-medium text-blue-100/90 leading-relaxed pl-4 border-l-2 ${borderColor}`}>
                {output}
            </div>
        </div>
    </div>
);

export const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
        <ScrollReveal>
            <h2 className="text-3xl font-serif text-white">Optimization for every workload.</h2>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} width="100%">
        <div className="flex overflow-x-auto pb-12 px-6 snap-x scroll-pl-6 no-scrollbar -mx-6 md:mx-auto md:px-0 max-w-7xl">
            <UseCaseCard 
                title="Training Job Optimization"
                color="bg-blue-500/10 text-blue-400 border border-blue-500/20"
                borderColor="border-blue-500"
                quote="Our training jobs cost $2,400 each. We run 20 per month—that's $48K/month."
                output="Kairos: Your jobs run during peak hours on on-demand A100s. Scheduling for 2am with spot instances reduces cost to $960 per job (60% savings). Monthly savings: $28,800."
            />
            <UseCaseCard 
                title="Idle Notebook Detection"
                color="bg-purple-500/10 text-purple-400 border border-purple-500/20"
                borderColor="border-purple-500"
                quote="We have notebooks running idle for days. Our GPU bill is out of control."
                output="Kairos: Detected 12 idle notebooks running for 2+ hours. Auto-paused them, saving $4,347 this month. You can resume anytime with one click."
            />
            <UseCaseCard 
                title="LLM Inference Costs"
                color="bg-rose-500/10 text-rose-400 border border-rose-500/20"
                borderColor="border-rose-500"
                quote="Our LLM inference costs jumped from $50K to $200K/month. We're using GPT-4 for everything."
                output="Kairos: Routing 80% of queries to GPT-4o-mini and using semantic caching reduces costs by 78%. New monthly cost: $44K. Savings: $156K/month."
            />
             <UseCaseCard 
                title="GPU Right-Sizing"
                color="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                borderColor="border-emerald-500"
                quote="We're using p4d.24xlarge for inference but GPU utilization is only 42%."
                output="Kairos: Switching to 4x p4d.xlarge maintains performance while reducing cost by $384/day. Annual savings: $140K. Risk: None (still over-provisioned)."
            />
        </div>
      </ScrollReveal>
    </section>
  );
};
