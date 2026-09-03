import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Building2, User, Mail, ShieldCheck, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Higiene y Seguridad (HyS)',
    cameraCount: '10 a 50 cámaras',
    notes: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Si las credenciales están configuradas, enviamos el mail real
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            user_name: formData.name,
            user_email: formData.email,
            company: formData.company,
            role: formData.role,
            camera_count: formData.cameraCount,
            notes: formData.notes || 'Ninguna especificada',
            submission_date: new Date().toLocaleString('es-AR'),
          },
          publicKey
        );
      } else {
        // Modo simulación si aún no configuró las claves en .env
        console.info(
          '%c[Vision Demo]%c Solicitud de demo simulada con éxito. Para recibir correos reales, configura tus credenciales en el archivo .env',
          'background: #10b981; color: white; padding: 2px 6px; border-radius: 4px; font-weight: bold;',
          'color: #10b981; margin-left: 4px;'
        );
        // Pequeño delay para dar feedback visual realista
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Error al enviar solicitud con EmailJS:', error);
      setErrorMessage(
        'Ocurrió un inconveniente al enviar la solicitud. Por favor verifica los datos o intenta nuevamente.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage('');
    setIsLoading(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            disabled={isLoading}
            className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 disabled:opacity-50 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          >
            <X size={18} />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <Sparkles size={14} />
                <span>PILOTO TÉCNICO SIN COSTO</span>
              </div>

              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Solicitar demostración guiada
              </h3>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Coordiná una sesión técnica con un especialista para evaluar la compatibilidad de tus cámaras y configurar una prueba en tu planta.
              </p>

              {errorMessage && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-500/10 p-3 text-xs text-rose-600 dark:text-rose-400 border border-rose-500/20">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    Nombre completo
                  </label>
                  <div className="relative mt-1">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ing. Carlos Rodríguez"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Email Corporativo
                    </label>
                    <div className="relative mt-1">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="crodriguez@empresa.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Empresa / Planta
                    </label>
                    <div className="relative mt-1">
                      <Building2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Siderurgia del Norte S.A."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Cargo / Área
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    >
                      <option>Higiene y Seguridad (HyS)</option>
                      <option>Gerencia de Planta / Operaciones</option>
                      <option>IT / Infraestructura CCTV</option>
                      <option>Dirección General</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Cámaras a monitorear
                    </label>
                    <select
                      value={formData.cameraCount}
                      onChange={(e) => setFormData({ ...formData, cameraCount: e.target.value })}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-3 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    >
                      <option>1 a 10 cámaras</option>
                      <option>10 a 50 cámaras</option>
                      <option>50 a 200 cámaras</option>
                      <option>+200 cámaras (Multiplanta)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:from-emerald-600 hover:to-teal-700 disabled:opacity-75 active:scale-98"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Enviando solicitud...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck size={18} />
                      <span>Confirmar Solicitud de Demostración</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Gracias <strong>{formData.name}</strong>. Hemos registrado los datos para <strong>{formData.company}</strong>. Un especialista técnico te contactará a la brevedad en <strong>{formData.email}</strong>.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
              >
                Entendido
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
