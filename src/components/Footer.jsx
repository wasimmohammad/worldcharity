import { HugeiconsIcon } from "@hugeicons/react";
import {
  WhatsappIcon,
  ArrowUpRight01Icon,
} from "@hugeicons/core-free-icons";
import logo from "../assets/charity-logo.png";

const cols = [
  {
    title: "Organization",
    links: [
      { label: "About us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Our Impact", href: "#impact" },
      { label: "Our Stories", href: "#stories" },
      { label: "Events", href: "#events" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Immigration Assistance", href: "#programs" },
      { label: "Healthcare Support", href: "#programs" },
      { label: "Community & Social Service", href: "#programs" },
      { label: "Case Support & Advocacy", href: "#programs" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "+1 (972) 951 - 6310", href: "tel:+19729516310" },
      { label: "info@worldcharity.in", href: "mailto:info@worldcharity.in" },
      { label: "jaber@amadvocates.net", href: "mailto:jaber@amadvocates.net" },
      { label: "Contact form", href: "#contact" },
    ],
  },
];

const socials = [
  { icon: WhatsappIcon, href: "https://wa.me/19729516310", label: "WhatsApp" },
];

const Footer = () => {
  return (
    <footer className="bg-green-950 text-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <img src={logo} alt="World Charity Logo" />
              </div>
              <span className="font-extrabold text-xl text-white">
                World Charity
              </span>
            </div>
            <p className="text-white leading-relaxed max-w-sm mb-6">
              A global, community-led movement bringing food, water, healthcare,
              and education to families in need — one life at a time.
            </p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={social.href}  
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <HugeiconsIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
                  {c.title}
                </h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1 text-green-100/70 hover:text-white text-sm transition-colors"
                      >
                        {l.label}
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

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-white">
            © 2026 WorldCharity Foundation. A registered non-profit. All
            donations are tax-deductible.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
