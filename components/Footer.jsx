import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center">
        <div className="text-lg font-semibold tracking-wide">AcroMTL</div>
        <div className="mt-3 flex items-center justify-center gap-3 text-lg">
          <span className="opacity-100">Join us</span>
          <a
            href="https://www.instagram.com/acromtl/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="rounded-xl border border-white/10 p-2 hover:bg-white/5"
          >
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
