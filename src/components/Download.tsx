import { Apple, Play } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to transform your shopping?
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          Download NextLook free and start trying on outfits instantly. Available on iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition"
          >
            <Apple className="w-7 h-7" />
            <div className="text-left">
              <div className="text-xs text-slate-600">Download on the</div>
              <div className="text-lg leading-none">App Store</div>
            </div>
          </a>

          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-2xl font-semibold hover:bg-slate-100 transition"
          >
            <Play className="w-7 h-7 fill-current" />
            <div className="text-left">
              <div className="text-xs text-slate-600">Get it on</div>
              <div className="text-lg leading-none">Google Play</div>
            </div>
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Free to download. In-app purchases available for premium features.
        </p>
      </div>
    </section>
  )
}
