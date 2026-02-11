import { Camera, Shirt, Sparkles } from 'lucide-react'

const steps = [
  {
    icon: Camera,
    step: '01',
    title: 'Snap Your Photo',
    description: 'Take a quick photo of yourself or upload from your gallery.',
  },
  {
    icon: Shirt,
    step: '02',
    title: 'Pick an Outfit',
    description: 'Choose any clothing item you want to try — from your camera or our gallery.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'See the Magic',
    description: 'Our AI instantly shows you exactly how that outfit looks on you.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
            Simple as 1-2-3
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No complicated setup. Just you, your phone, and any outfit you want to try.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-slate-200"></div>
              )}
              <div className="relative text-center">
                <div className="w-24 h-24 mx-auto bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6">
                  <item.icon className="w-10 h-10 text-slate-700" />
                </div>
                <div className="text-5xl font-bold text-slate-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
