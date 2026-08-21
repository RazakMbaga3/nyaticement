'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, animate, useMotionValue, useReducedMotion, type PanInfo } from 'framer-motion'
import { useTranslations } from '@/app/hooks/useTranslations'

interface NavDropdownItem {
  name: string;
  path: string;
  blurb?: string;
  icon?: string;
}

interface NavLink {
  name: string;
  path: string;
  dropdown?: NavDropdownItem[];
}

// Icon paths for the mega-menu tiles (purely presentational — no copy lives here)
const ICONS: Record<string, string> = {
  about: 'M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1',
  plant: 'M4 21V9l8-6 8 6v12M9 21v-6h6v6',
  certifications: 'M12 21a9 9 0 100-18 9 9 0 000 18zM9 12l2 2 4-4',
  csr: 'M12 21c-4-4-7-7.5-7-11a7 7 0 0114 0c0 3.5-3 7-7 11z',
  codeOfConduct: 'M9 12h6m-6 4h6M9 8h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z',
  brochure: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  super42: 'M4 4h16v16H4V4zM4 10h16',
  duramax42: 'M4 4h16v16H4V4zM4 10h16',
  opc: 'M4 4h16v16H4V4zM4 10h16',
  max32: 'M4 4h16v16H4V4zM4 10h16',
}

const getNavLinks = (t: (key: string) => string): NavLink[] => [
  {
    name: t('nav.about'),
    path: '/about',
    dropdown: [
      { name: t('nav.about'), path: '/about/about-us', icon: ICONS.about, blurb: 'Our story & leadership' },
      { name: t('nav.plant'), path: '/about/plant', icon: ICONS.plant, blurb: 'Production & capacity' },
      { name: t('nav.certifications'), path: '/about/certifications', icon: ICONS.certifications, blurb: 'ISO & TBS standards' },
      { name: t('nav.csr'), path: '/about/csr', icon: ICONS.csr, blurb: 'Community impact' },
      { name: t('nav.codeOfConduct'), path: '/about/code-of-conduct', icon: ICONS.codeOfConduct, blurb: 'How we do business' },
      { name: t('nav.brochure'), path: '/about/brochure', icon: ICONS.brochure, blurb: 'Download company profile' },
    ]
  },
  {
    name: t('nav.products'),
    path: '/products',
    dropdown: [
      { name: t('products.items.425r.name'), path: '/products', icon: ICONS.super42, blurb: '42.5R — fast early strength' },
      { name: t('products.items.425n.name'), path: '/products', icon: ICONS.duramax42, blurb: '42.5N — balanced & versatile' },
      { name: t('products.items.opc.name'), path: '/products', icon: ICONS.opc, blurb: 'CEM I — specialized strength' },
      { name: t('products.items.325n.name'), path: '/products', icon: ICONS.max32, blurb: '32.5N — economic masonry' },
    ]
  },
  { name: t('nav.quality'), path: '/quality-control' },
  { name: t('nav.distribution'), path: '/distribution' },
  { name: t('nav.sustainability'), path: '/sustainability' },
  { name: t('nav.news'), path: '/news' },
  { name: t('nav.blog'), path: '/blog' },
  { name: t('nav.careers'), path: '/careers' },
  { name: t('nav.contact'), path: '/contact' },
]

export default function Navbar() {
  const { t } = useTranslations();
  const navLinks = getNavLinks(t);
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const navItemRefs = useRef<(HTMLLIElement | null)[]>([])
  const lastScrollY = useRef(0)

  // Mobile drawer drag-to-dismiss: x tracks its live on-screen offset (0 =
  // fully open, panelWidth = fully off-screen to the right). Framer's
  // drag gesture gives us 1:1 pointer tracking for free; onDragEnd below
  // adds Apple's momentum projection + velocity handoff on top of it.
  const panelRef = useRef<HTMLDivElement>(null)
  const [panelWidth, setPanelWidth] = useState<number | null>(null)
  const drawerX = useMotionValue(500) // comfortably past max-w-sm (384px) until measured
  const firstSyncDone = useRef(false)
  const [mounted, setMounted] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const reduceMotion = mounted && prefersReducedMotion === true

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    function measure() {
      if (panelRef.current) setPanelWidth(panelRef.current.offsetWidth)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Keep the drawer's position in sync whenever isOpen changes via a
  // button, ESC, or the backdrop — not via drag (drag drives drawerX
  // directly and settles it itself in handleDrawerDragEnd).
  useEffect(() => {
    if (panelWidth == null) return
    const target = isOpen ? 0 : panelWidth

    if (!firstSyncDone.current) {
      drawerX.set(target) // no jump on mount: closed state is already off-screen
      firstSyncDone.current = true
      return
    }

    if (reduceMotion) {
      drawerX.set(target)
      return
    }

    const controls = animate(drawerX, target, { type: 'spring', bounce: 0, duration: 0.4 })
    return () => controls.stop()
  }, [isOpen, panelWidth, reduceMotion])

  const handleDrawerDragEnd = (_: Event, info: PanInfo) => {
    if (panelWidth == null) return
    const velocity = info.velocity.x
    const current = drawerX.get()
    // Apple's exponential-decay projection: where would this gesture's
    // momentum carry the drawer, not just where the finger let go?
    const decelerationRate = 0.998
    const projected = current + (velocity / 1000) * decelerationRate / (1 - decelerationRate)
    const shouldClose = projected > panelWidth / 2
    const target = shouldClose ? panelWidth : 0
    if (reduceMotion) {
      drawerX.set(target)
    } else {
      animate(drawerX, target, {
        type: 'spring',
        velocity, // hand off the release velocity so there's no seam between drag and settle
        bounce: 0,
        duration: 0.4,
      })
    }
    setIsOpen(!shouldClose)
  }

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Update scrolled state for styling
      setScrolled(currentScrollY > 10)

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY.current + 10) {
        // Scrolling down - hide navbar
        setVisible(false)
      } else if (currentScrollY < lastScrollY.current - 10 || currentScrollY <= 0) {
        // Scrolling up or at the top - show navbar
        setVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isOpen && target.classList.contains('mobile-overlay')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  // Handle escape key press
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('keydown', handleEscKey)
    return () => document.removeEventListener('keydown', handleEscKey)
  }, [])

  // Clean up any existing timeouts when unmounting
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    setActiveDropdown(null)
  }

  const toggleMobileDropdown = (index: number, e?: React.MouseEvent) => {
    e && e.preventDefault()
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  // Improved dropdown handler for desktop
  const handleDropdownHover = (index: number, isEntering: boolean) => {
    // Only apply for desktop
    if (window.innerWidth < 1024) return

    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }

    if (isEntering) {
      // Open dropdown immediately
      setActiveDropdown(index)
    } else {
      // Set a longer delay before closing the dropdown
      // This gives the user time to move to the dropdown content
      dropdownTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null)
      }, 500) // Increased timeout to 500ms to give more time to move to the dropdown
    }
  }

  const isActivePath = (path: string) => {
    if (path === pathname) return true
    if (path === '/blog' && pathname.startsWith('/blog/')) return true
    return false
  }

  return (
    <>
      {/* Fixed Header — a translucent material throughout, not a hard-edged
          opaque bar. Scrolled state thickens the material (more opacity,
          more blur) and adds a soft edge instead of a hard shadow line. */}      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform bg-white/90 backdrop-blur-md
          ${scrolled ? 'shadow-[0_1px_0_0_rgba(23,49,88,0.08),0_8px_24px_-12px_rgba(23,49,88,0.15)]' : ''}
          ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">{/* Left Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Nyati Cement Logo"
                width={110}
                height={110}
                className="h-20 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                {navLinks.map((link, index) => (
                  <li
                    key={index}
                    className="relative group"
                    ref={el => { navItemRefs.current[index] = el }}
                    onMouseEnter={() => link.dropdown && handleDropdownHover(index, true)}
                    onMouseLeave={() => link.dropdown && handleDropdownHover(index, false)}
                  >
                    <div className="flex items-center">
                      <Link
                        href={link.path}
                        className={`px-3 py-6 flex items-center text-sm transition-all duration-300 relative
                          ${isActivePath(link.path) ? 'text-nyati-navy font-semibold' : 'text-nyati-navy hover:text-nyati-orange'}`}
                        onClick={(e) => link.dropdown && toggleMobileDropdown(index, e)}
                      >
                        <span className="relative z-10">{link.name}</span>

                        {/* Active indicator line */}
                        <span
                          className={`absolute inset-x-0 bottom-0 h-1 transform transition-all duration-300 ease-out bg-nyati-orange
                            ${isActivePath(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                          style={{ transformOrigin: 'left center' }}
                        ></span>

                        {/* Dropdown arrow */}
                        {link.dropdown && (
                          <svg
                            className={`w-4 h-4 ml-1 transition-transform duration-300
                              ${activeDropdown === index ? 'rotate-180 text-nyati-orange' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </Link>
                    </div>

                    {/* Desktop Mega-Menu Dropdown */}
                    {link.dropdown && (
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 mt-0 bg-white shadow-xl border-t-2 border-nyati-orange
                          transition-all duration-200 w-[520px] z-50 p-3
                          ${activeDropdown === index ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                        onMouseEnter={() => handleDropdownHover(index, true)}
                        onMouseLeave={() => handleDropdownHover(index, false)}
                      >
                        <div className="grid grid-cols-2 gap-1">
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.path}
                              className={`flex items-start gap-3 p-3 transition-colors duration-150 border border-transparent
                                ${pathname === item.path ? 'bg-nyati-orange/5 border-nyati-orange/20' : 'hover:bg-gray-50 hover:border-gray-100'}`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.icon && (
                                <span className="flex-shrink-0 w-9 h-9 bg-gray-50 flex items-center justify-center text-nyati-navy">
                                  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={item.icon} />
                                  </svg>
                                </span>
                              )}
                              <span className="min-w-0">
                                <span className={`block text-sm font-bold leading-tight ${pathname === item.path ? 'text-nyati-navy' : 'text-nyati-navy'}`}>
                                  {item.name}
                                </span>
                                {item.blurb && (
                                  <span className="block text-xs text-nyati-grey mt-0.5">{item.blurb}</span>
                                )}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>            {/* Right side container with Logo */}
            <div className="hidden lg:flex items-center space-x-3">
              {/* Right Logo - minimized */}              <Link href="/" className="flex-shrink-0">
              <Image
                  src="/images/lake-cement-ltd.png"
                  alt="Lake Cement Logo"
                  width={140}
                  height={20}
                  className="h-5 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute h-0.5 w-6 bg-nyati-navy transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'rotate-45 top-2' : 'top-0'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 bg-nyati-navy top-2 transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 w-0' : 'opacity-100 w-6'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-nyati-navy transform transition-all duration-300 ease-in-out ${
                    isOpen ? '-rotate-45 top-2' : 'top-4'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </header>      {/* Space for fixed header - conditionally rendered based on visibility */}
      <div className={`h-16 lg:h-20 transition-all duration-300 ${!visible ? 'opacity-0' : ''}`}></div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden mobile-overlay"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Navigation Drawer — draggable right to dismiss like a native
          sheet: 1:1 while held, rubber-banded past its open/closed bounds,
          and interruptible (grabbing it mid-animation just takes over the
          live position, which is what animating a shared motion value gives
          us for free). */}
      <motion.div
        ref={panelRef}
        drag="x"
        dragDirectionLock
        dragConstraints={{ left: 0, right: panelWidth ?? 500 }}
        dragElastic={{ left: 0.2, right: 0.15 }}
        dragMomentum={false}
        onDragEnd={handleDrawerDragEnd}
        style={{ x: drawerX }}
        className="fixed inset-y-0 right-0 z-40 w-4/5 max-w-sm bg-white shadow-xl lg:hidden overflow-y-auto"
      >        {/* Mobile Menu Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100">          {/* Lake Cement Logo for Mobile */}
          <div className="flex-shrink-0">
            <Image
              src="/images/lake-cement-ltd.png"
              alt="Lake Cement Logo"
              width={200}
              height={50}
              className="h-7 w-auto"
              priority
            /></div>
            <div className="flex items-center">
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-nyati-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="py-2">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`flex w-full items-center justify-between px-4 py-3 transition-colors
                        ${activeDropdown === index ? 'text-nyati-orange btn-secondary' : 'text-nyati-navy'}`}
                      onClick={() => toggleMobileDropdown(index)}
                    >
                      <span className="font-normal">{link.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown */}
                    <div className={`transition-max-height duration-300 ease-in-out overflow-hidden
                      ${activeDropdown === index ? 'max-h-96' : 'max-h-0'}`}>
                      <ul className="border-l-2 border-nyati-orange/30 ml-4 pl-2">
                        {link.dropdown.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              href={item.path}
                              className={`block px-4 py-2.5 text-sm transition-colors
                                ${pathname === item.path ? 'text-nyati-navy font-semibold' : 'text-nyati-navy'}`}
                              onClick={toggleMenu}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-nyati-orange inline-block mr-2"></span>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={`block px-4 py-3 transition-colors
                      ${isActivePath(link.path) ? 'text-nyati-navy font-semibold' : 'text-nyati-navy'}`}
                    onClick={toggleMenu}
                  >
                    <span className="font-medium">{link.name}</span>
                  </Link>
                )}
                <div className="border-b border-gray-100 mx-4"></div>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </>
  )
}
