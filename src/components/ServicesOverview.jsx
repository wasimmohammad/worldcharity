import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, ArrowUpRight01Icon } from "@hugeicons/core-free-icons";
import { services } from "../data/services";

const summaries = {
  immigration: "Guidance with immigration applications, documents, and case follow-up.",
  "tax-accounting": "Tax preparation, bookkeeping, payroll, and accounting support.",
  "business-corporate": "Support with business formation, registration, and corporate records.",
  "business-plans": "Business plans, financial projections, and support for starting and growing a business.",
  housing: "Help navigating housing resources, applications, and community referrals.",
  community: "Connections to essential resources for individuals and families.",
  humanitarian: "Community outreach, charitable programs, and opportunities to give back.",
  advocacy: "Document organization, agency communication, and case coordination.",
};

export default function ServicesOverview() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-24 border-y border-green-100 bg-linear-to-br from-green-50 via-white to-emerald-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Our services</span>
            <h2 id="services-heading" className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">Find the support you need</h2>
            <p className="text-lg text-gray-600 leading-relaxed">From everyday essentials to your next big step, explore practical assistance for individuals, families, and businesses.</p>
          </div>
          <a href="/services" className="inline-flex items-center gap-2 rounded-full bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
            View all services
            <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
          </a>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service) => (
            <a key={service.id} href={`/services#${service.id}`} className="group flex flex-col rounded-2xl border border-green-100 bg-white p-6 hover:border-green-300 hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                <HugeiconsIcon icon={service.icon} size={26} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{summaries[service.id]}</p>
              <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-green-700">
                Explore service
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
