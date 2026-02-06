import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, ShieldCheck, Info, ExternalLink, Server } from 'lucide-react';

export const VercelGuide = () => {
  return (
    <section className="relative">
       {/* Decorative Label */}
       <div className="flex items-center gap-2 mb-8 px-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        <span className="text-base font-bold text-slate-500 uppercase tracking-wider">Step 02</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      <div className="flex flex-col items-center text-center space-y-6 mb-12 sm:mb-16">
        <motion.div 
          initial={{ rotate: -10, scale: 0 }}
          whileInView={{ rotate: 3, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-white to-slate-100 dark:from-slate-800 dark:to-black rounded-3xl flex items-center justify-center text-slate-800 dark:text-white shadow-2xl shadow-indigo-500/10 border border-slate-200 dark:border-slate-700 relative group"
        >
          <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Server size={40} className="relative z-10 sm:w-12 sm:h-12" />
        </motion.div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white break-keep">Vercel 계정 생성 및 이전</h2>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed break-keep">
          안정적인 서비스 운영을 위해 전 세계적으로 가장 인기 있는 호스팅 서비스인 Vercel을 사용합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <StepCard 
          icon={<UserPlus size={24} className="sm:w-7 sm:h-7" />}
          step="01"
          title="Vercel 가입"
          desc="가급적 업무용 또는 개인 이메일을 사용하여 가입해 주세요."
          action={
            <a 
              href="https://vercel.com/signup" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors mt-3"
            >
              Vercel 가입하기 <ExternalLink size={16} />
            </a>
          }
          delay={0.2}
        />
        <StepCard 
          icon={<ShieldCheck size={24} className="sm:w-7 sm:h-7" />}
          step="02"
          title="플랜 선택"
          desc={<>플랜 유형에서 <strong className="text-slate-900 dark:text-white">"개인 프로젝트(Hobby)"</strong>를 선택해 주세요.<br/>(무료 이용 가능)</>}
          delay={0.4}
        />
        <StepCard 
          icon={<Info size={24} className="sm:w-7 sm:h-7" />}
          step="03"
          title="정보 공유"
          desc={<>가입하신 <strong className="text-slate-900 dark:text-white">이메일 주소와 비밀번호</strong>를<br/>저에게 알려주세요.</>}
          delay={0.6}
        />
      </div>
    </section>
  );
};

const StepCard = ({ icon, step, title, desc, action, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="relative bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-800 p-6 sm:p-8 rounded-3xl overflow-hidden group shadow-lg shadow-slate-200/50 dark:shadow-none"
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 sm:p-4 bg-slate-100 dark:bg-slate-800 rounded-2xl text-indigo-600 dark:text-indigo-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm">
            {icon}
          </div>
          <span className="text-5xl sm:text-6xl font-black text-slate-100 dark:text-slate-800 group-hover:text-slate-200 dark:group-hover:text-slate-800/50 transition-colors select-none">{step}</span>
        </div>
        
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-4 flex-grow break-keep">
          {desc}
        </p>
        {action}
      </div>
    </motion.div>
  );
};