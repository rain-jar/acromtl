'use client'
import { useState, useEffect } from 'react'
import { Menu, X} from 'lucide-react'
import { createPortal } from 'react-dom'
import Link from 'next/link'

export default function Header() {
    
    const [open, setOpen] = useState(false)   // mounts drawer
    const [slide, setSlide] = useState(false) // controls translate animation

    useEffect(() => {
    if (open) {
        setSlide(false)                               // start off-screen
        const id = requestAnimationFrame(() => setSlide(true)) // then slide in
        return () => cancelAnimationFrame(id)
    } else {
        setSlide(false)                               // ensure reset when closed
    }
    }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F0E0D]/80 backdrop-blur">
        <div className="relative w-full px-4 h-14 sm:h-16 md:h-20">
        {/* Left/Right: stay anchored via flex */}
            <div className="flex h-full w-full items-center">
                {/* Left: Burger (mobile only) */}
                <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="md:hidden justify-self-start inline-flex items-center gap-2 rounded-xl border border-white/10 px-2 py-1 hover:bg-white/5"
                >
                <Menu className="h-5 w-5" />
                </button>

                {/* Right: Nav (desktop only, stays pinned right) */}
                <nav className="hidden md:flex items-center gap-6 ml-auto">
                <Link href="/team" className="hover:opacity-80">Team</Link>
                <Link href="/about" className="hover:opacity-80">About</Link>
                <Link href="/announcements" className="hover:opacity-80">Announcements</Link>
                </nav>
            </div>

            {/* Center: Absolutely centered logo + title (never shifts) */}
            <Link
                href="/"
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center gap-2 pointer-events-none"
            >
                <img
                src="/logo.png"
                alt="Running Crew Logo"
                className="h-6 w-6 sm:h-12 sm:w-12 md:h-12 md:w-12 pointer-events-auto"
                />
                <span className="text-sm sm:text-base md:text-lg font-semibold tracking-wide pointer-events-auto">
                AcroMTL
                </span>
            </Link>
        </div>

        {/* Mobile drawer (fixed; does not affect header grid) */}
        {open && typeof document !== 'undefined' &&
            createPortal(
                <>
                {/* Backdrop (FULL PAGE, on top of everything) */}
                <div
                    onClick={() => { setSlide(false); setTimeout(() => setOpen(false), 200) }}
                    className="fixed inset-0 z-[100] bg-black md:hidden"
                />

                {/* Drawer (also at root level) */}
                <aside
                    onClick={(e) => e.stopPropagation()}
                    className={`fixed left-0 top-0 z-[110] h-full w-72 max-w-[85%] bg-[#0F0E0D] ring-1 ring-white/10 shadow-2xl md:hidden transform transition-transform duration-200 ${slide ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex items-center justify-between px-4 h-14 border-b border-white/10">
                    <span className="text-sm font-semibold tracking-wide">Menu</span>
                    <button
                        aria-label="Close menu"
                        onClick={() => { setSlide(false); setTimeout(() => setOpen(false), 200) }}
                        className="rounded-xl border border-white/10 p-2 hover:bg-white/5"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    </div>
                    <nav className="flex flex-col gap-1 p-2">
                    <a href="/team" onClick={() => { setSlide(false); setTimeout(() => setOpen(false), 200) }} className="rounded-lg px-3 py-3 hover:bg-white/5">Team</a>
                    <a href="/about" onClick={() => { setSlide(false); setTimeout(() => setOpen(false), 200) }} className="rounded-lg px-3 py-3 hover:bg-white/5">About</a>
                    <a href="/networkofcare" onClick={() => { setSlide(false); setTimeout(() => setOpen(false), 200) }} className="rounded-lg px-3 py-3 hover:bg-white/5">Network Of Care</a>
                    </nav>
                </aside>
                </>,
                document.body
            )
        }


    </header>
  )
}
