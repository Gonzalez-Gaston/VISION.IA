import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, Shield, Cpu, Lock, CheckCircle } from 'lucide-react';
import MonitoringDashboard from './MonitoringDashboard';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero({ onOpenDemo }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background visual accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/15 to-teal-500/10 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b0a_1px,transparent_1px),linear-gradient(to_bottom,#64748b0a_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Copy */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-md dark:border-emerald-500/20 dark:text-emerald-400"
          >
            <Sparkles size={14} className="animate-spin-slow text-emerald-500" />
            <span>INTELIGENCIA ARTIFICIAL PARA HIGIENE Y SEGURIDAD INDUSTRIAL</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white"
          >
            La seguridad de tus operarios.{' '}
            <span className="block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-emerald-300 dark:to-teal-300">
              Supervisada en tiempo real.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            Vision utiliza visión artificial de última generación para analizar tus cámaras de seguridad existentes y auditar, en milisegundos, el uso reglamentario de Elementos de Protección Personal (EPP).
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
          >
            <button
              onClick={onOpenDemo}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-emerald-500/25 transition-all duration-200 hover:from-emerald-600 hover:to-teal-700 hover:shadow-emerald-500/35 active:scale-95 sm:w-auto"
            >
              <span>Solicitar una demostración</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 sm:w-auto dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-700 dark:hover:bg-slate-800"
            >
              <span>Conocer cómo funciona</span>
              <ChevronRight size={17} />
            </a>
          </motion.div>

          {/* Enterprise compliance micro-badges */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} className="text-emerald-500" />
              <span>Compatible con cámaras RTSP/ONVIF</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield size={14} className="text-emerald-500" />
              <span>Reportes de auditoría y trazabilidad digital</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock size={14} className="text-emerald-500" />
              <span>Edge Computing / On-Premise</span>
            </div>
          </motion.div>
        </div>

        {/* Real-time Monitoring CCTV Console */}
        <div className="mt-14 lg:mt-18">
          <MonitoringDashboard />
        </div>
      </div>
    </section>
  );
}
