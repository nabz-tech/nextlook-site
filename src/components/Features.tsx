import { Zap, Shirt, Camera, Shield } from 'lucide-react'

const features = [
  {
    icon: Camera,
    title: 'Snap & Try',
    description: 'Take a photo or upload one. Our AI understands your body shape in seconds.',
  },
  {
    icon: Shirt,
    title: 'Any Outfit',
    description: 'Choose from thousands of garments or upload your own reference images.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Get your try-on result in seconds with our Fast mode, or go Advanced for perfection.',
  },
  {
    icon: Shield,
    title: 'Your Privacy',
    description: 'Your photos are encrypted and secure. We never share or sell your data.',
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why you'll love NextLook
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The smartest way to shop for clothes online. Never guess your size again.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-3xl bg-slate-50 hover:bg-slate-100 transition"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition">
                <feature.icon className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
