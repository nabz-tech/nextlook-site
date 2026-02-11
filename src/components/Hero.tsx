import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">NextLook</span>
          </div>
          <a
            href="#download"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition"
          >
            Get the App
          </a>
        </nav>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Powered by AI
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
              Try on any outfit{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                instantly
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Upload your photo, pick any outfit, and see exactly how it looks on you before you buy. No dressing room required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold hover:bg-slate-800 transition"
              >
                Download Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-semibold hover:border-slate-300 transition"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* App Preview */}
          <div className="relative">
            <div className="relative mx-auto w-72 sm:w-80">
              {/* Phone frame */}
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-full z-10" />
                <div className="bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Mock UI */}
                  <div className="h-full bg-slate-50 flex flex-col">
                    <div className="h-14 bg-white border-b border-slate-100 flex items-center justify-center">
                      <span className="font-semibold text-slate-900">NextLook</span>
                    </div>
                    <div className="flex-1 p-4 space-y-3">
                      <div className="aspect-[3/4] bg-slate-200 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-white/90 backdrop-blur rounded-xl p-3">
                            <div className="h-2 bg-slate-200 rounded w-3/4 mb-2" />
                            <div className="h-2 bg-slate-200 rounded w-1/2" />
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-slate-200 rounded-xl" />
                        <div className="aspect-square bg-slate-200 rounded-xl" />
                        <div className="aspect-square bg-slate-200 rounded-xl border-2 border-blue-500" />
                      </div>
                    </div>
                    <div className="h-20 bg-white border-t border-slate-100 flex items-center justify-center gap-8">
                      <div className="w-10 h-10 bg-slate-100 rounded-full" />
                      <div className="w-14 h-14 bg-slate-900 rounded-full" />
                      <div className="w-10 h-10 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-4 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-900">Perfect fit!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
