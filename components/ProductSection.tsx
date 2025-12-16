import React from 'react';
import { ScrollReveal } from './ui/ScrollReveal';
import { StreamWidget, CanvasWidget, InsightWidget, PrivacyWidget } from './ui/DashboardWidgets';

interface FeatureBlockProps {
  title: string;
  description: string;
  widget: React.ReactNode;
  bgImage: string;
  reverse?: boolean;
}

const FeatureBlock: React.FC<FeatureBlockProps> = ({ title, description, widget, bgImage, reverse = false }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center py-20 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      
      {/* Text Side */}
      <div className={`order-2 ${reverse ? 'md:order-2' : 'md:order-1'} max-w-md ${reverse ? 'ml-auto' : ''}`}>
        <ScrollReveal>
            <h3 className="text-2xl font-medium text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </ScrollReveal>
      </div>

      {/* Visual Side */}
      <div className={`order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <ScrollReveal delay={0.2}>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 group border border-gray-100">
                {/* Background Art */}
                <img src={bgImage} alt="Feature Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
                <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                
                {/* Floating Widget Container */}
                <div className="absolute inset-0 flex items-center justify-center p-6">
                     <div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
                        {widget}
                     </div>
                </div>

                {/* Decorative floating UI elements */}
                <div className="absolute top-6 left-6 w-24 h-4 bg-white/60 rounded-full blur-[1px]"></div>
                <div className="absolute bottom-6 right-6 w-32 h-24 bg-white/30 rounded-lg border border-white/40 backdrop-blur-md"></div>
            </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export const ProductSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-24">
            <ScrollReveal>
                <div className="inline-block bg-indigo-50 rounded-full px-3 py-1 text-xs font-medium text-brand-orange mb-4">
                    The Vision
                </div>
                <h2 className="text-4xl font-medium text-gray-900 mb-4">
                    Complete cost intelligence <br/> for AI infrastructure.
                </h2>
                <p className="text-gray-500 text-sm">
                    Kairos combines runtime optimization with pre-deployment prevention to eliminate waste from training to production.
                </p>
            </ScrollReveal>
        </div>

        <div className="space-y-12">
            {/* Feature 1: Runtime Optimization */}
            <FeatureBlock 
                title="Runtime Optimization: Capture 70% of waste immediately."
                description="Intelligent job scheduling queues training for off-peak hours with spot instances. Auto-pause detects idle notebooks and pauses them automatically. GPU right-sizing recommends optimal instance types based on actual utilization."
                widget={<StreamWidget />}
                bgImage="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop"
            />
            
            {/* Feature 2: Experiment-Level Cost Attribution */}
            <FeatureBlock 
                reverse
                title="Experiment-Level Cost Attribution: Know what costs what."
                description="Track costs at the experiment level—see exactly how much each training run, notebook session, or model deployment costs. Compare experiments side-by-side and identify optimization opportunities."
                widget={<CanvasWidget />}
                bgImage="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop"
            />

            {/* Feature 3: LLM Inference Optimization */}
            <FeatureBlock 
                title="LLM Inference Optimization: Reduce costs by 68-86%."
                description="Semantic caching detects similar prompts and returns cached responses. Model routing sends 80% of queries to cheaper models, escalating only complex requests. Dynamic batching improves throughput 3-5x."
                widget={<InsightWidget />}
                bgImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
            />

            {/* Feature 4: Pre-Deployment Intelligence */}
            <FeatureBlock 
                reverse
                title="Pre-Deployment Intelligence: Prevent waste before merge."
                description="PR-level cost impact analysis shows how model architecture changes affect training costs. Cost regression detection blocks merges that exceed budgets. Multi-cloud simulation finds the cheapest cloud for each workload."
                widget={<PrivacyWidget />}
                bgImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop"
            />
        </div>

      </div>
    </section>
  );
};