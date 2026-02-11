import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">NextLook</span>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-slate-500">
            © 2025 NextLook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
