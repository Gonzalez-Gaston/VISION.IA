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
  Radio,
  Eye,
  Scan,
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
    <section id="inicio" className="px-3 pt-20 pb-16 sm:px-6 lg:px-8">
      {/* ========================================================================= */}
      {/* GRAN PORTADA TECNOLÓGICA PRINCIPAL (HERO COVER BANNER)                    */}
      {/* ========================================================================= */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-emerald-950/30">
        
        {/* ======================================================================= */}
        {/* MALLA VECTORIAL ANIMADA, LÁSER Y RESPLANDOR DE IA EN EL FONDO DE LA PORTADA */}
        {/* ======================================================================= */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden">
          {/* Luces y resplandores neón */}
          <div className="absolute left-1/2 -top-24 h-96 w-[650px] -translate-x-1/2 rounded-full bg-emerald-500/25 blur-[120px]" />
          <div className="absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-teal-500/20 blur-[100px]" />
          <div className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px]" />

          {/* Malla Vectorial de Circuitos IA (SVG Neural Grid) */}
          <svg
            className="absolute inset-0 h-full w-full opacity-60"
            preserveAspectRatio="none"
            viewBox="0 0 1200 600"
          >
            <defs>
              <linearGradient id="mainHeroGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="mainHeroGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
              <filter id="heroGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Líneas de circuitos vectoriales tecnológicos */}
            <path
              d="M 0 100 Q 300 220 600 70 T 1200 160"
              fill="none"
              stroke="url(#mainHeroGrad1)"
              strokeWidth="2.5"
              strokeDasharray="10 6"
              filter="url(#heroGlow)"
            />
            <path
              d="M 0 260 C 350 70, 850 380, 1200 120"
              fill="none"
              stroke="url(#mainHeroGrad2)"
              strokeWidth="2"
              strokeDasharray="8 6"
              filter="url(#heroGlow)"
            />
            <path
              d="M 0 420 Q 400 260 800 480 T 1200 320"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.5"
              opacity="0.35"
            />

            {/* Grid ortogonal tecnológico */}
            <line x1="150" y1="0" x2="250" y2="600" stroke="#10b981" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />
            <line x1="450" y1="0" x2="550" y2="600" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />
            <line x1="750" y1="0" x2="850" y2="600" stroke="#10b981" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />
            <line x1="1050" y1="0" x2="1100" y2="600" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.3" />

            {/* Nodos de IA luminosos */}
            <g filter="url(#heroGlow)">
              <circle cx="150" cy="140" r="6" fill="#10b981" />
              <circle cx="300" cy="220" r="5" fill="#34d399" />
              <circle cx="600" cy="70" r="7" fill="#06b6d4" />
              <circle cx="850" cy="240" r="5.5" fill="#10b981" />
              <circle cx="1050" cy="140" r="6" fill="#34d399" />
              <circle cx="450" cy="165" r="5" fill="#06b6d4" />
            </g>
          </svg>

          {/* Láser de barrido continuo que recorre toda la portada */}
          <motion.div
            animate={{ x: ['-20%', '120%'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'linear' }}
            className="pointer-events-none absolute inset-y-0 w-40 bg-gradient-to-r from-transparent via-emerald-400/25 to-transparent skew-x-12 blur-md"
          />

          {/* Scanlines de CCTV Industrial */}
          <div className="cctv-scanlines pointer-events-none absolute inset-0 opacity-30" />
        </div>

        {/* ======================================================================= */}
        {/* CONTENIDO DENTRO DE LA PORTADA                                          */}
        {/* ======================================================================= */}
        <div className="relative z-10 px-5 pt-12 pb-16 text-center sm:px-10 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          
          {/* Badge superior tecnológico */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-4 py-1.5 text-xs font-bold tracking-wider text-emerald-300 backdrop-blur-md shadow-lg shadow-emerald-500/10"
          >
            <Cpu size={15} className="text-emerald-400 animate-pulse" />
            <span>VISION AI · PLATAFORMA DE SEGURIDAD INDUSTRIAL</span>
            <span className="hidden sm:inline-block rounded-full bg-emerald-400/20 px-2 py-0.5 text-[10px] text-emerald-200">
              EN VIVO
            </span>
          </motion.div>

          {/* Gran Titular */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            La seguridad de tus operarios.{' '}
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Supervisada en tiempo real.
            </span>
          </motion.h1>

          {/* Subtítulo explicativo */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            Vision analiza los feeds de tus cámaras de seguridad existentes mediante visión artificial para auditar, en milisegundos, el uso reglamentario de Elementos de Protección Personal (EPP).
          </motion.p>

          {/* Botones de acción principal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              onClick={onOpenDemo}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-500/30 transition-all duration-200 hover:from-emerald-600 hover:to-teal-600 hover:shadow-emerald-500/45 active:scale-95 sm:w-auto"
            >
              <span>Solicitar una demostración</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#como-funciona"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:bg-slate-800 hover:border-slate-600 sm:w-auto"
            >
              <span>Conocer cómo funciona</span>
              <ChevronRight size={17} />
            </a>
          </motion.div>

          {/* Insignias de confianza en la portada */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-slate-400"
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={15} className="text-emerald-400" />
              <span>Compatible con cámaras RTSP/ONVIF</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={15} className="text-emerald-400" />
              <span>Reportes de auditoría y trazabilidad digital</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock size={15} className="text-emerald-400" />
              <span>Edge Computing On-Premise</span>
            </div>
          </motion.div>
        </div>

        {/* ======================================================================= */}
        {/* CONSOLA DE MONITOREO CCTV INTEGRADA EN LA BASE DE LA PORTADA             */}
        {/* ======================================================================= */}
        <div className="relative z-10 px-4 pb-10 sm:px-8 sm:pb-14">
          <MonitoringDashboard />
        </div>

      </div>
    </section>
  );
}
