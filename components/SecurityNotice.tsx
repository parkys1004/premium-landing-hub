import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, AlertCircle, Lock } from 'lucide-react';

export const SecurityNotice = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/5 dark:shadow-none"
    >
       {/* Decorative Label */}
       <div className="flex items-center gap-2 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        <span className="text-sm font-bold text-emerald-600 dark:text-emerald-500 uppercase tracking-wider">Safety First</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl transition-colors duration-300"></div>
      
      {/* Animated Background Mesh */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 dark:bg-emerald-900/20 blur-[100px] rounded-full dark:mix-blend-screen pointer-events-none"></div>

      <div className="relative p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <ShieldCheck className="text-emerald-500" size={32} />
              안전한 연동 가이드
            </h3>
            
            <div className="space-y-8">
              <NoticeItem 
                icon={<CheckCircle2 className="text-slate-400" size={20} />}
                title="왜 계정 정보가 필요한가요?"
                text="Vercel 무료 플랜은 '팀 초대' 기능이 제한됩니다. 의뢰인님의 계정에 접속하여 배포 설정을 직접 마무리해야 독립적인 운영 환경이 구축됩니다."
              />
              <NoticeItem 
                icon={<Lock className="text-emerald-500 dark:text-emerald-400" size={20} />}
                title="보안은 어떻게 유지되나요?"
                text="설치 및 연동이 끝나는 즉시 로그아웃합니다. 작업 완료 후 비밀번호를 변경하시면 저의 접속 권한이 완전히 차단되므로 안심하셔도 됩니다."
              />
            </div>
          </div>

          <div className="w-full md:w-5/12">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-500/20 rounded-2xl p-6 relative overflow-hidden transition-colors"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1 p-2 bg-amber-100 dark:bg-amber-500/10 rounded-lg text-amber-600 dark:text-amber-500">
                  <AlertCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-amber-100 mb-2">이메일 인증 코드 (중요)</h4>
                  <p className="text-sm text-slate-600 dark:text-amber-200/70 leading-relaxed">
                    로그인 시 의뢰인님의 이메일로 <strong className="text-amber-700 dark:text-amber-100">6자리 숫자 인증 코드</strong>가 발송될 수 있습니다. 
                    <br/><br/>
                    제가 접속을 시도할 때 실시간으로 코드를 알려주셔야 원활한 설치가 가능합니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

const NoticeItem = ({ icon, title, text }: any) => (
  <div className="flex gap-4 group">
    <div className="shrink-0 mt-1 p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 group-hover:bg-slate-100 dark:group-hover:bg-slate-800 transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 text-lg">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-xl">
        {text}
      </p>
    </div>
  </div>
);