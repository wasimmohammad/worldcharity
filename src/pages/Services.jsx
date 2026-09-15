import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

import { services } from "../data/services";

export default function Services() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <title>Our Services | World Charity</title>
      <section className="border-b border-green-100 bg-linear-to-br from-green-50 via-white to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-700">Support for every step</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">Our Services</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">Practical guidance, essential resources, and compassionate support for individuals, families, businesses, and communities.</p>
          <a href="#service-directory" className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800">Explore our services <HugeiconsIcon icon={ArrowRight01Icon} size={20} /></a>
        </div>
      </section>

      <div id="service-directory" className="scroll-mt-24 max-w-7xl mx-auto px-6 lg:px-8 py-12 sm:py-16 grid lg:grid-cols-[280px_minmax(0,1fr)] gap-10 lg:gap-14 items-start">
        <aside className="lg:sticky lg:top-28">
          <nav aria-label="Service categories" className="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Find the support you need</h2>
            <ol className="space-y-1">
              {services.map((service, index) => (
                <li key={service.id}><a href={`#${service.id}`} className="flex gap-3 rounded-lg px-2 py-3 text-sm leading-relaxed text-gray-600 hover:bg-green-50 hover:text-green-800"><span className="font-semibold text-green-700">{String(index + 1).padStart(2, '0')}</span>{service.title}</a></li>
              ))}
            </ol>
          </nav>
          <p className="mt-5 px-2 text-sm leading-relaxed text-gray-600">Unsure where to start? <a href="#service-contact" className="font-semibold text-green-700 underline underline-offset-4">Contact our team</a>.</p>
        </aside>

        <div className="min-w-0 space-y-6">
          {services.map((service, index) => (
            <section key={service.id} id={service.id} aria-labelledby={`${service.id}-title`} className="scroll-mt-28 rounded-3xl border border-gray-200 bg-white p-6 sm:p-9">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700"><HugeiconsIcon icon={service.icon} size={26} /></div>
                <div><p className="text-xs font-semibold tracking-widest text-green-700 mb-1">SERVICE {String(index + 1).padStart(2, '0')}</p><h2 id={`${service.id}-title`} className="text-xl sm:text-2xl font-bold text-gray-900">{service.title}</h2></div>
              </div>
              <ul className="list-disc pl-5 space-y-3 marker:text-green-600 text-gray-600 leading-relaxed">
                {service.items.map((item) => <li key={item} className="pl-1">{item}</li>)}
              </ul>
              {service.note && <p className="mt-6 rounded-xl border border-green-100 bg-green-50 p-5 text-sm leading-relaxed text-green-900"><strong className="block mb-1">Please note</strong>{service.note}</p>}
            </section>
          ))}
        </div>
      </div>

      <section id="service-contact" className="scroll-mt-20 bg-green-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-xl"><h2 className="text-3xl font-bold text-white">Let’s take the next step together</h2><p className="mt-4 text-green-100 leading-relaxed">Reach out to discuss your needs and learn more about our services.</p></div>
          <div className="flex flex-col items-start gap-4"><a href="mailto:info@worldcharity.in" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-green-900 hover:bg-green-50">Email our team <HugeiconsIcon icon={ArrowRight01Icon} size={20} /></a><a href="tel:+19729516310" className="text-green-50 underline underline-offset-4">Call +1 (972) 951 - 6310</a></div>
        </div>
      </section>
    </main>
  );
}
