import { HugeiconsIcon } from "@hugeicons/react";
import {
  Globe02Icon,
  Share02Icon,
  Message01Icon,
  MailSend01Icon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";

const cols = [
  {
    title: "Organization",
    links: ["About us", "Our team", "Annual reports", "Careers", "Press kit"],
  },
  {
    title: "Programs",
    links: [
      "Education",
      "Clean water",
      "Healthcare",
      "Shelter & food",
      "Emergency relief",
    ],
  },
  {
    title: "Get involved",
    links: [
      "Volunteer",
      "Donate",
      "Partner with us",
      "Corporate giving",
      "Fundraise",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Impact data",
      "Research papers",
      "Media library",
      "Contact",
    ],
  },
];

const socials = [Share02Icon, Globe02Icon, Message01Icon, MailSend01Icon];

const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
                <HugeiconsIcon
                  icon={Globe02Icon}
                  className="w-6 h-6 text-white"
                />
              </div>
              <span className="font-extrabold text-xl text-white">
                WorldCharity
              </span>
            </div>
            <p className="text-green-100/70 leading-relaxed max-w-sm mb-6">
              A global, community-led movement bringing food, water, healthcare,
              and education to families in need — one life at a time.
            </p>
            <div className="flex gap-3">
              {socials.map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110"
                  aria-label="social link"
                >
                  <HugeiconsIcon icon={icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-1 text-green-100/70 hover:text-white text-sm transition-colors"
                      >
                        {l}
                        <HugeiconsIcon
                          icon={ArrowUpRight01Icon}
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-green-100/60">
            © 2026 WorldCharity Foundation. A registered non-profit. All
            donations are tax-deductible.
          </p>
          <div className="flex gap-6 text-sm text-green-100/60">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Financials
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
