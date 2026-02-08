import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Send, HelpCircle, ExternalLink, Check } from 'lucide-react';

export const CloudflareGuide = () => {
  return (
    <section className="relative">
       {/* Decorative Label */}
       <div className="flex items-center gap-2 mb-8 px-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        <span className="text-base font-bold text-slate-500 uppercase tracking-wider">Step 02</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-12">
         <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          className="w-16 h-16 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/10"
         >
            <ShieldCheck size={32} />
         </motion.div>
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white break-keep leading-tight">
           [안내] 랜딩 페이지 제작을 위한<br/>사전 준비 및 안내사항
         </h2>
         <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed break-keep">
           안녕하세요, 의뢰인님! 제작될 랜딩 페이지를 안정적이고 빠르게 운영하기 위해 필요한 도메인 구매 및 Cloudflare 가입 절차를 안내해 드립니다.
         </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Card 1: Domain */}
        <GuideCard 
          icon={<Globe className="w-6 h-6 text-blue-500" />}
          title="1. 도메인(웹사이트 주소)을 구매해야 하는 이유"
          delay={0.1}
        >
          <ul className="space-y-5 text-slate-600 dark:text-slate-400">
            <li className="block">
              <strong className="text-slate-900 dark:text-slate-200 block mb-1.5 text-lg">도메인의 중요성</strong>
              도메인은 인터넷상의 '우리 집 주소'(www.yourname.com)와 같습니다.
            </li>
            <li className="block">
              <strong className="text-slate-900 dark:text-slate-200 block mb-1.5 text-lg">브랜드 신뢰도</strong>
              pages.dev 같은 임시 주소보다 전용 도메인을 사용해야 방문자에게 신뢰를 줄 수 있습니다.
            </li>
            <li className="block">
              <strong className="text-slate-900 dark:text-slate-200 block mb-1.5 text-lg">소유권 확보</strong>
              도메인은 의뢰인님의 자산이므로, 직접 구매하셔야 향후 관리 및 소유권 행사가 안전합니다.
            </li>
            <li className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-sm sm:text-base border border-blue-100 dark:border-blue-800/50">
              <span className="font-bold text-blue-700 dark:text-blue-300 mr-2">추천 구매처:</span>
              가비아, 후이즈, Namecheap 등
            </li>
          </ul>
        </GuideCard>

        {/* Card 2: Cloudflare */}
        <GuideCard 
          icon={<ShieldCheck className="w-6 h-6 text-orange-500" />}
          title="2. Cloudflare 가입 및 설정 절차 (5분 소요)"
          delay={0.2}
        >
          <div className="space-y-5 text-slate-600 dark:text-slate-400 flex flex-col h-full">
            <p className="font-medium text-slate-800 dark:text-slate-300">Cloudflare는 사이트를 해킹으로부터 보호하고 로딩 속도를 높여주는 무료 서비스입니다.</p>
            <ul className="space-y-4 flex-grow">
              <li className="flex gap-3">
                <span className="shrink-0 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-lg text-xs font-bold h-fit mt-0.5">가입</span>
                <span>Cloudflare 가입 페이지에 접속하여 이메일 주소와 비밀번호를 입력합니다.</span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-lg text-xs font-bold h-fit mt-0.5">인증</span>
                <span>가입한 이메일함에서 확인 메일을 열어 인증 링크를 클릭해 주세요. <span className="text-orange-600 dark:text-orange-400 font-semibold">(인증을 해야 로그인이 활성화됩니다.)</span></span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-2.5 py-1 rounded-lg text-xs font-bold h-fit mt-0.5">유지</span>
                <span>가입 완료 후 아래 정보를 저에게 전달해 주시면 제가 직접 기술적인 배포 설정을 진행합니다.</span>
              </li>
            </ul>
             <a 
              href="https://dash.cloudflare.com/sign-up" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 py-3.5 rounded-xl bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-bold transition-all shadow-lg shadow-slate-900/10 dark:shadow-white/10 mt-4 group"
            >
              Cloudflare 가입하기 <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </GuideCard>

        {/* Card 3: Info to provide */}
        <GuideCard 
          icon={<Send className="w-6 h-6 text-emerald-500" />}
          title="3. 전달해 주실 정보"
          delay={0.3}
          highlight
        >
          <div className="space-y-5 text-slate-600 dark:text-slate-400">
            <p className="font-medium text-slate-800 dark:text-slate-300">정확한 배포를 위해 아래 두 가지 정보가 필요합니다.</p>
            <div className="bg-white/80 dark:bg-slate-950/50 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 space-y-4">
              <div className="flex items-start gap-3">
                 <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Check className="w-4 h-4" />
                 </div>
                 <div>
                   <strong className="block text-slate-900 dark:text-white text-lg mb-0.5">Cloudflare 계정 정보</strong>
                   <span className="text-sm opacity-90">이메일 주소 및 임시 비밀번호 (작업 완료 후 변경 권장)</span>
                 </div>
              </div>
              <div className="h-px bg-slate-100 dark:bg-slate-800/50"></div>
              <div className="flex items-start gap-3">
                 <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Check className="w-4 h-4" />
                 </div>
                 <div>
                   <strong className="block text-slate-900 dark:text-white text-lg mb-0.5">구매하신 도메인 주소</strong>
                   <span className="text-sm opacity-90">예: www.example.com</span>
                 </div>
              </div>
            </div>
            <p className="text-sm sm:text-base bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-xl text-emerald-800 dark:text-emerald-200 leading-relaxed border border-emerald-100 dark:border-emerald-800/30">
              💡 도메인 구매 사이트(가비아 등)의 아이디/비번도 함께 주시면 네임서버 연결까지 제가 직접 대행해 드릴 수 있어 더 편리합니다.
            </p>
          </div>
        </GuideCard>

        {/* Card 4: FAQ */}
        <GuideCard 
          icon={<HelpCircle className="w-6 h-6 text-purple-500" />}
          title="4. 자주 묻는 질문 (FAQ)"
          delay={0.4}
        >
          <div className="space-y-4">
            <FAQItem 
              q="Cloudflare는 유료인가요?" 
              a="아니요, 일반적인 랜딩 페이지 운영은 평생 무료 플랜으로도 충분합니다. 별도의 월 비용이 발생하지 않도록 세팅해 드립니다."
            />
             <FAQItem 
              q="도메인만 있으면 바로 사이트가 나오나요?" 
              a="도메인을 구매한 뒤, 제가 진행하는 '배포 작업'을 거쳐야 실제 사이트가 연결됩니다."
            />
             <FAQItem 
              q="나중에 제가 직접 관리할 수 있나요?" 
              a="네, 모든 설정은 의뢰인님의 계정으로 진행되므로 제가 작업을 마친 뒤 비밀번호만 변경하시면 의뢰인님께서 독자적으로 소유하고 관리하시게 됩니다."
            />
          </div>
        </GuideCard>

      </div>
    </section>
  );
};

const GuideCard = ({ icon, title, children, delay, highlight }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`flex flex-col p-6 sm:p-8 rounded-[2rem] border backdrop-blur-xl transition-all shadow-lg
      ${highlight 
        ? 'bg-gradient-to-br from-emerald-50/90 to-teal-50/90 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-700/50 shadow-emerald-900/5' 
        : 'bg-white/80 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-slate-200/50 dark:shadow-none'
      }`}
  >
    <div className="flex items-start sm:items-center gap-4 mb-6">
      <div className={`shrink-0 p-3.5 rounded-2xl ${highlight ? 'bg-white dark:bg-emerald-800/30 shadow-sm' : 'bg-slate-50 dark:bg-slate-800 shadow-sm'}`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white leading-tight break-keep">{title}</h3>
    </div>
    <div className="text-base leading-relaxed flex-grow">
      {children}
    </div>
  </motion.div>
);

const FAQItem = ({ q, a }: any) => (
  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
    <div className="flex gap-2.5 font-bold text-slate-900 dark:text-slate-200 mb-2 text-lg">
      <span className="text-purple-600 dark:text-purple-400">Q.</span>
      {q}
    </div>
    <div className="flex gap-2.5 text-slate-600 dark:text-slate-400 text-base leading-relaxed">
      <span className="font-bold text-slate-400 shrink-0">A.</span>
      {a}
    </div>
  </div>
);