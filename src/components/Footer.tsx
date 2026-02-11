import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-slate-900" />
            </div>
            <span className="text-lg font-bold text-white">NextLook</span>
          </div>

          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition">
              Terms
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition">
              Support
            </a>
          </nav>

          <p className="text-sm text-slate-500">
            © 2025 NextLook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
