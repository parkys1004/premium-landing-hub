import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, ClipboardCheck, ArrowRight } from 'lucide-react';

const requestFormText = `[크몽 발송용] 랜딩페이지 제작 자료 요청서

1. 메인 타이틀 (가장 크게 들어갈 문구)
답변: 

2. 서브 설명 (타이틀 아래 들어갈 1~2줄 설명)
답변: 

3. 핵심 장점 3가지 (강조하고 싶은 포인트)
답변: 

4. 클릭 시 이동할 링크 (버튼 기능)
답변: 

5. 이미지 및 로고 파일
답변: `;

const formItems = [
  { 
    title: "1. 메인 타이틀", 
    desc: "가장 크게 들어갈 문구", 
    eg: "예: 30일 만에 전자책 작가 되기",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    title: "2. 서브 설명", 
    desc: "타이틀 아래 1~2줄 설명", 
    eg: "예: 글쓰기 초보도 AI로 쉽게 시작하세요.",
    color: "from-purple-500 to-pink-500"
  },
  { 
    title: "3. 핵심 장점 3가지", 
    desc: "강조하고 싶은 포인트", 
    eg: "예: ① 검증된 커리큘럼 ② 피드백...",
    color: "from-emerald-500 to-teal-500"
  },
  { 
    title: "4. 버튼 링크", 
    desc: "클릭 시 이동할 곳", 
    eg: "예: 오픈채팅방 URL, 구글 설문지 등",
    color: "from-orange-500 to-amber-500"
  },
];

export const RequestForm = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(requestFormText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative">
      {/* Decorative Label */}
      <div className="flex items-center gap-2 mb-8 px-2">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
        <span className="text-base font-bold text-slate-500 uppercase tracking-wider">Step 01</span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative bg-white/60 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden p-1 shadow-2xl shadow-slate-200/50 dark:shadow-none"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

        <div className="relative bg-white dark:bg-slate-900/80 rounded-[22px] p-6 sm:p-10 md:p-12 transition-colors duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
            <div className="flex items-start sm:items-center gap-4 sm:gap-5">
              <div className="shrink-0 p-3 sm:p-4 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 ring-1 ring-indigo-500/10 dark:ring-indigo-500/30">
                <Mail size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white leading-tight">자료 요청서</h3>
                <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg mt-2 leading-snug break-keep">
                  퀄리티 있는 결과물을 위해 <span className="text-indigo-600 dark:text-indigo-400 font-semibold">5가지 필수 항목</span>을 작성해 주세요.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
            {formItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group/card"
              >
                <div className={`w-10 h-1.5 mb-3 sm:mb-4 rounded-full bg-gradient-to-r ${item.color} opacity-70`}></div>
                <h4 className="font-bold text-slate-900 dark:text-slate-200 text-lg sm:text-xl mb-2">{item.title}</h4>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed break-keep">{item.desc}</p>
                <div className="text-sm sm:text-base text-indigo-700 dark:text-indigo-300/80 bg-white dark:bg-indigo-950/30 p-3 rounded-lg border border-slate-200 dark:border-indigo-500/20 italic break-all">
                  {item.eg}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 mb-10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
             <div className="w-10 h-1.5 mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-gray-400 to-slate-600 opacity-70"></div>
             <h4 className="font-bold text-slate-900 dark:text-slate-200 text-lg sm:text-xl mb-2">5. 이미지 및 로고 파일</h4>
             <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed break-keep">
               이미지가 없으신가요? 분위기에 맞는 <span className="text-slate-900 dark:text-white font-medium">'고화질 무료 이미지'</span>를 제가 직접 선정해 드립니다.
             </p>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className={`w-full relative overflow-hidden py-5 sm:py-6 rounded-xl font-bold text-lg sm:text-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300
              ${copied 
                ? 'bg-emerald-500 text-white shadow-emerald-500/25' 
                : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-indigo-50 shadow-xl shadow-slate-900/10 dark:shadow-white/10'
              }`}
          >
            {copied ? (
              <>
                <ClipboardCheck size={24} className="sm:w-7 sm:h-7" />
                <span>복사 완료! (붙여넣기)</span>
              </>
            ) : (
              <>
                <Copy size={24} className="sm:w-7 sm:h-7" />
                <span>양식 원문 복사하기</span>
                <ArrowRight size={20} className="opacity-50 sm:w-6 sm:h-6" />
              </>
            )}
            {/* Button Shine Effect */}
            {!copied && (
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 dark:via-slate-900/10 to-transparent skew-x-12"></div>
            )}
          </motion.button>

        </div>
      </motion.div>
    </section>
  );
};