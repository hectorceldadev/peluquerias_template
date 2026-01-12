'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  ChevronDown, Menu, X, CalendarDays, ArrowUpRight, 
  Scissors, User, SprayCan, Sparkles // Importa aquí los iconos que vayas a usar
} from 'lucide-react'

// Importamos el CEREBRO
import { SITE_CONFIG } from '@/config'

// GSAP Imports
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Si no tienes el archivo de tipografía aún, usa clases normales o crea el archivo
// import { anton, geist } from '@/constants/tipography' 

gsap.registerPlugin(ScrollTrigger)

// DICCIONARIO DE ICONOS: Para traducir el string del config al componente real
const ICON_MAP: Record<string, any> = {
  "Scissors": Scissors,
  "User": User,
  "SprayCan": SprayCan,
  "Sparkles": Sparkles,
  // Añade aquí más si los necesitas
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  const containerRef = useRef(null)
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)

  // Link de WhatsApp dinámico
  const whatsappLink = `https://wa.me/${SITE_CONFIG.business.whatsapp}?text=${encodeURIComponent(SITE_CONFIG.cta.whatsappMessage)}`

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
  }, [pathname])

  // Bloquear scroll
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isMenuOpen])

  // --- ANIMACIONES GSAP (Tu código original intacto) ---
  useGSAP(() => {
    const showAnim = gsap.from(navRef.current, {
      yPercent: -150,
      paused: true,
      duration: 0.4,
      ease: "power3.inOut"
    }).progress(1)

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (isMenuOpen) return;
        self.direction === -1 ? showAnim.play() : showAnim.reverse()
      }
    })
  }, { scope: containerRef, dependencies: [isMenuOpen] })

  // Animación Mobile
  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo('.mobile-anim-item',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.2 }
      )
    }
  }, [isMenuOpen])

  // Animación Desktop Dropdown
  useEffect(() => {
    if (isServicesOpen) {
      gsap.fromTo('.desktop-service-item',
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.03, ease: "power1.out" }
      )
    }
  }, [isServicesOpen])

  return (
    <div ref={containerRef}>

      {/* NAVBAR PRINCIPAL */}
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] place-self-center ring ring-white/20 rounded-full z-50 bg-black/50 backdrop-blur-md transition-shadow duration-300 py-2"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between h-14 items-center">

            {/* 1. LOGO / NOMBRE (Desde Config) */}
            <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white relative z-50 uppercase">
              {/* Truco: Si quieres destacar la segunda palabra, habría que hacer lógica extra, 
                  pero para plantilla estándar, mostramos el nombre completo */}
              {SITE_CONFIG.business.name}
            </Link>

            {/* 2. NAVEGACIÓN DESKTOP (Desde Config) */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {SITE_CONFIG.navigation.map((item) => {
                // LÓGICA DEL DROPDOWN SERVICIOS
                if (item.name === "Servicios") {
                  return (
                    <div
                      key={item.name}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-sm font-semibold text-white hover:text-violet-400 transition-colors py-8">
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Mega-Menu Desktop */}
                      <div className={`
                        absolute top-[70%] left-1/2 -translate-x-1/2 w-[40rem]
                        bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] 
                        p-1 transition-all duration-300 origin-top z-40 overflow-hidden
                        ${isServicesOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2'}
                      `}>
                        <div className="p-6 relative">
                          {/* Decoración fondo */}
                          <div className="absolute top-0 right-0 w-40 h-40 bg-violet-600/10 blur-[50px] rounded-full pointer-events-none" />

                          {/* Grid de Servicios (Dinámico desde Config) */}
                          <div className="grid grid-cols-2 gap-4 relative z-10">
                            {SITE_CONFIG.services.map((service) => {
                              const IconComponent = ICON_MAP[service.iconName] || Scissors; // Icono por defecto si falla
                              
                              return (
                                <Link
                                  key={service.id}
                                  href={`/servicios#${service.id}`}
                                  className="desktop-service-item group relative flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all duration-300"
                                >
                                  {/* Icono */}
                                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-violet-400 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 transition-all">
                                    <IconComponent size={20} />
                                  </div>
                                  
                                  {/* Textos */}
                                  <div className="flex-1">
                                    <h4 className="text-white text-sm font-bold leading-none mb-1 group-hover:text-violet-300 transition-colors uppercase">
                                      {service.title}
                                    </h4>
                                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider group-hover:text-zinc-400">
                                      {service.price}
                                    </span>
                                  </div>

                                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-violet-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                                </Link>
                              )
                            })}
                          </div>
                        </div>
                        
                        <Link href="/servicios" className="desktop-service-item block py-3 border-t border-white/10 text-center text-[10px] font-bold text-zinc-400 hover:text-violet-400 uppercase tracking-[0.2em] transition-colors">
                          Ver carta completa →
                        </Link>
                      </div>
                    </div>
                  )
                }

                // LINKS NORMALES
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold text-white hover:text-violet-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                )
              })}
            </div>

            {/* 3. CTA DERECHA (WhatsApp Dinámico) */}
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex hover:bg-violet-700 text-white px-6 py-2.5 rounded-full text-xs font-bold bg-violet-600 transition-all shadow-xl shadow-violet-900/20 active:scale-95 items-center gap-2 uppercase tracking-wide"
            >
              <CalendarDays size={16} />
              {SITE_CONFIG.cta.label}
            </Link>

            {/* BURGER MENU MÓVIL */}
            <button
              className="md:hidden relative z-50 p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Alternar menú"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- MENÚ MÓVIL FULL SCREEN --- */}
      <div
        ref={mobileMenuRef}
        className={`
          fixed inset-0 bg-[#0a0a0a] z-40 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto">

          <div className="space-y-6 mb-12 flex-1">
            {/* INICIO */}
            <div className="mobile-anim-item">
              <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-4xl font-bold text-white tracking-tighter hover:text-violet-500 transition-colors">
                Inicio
              </Link>
            </div>

            {/* LISTA DE SERVICIOS MOBILE */}
            <div className="mobile-anim-item">
              <p className="text-[10px] uppercase tracking-[0.2em] text-violet-500 font-black mb-4">
                Servicios
              </p>
              <div className="grid grid-cols-1 gap-3">
                {SITE_CONFIG.services.map((service) => {
                   const IconComponent = ICON_MAP[service.iconName] || Scissors;
                   return (
                    <Link
                      key={service.id}
                      href={`/servicios#${service.id}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 ring-1 ring-white/10 active:bg-violet-600/20 transition-colors"
                    >
                      <div className="text-violet-400"><IconComponent size={20}/></div>
                      <span className="font-semibold text-white text-lg">{service.title}</span>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* RESTO DE LINKS */}
            {SITE_CONFIG.navigation.filter(item => item.name !== "Inicio" && item.name !== "Servicios").map((item) => (
               <div key={item.name} className="mobile-anim-item">
                <Link href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-4xl font-bold text-white tracking-tighter hover:text-violet-500 transition-colors">
                  {item.name}
                </Link>
              </div>
            ))}
          </div>

          {/* CTA MOBILE */}
          <div className="mt-auto pt-4 mobile-anim-item">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full bg-violet-600 text-white text-center py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-violet-500/20 active:scale-95 transition-transform uppercase"
            >
              <CalendarDays className="w-5 h-5" />
              {SITE_CONFIG.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}