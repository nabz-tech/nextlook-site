import { Sparkles, Shirt, Camera } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <nav className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">NextLook</span>
          </div>
          <a 
            href="#download" 
            className="hidden sm:inline-flex px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors"
          >
            Get the App
          </a>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              AI-Powered Fashion
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Try on any outfit{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                instantly
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Upload your photo, pick any clothing, and see exactly how it looks on you. 
              No more guessing — shop with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-2xl hover:bg-slate-800 transition-all hover:scale-105"
              >
                Download Free
              </a>
              <a 
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Available on iOS and Android
            </p>
          </div>

          <div className="relative">
            {/* Phone mockup */}
            <div className="relative mx-auto w-72 sm:w-80">
              <div className="relative bg-slate-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-full z-10"></div>
                <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Mock app UI */}
                  <div className="p-4 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4 mt-4">
                      <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                      <div className="text-sm font-semibold text-slate-700">NextLook</div>
                      <div className="w-8"></div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="aspect-[3/4] bg-slate-200 rounded-2xl relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Shirt className="w-12 h-12 text-slate-400" />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/90 backdrop-blur rounded-xl">
                          <div className="text-xs text-slate-500 mb-1">Tap to try on</div>
                          <div className="text-sm font-medium text-slate-900">Summer Dress</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="aspect-square bg-slate-200 rounded-xl"></div>
                        <div className="aspect-square bg-slate-200 rounded-xl"></div>
                        <div className="aspect-square bg-slate-200 rounded-xl flex items-center justify-center">
                          <Camera className="w-5 h-5 text-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -right-4 top-20 p-3 bg-white rounded-2xl shadow-xl animate-bounce">
                <Sparkles className="w-6 h-6 text-yellow-500" />
              </div>
              <div className="absolute -left-4 bottom-32 p-3 bg-white rounded-2xl shadow-xl">
                <div className="text-xs font-bold text-green-600">98% Match</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
