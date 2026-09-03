import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Sparkles,
  Shield,
  Cpu,
  Lock,
  CheckCircle,
  Activity,
  Zap,
  Radio,
  Eye,
} from 'lucide-react';
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
    <section id="inicio" className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* ============================================================ */}
      {/* 1. PORTADA / FONDO TECNOLÓGICO DE MALLA VECTORIAL Y NEURAL   */}
      {/* ============================================================ */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden select-none">
        {/* Glows ambientales intensos */}
        <div className="absolute left-1/2 -top-20 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-cyan-500/15 blur-[120px] dark:from-emerald-500/30 dark:via-teal-500/20 dark:to-cyan-500/20" />
        <div className="absolute top-1/3 -right-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-[110px]" />
        <div className="absolute top-1/2 -left-10 h-96 w-96 rounded-full bg-teal-400/20 blur-[110px]" />

        {/* SVG Interactivo de Red de Vectores y Nodos de IA de Alta Visibilidad */}
        <svg
          className="absolute inset-0 h-full w-full opacity-70 dark:opacity-85"
          preserveAspectRatio="none"
          viewBox="0 0 1200 700"
        >
          <defs>
            <linearGradient id="neonEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="neonCyan" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Vectores principales de circuitos tecnológicos */}
          <path
            d="M 0 120 Q 300 240 600 80 T 1200 180"
            fill="none"
            stroke="url(#neonEmerald)"
            strokeWidth="2.5"
            strokeDasharray="10 6"
            filter="url(#glow)"
          />
          <path
            d="M 0 280 C 350 80, 850 420, 1200 140"
            fill="none"
            stroke="url(#neonCyan)"
            strokeWidth="2"
            strokeDasharray="6 6"
            filter="url(#glow)"
          />
          <path
            d="M 0 450 Q 400 300 800 520 T 1200 360"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            opacity="0.4"
          />

          {/* Líneas de cuadrícula ortogonales (Grid cibernético) */}
          <line x1="150" y1="0" x2="300" y2="700" stroke="#10b981" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />
          <line x1="450" y1="0" x2="600" y2="700" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />
          <line x1="750" y1="0" x2="900" y2="700" stroke="#10b981" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />
          <line x1="1050" y1="0" x2="1150" y2="700" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />

          {/* Nodos de IA brillantes con halos */}
          <g filter="url(#glow)">
            <circle cx="150" cy="155" r="6" fill="#10b981" />
            <circle cx="300" cy="240" r="5" fill="#34d399" />
            <circle cx="600" cy="80" r="7" fill="#06b6d4" />
            <circle cx="850" cy="260" r="5.5" fill="#10b981" />
            <circle cx="1050" cy="150" r="6" fill="#34d399" />
            <circle cx="450" cy="180" r="5" fill="#06b6d4" />
          </g>
        </svg>

        {/* Rayo láser de escaneo animado de alta luminosidad */}
        <motion.div
          animate={{ x: ['-20%', '120%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="pointer-events-none absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent skew-x-12 blur-md"
        />

        {/* Scanlines industriales */}
        <div className="cctv-scanlines pointer-events-none absolute inset-0 opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================ */}
        {/* 2. BANNER SUPERIOR TECNOLÓGICO (AI RADAR HUD)                */}
        {/* ============================================================ */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mb-8 flex max-w-2xl flex-wrap items-center justify-center gap-3 rounded-2xl border border-emerald-500/30 bg-white/70 p-2 shadow-lg shadow-emerald-500/10 backdrop-blur-xl dark:border-emerald-500/30 dark:bg-slate-900/80"
        >
          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 px-3 py-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
            <Radio size={14} className="animate-pulse text-emerald-500" />
            <span>AI CCTV RADAR</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
            <span>Escaneo Activo de EPP</span>
          </div>

          <div className="hidden items-center gap-2 font-mono text-[11px] text-slate-500 sm:flex dark:text-slate-400 border-l border-slate-200 pl-3 dark:border-slate-800">
            <Activity size={13} className="text-emerald-500" />
            <span>&lt;14ms INFERENCIA</span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. HERO COPY & CALL TO ACTION                                */}
        {/* ============================================================ */}
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Eyebrow Badge */}
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

          {/* Micro-badges */}
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
