import { Apple, Play } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to transform your shopping?
        </h2>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
          Download NextLook today and start trying on clothes virtually. 
          Free to download — start with 5 free generations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-2xl hover:bg-slate-100 transition-all"
          >
            <Apple className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs text-slate-500">Download on the</div>
              <div className="text-sm font-bold">App Store</div>
            </div>
          </a>
          <a 
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all border border-white/20"
          >
            <Play className="w-6 h-6" />
            <div className="text-left">
              <div className="text-xs text-slate-400">Get it on</div>
              <div className="text-sm font-bold">Google Play</div>
            </div>
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Coming soon to App Store and Google Play
        </p>
      </div>
    </section>
  )
}
