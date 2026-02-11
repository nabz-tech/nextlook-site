import { Upload, Image as ImageIcon, Wand2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Photo',
    description: 'Take a full-body photo or upload one from your gallery. Works best with good lighting.',
  },
  {
    number: '02',
    icon: ImageIcon,
    title: 'Pick an Outfit',
    description: 'Select from trending styles or upload a reference image of any outfit you want to try.',
  },
  {
    number: '03',
    icon: Wand2,
    title: 'AI Magic',
    description: 'Our AI generates a realistic try-on in seconds. See how it fits, drapes, and looks on you.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Three simple steps to see yourself in any outfit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-sm h-full">
                <span className="text-6xl font-bold text-slate-100 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-slate-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
