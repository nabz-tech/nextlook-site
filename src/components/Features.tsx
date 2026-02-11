import { Zap, Shield, Smartphone, Palette } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get your try-on results in seconds, not minutes. Our AI works instantly.',
  },
  {
    icon: Palette,
    title: 'Any Style, Any Time',
    description: 'From casual wear to formal attire. Try on dresses, shirts, pants, and more.',
  },
  {
    icon: Smartphone,
    title: 'Made for Mobile',
    description: 'Snap a photo with your phone and try on clothes immediately. No desktop needed.',
  },
  {
    icon: Shield,
    title: 'Private & Secure',
    description: 'Your photos are encrypted and never shared. Delete anytime with one tap.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why you'll love NextLook
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The smartest way to shop for clothes online. No more returns, no more regret.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group p-6 bg-slate-50 rounded-3xl hover:bg-slate-100 transition-colors"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
