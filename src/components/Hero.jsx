import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles, Shield, Cpu, Lock, CheckCircle, Activity, Zap } from 'lucide-react';
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
      {/* ============================================================ */}
      {/* FONDO TECNOLÓGICO CON MALLA VECTORIAL Y LÁSER DE ESCANEO     */}
      {/* ============================================================ */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Luces difusas / Glows de fondo */}
        <div className="absolute left-1/2 top-10 h-[550px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-500/15 to-cyan-500/10 blur-[140px]" />
        <div className="absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px]" />

        {/* Malla Vectorial Tecnológica de Alta Resolución (SVG Neural Grid) */}
        <svg
          className="absolute inset-0 h-full w-full opacity-35 dark:opacity-45"
          preserveAspectRatio="none"
          viewBox="0 0 1400 800"
        >
          <defs>
            <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="heroLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Líneas de circuitos vectoriales cruzadas */}
          <path d="M 0 180 Q 350 320 700 120 T 1400 240" fill="none" stroke="url(#heroLineGrad)" strokeWidth="1.8" strokeDasharray="8 6" />
          <path d="M 0 320 C 400 100, 950 480, 1400 180" fill="none" stroke="url(#heroLineGrad2)" strokeWidth="1.2" opacity="0.6" />
          <path d="M 100 0 L 350 800 M 550 0 L 800 800 M 950 0 L 1200 800" fill="none" stroke="#64748b" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.25" />
          
          {/* Nodos de interconexión IA */}
          <circle cx="200" cy="220" r="4.5" fill="#10b981" />
          <circle cx="350" cy="265" r="3.5" fill="#34d399" />
          <circle cx="700" cy="120" r="5.5" fill="#10b981" />
          <circle cx="1050" cy="180" r="4" fill="#06b6d4" />
          <circle cx="1250" cy="220" r="3.5" fill="#10b981" />
          
          <circle cx="500" cy="200" r="3" fill="#14b8a6" />
          <circle cx="880" cy="380" r="4" fill="#3b82f6" />
        </svg>

        {/* Línea de barrido láser tecnológico continuo */}
        <motion.div
          animate={{ x: ['-20%', '120%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-emerald-400/15 to-transparent skew-x-12 blur-sm"
        />

        {/* Cuadrícula sutil de ingeniería */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#64748b0a_1px,transparent_1px),linear-gradient(to_bottom,#64748b0a_1px,transparent_1px)] [background-size:48px_48px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Hero Copy */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Badge con estilo tecnológico */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-700 backdrop-blur-md dark:border-emerald-500/30 dark:bg-emerald-500/15 dark:text-emerald-300"
          >
            <Cpu size={14} className="text-emerald-500 animate-pulse" />
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
