import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  PlayCircleIcon,
  HandHeartIcon,
  UserGroupIcon,
  Globe02Icon,
  Target01Icon,
  HeartHandshakeIcon,
  GraduationCapIcon,
  DropletsIcon,
  StethoscopeIcon,
  Home01Icon,
  ArrowUpRight01Icon,
  ChartUpIcon,
  Award01Icon,
  Quote,
  Calendar01Icon,
  MapPinIcon,
} from "@hugeicons/core-free-icons";
import Contact from "../components/Contacts";

const values = [
  {
    icon: Target01Icon,
    title: "Our Mission",
    text: "To relieve suffering and create lasting opportunity for vulnerable families worldwide, regardless of race, religion, or borders.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Our Values",
    text: "Dignity, compassion, and accountability guide every program. We stand beside communities, not above them.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Globe02Icon,
    title: "Our Approach",
    text: "We partner with local organizations on the ground, ensuring aid reaches those who need it most — efficiently and transparently.",
    color: "bg-teal-50 text-teal-600",
  },
];

const programs = [
  {
    icon: GraduationCapIcon,
    title: "Education",
    desc: "Building schools, training teachers, and funding scholarships so every child can learn and dream.",
    tag: "1,200 schools built",
    image:
      "https://images.pexels.com/photos/8364023/pexels-photo-8364023.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: DropletsIcon,
    title: "Clean Water",
    desc: "Drilling wells and installing purification systems to bring safe drinking water to remote villages.",
    tag: "8,400 wells drilled",
    image:
      "https://images.pexels.com/photos/2912348/pexels-photo-2912348.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: StethoscopeIcon,
    title: "Healthcare",
    desc: "Running mobile clinics and vaccination campaigns to reach families with no access to care.",
    tag: "3.1M patients treated",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: Home01Icon,
    title: "Shelter & Food",
    desc: "Distributing emergency meals and rebuilding homes for families displaced by crisis or disaster.",
    tag: "920K homes rebuilt",
    image:
      "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const stats = [
  { value: "5.2M+", label: "Lives helped", icon: HeartHandshakeIcon },
  { value: "220K", label: "Active volunteers", icon: UserGroupIcon },
  { value: "60", label: "Countries reached", icon: ChartUpIcon },
  { value: "92%", label: "Funds to programs", icon: Award01Icon },
];

const stories = [
  {
    name: "Amara Ndlovu",
    role: "Mother and small-business owner, Zimbabwe",
    quote:
      "When the drought came, I could not feed my children. WorldCharity brought food, then a micro-grant to restart my sewing shop. Today I employ three other women.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Rajesh Patel",
    role: "Teacher at a community school, India",
    quote:
      "Our village had no school. WorldCharity helped build one and trained me to teach. Now 120 children learn here every day, and three have gone to university.",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Maria Santos",
    role: "Clinic health worker, Philippines",
    quote:
      "After the typhoon, our clinic was destroyed. Within a week, WorldCharity set up a mobile clinic and vaccinated every child in our barangay. They saved lives.",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const events = [
  {
    date: "Aug 12, 2026",
    title: "Global Hunger Relief Walk",
    location: "London, UK",
    desc: "Join 10,000 walkers raising funds to deliver emergency food parcels to families facing famine.",
    tag: "In person",
  },
  {
    date: "Aug 24, 2026",
    title: "Volunteer Training Webinar",
    location: "Online · Free",
    desc: "A virtual orientation for new volunteers on how to run local fundraising and awareness campaigns.",
    tag: "Virtual",
  },
  {
    date: "Sep 05, 2026",
    title: "School Supplies Drive",
    location: "Nairobi, Kenya",
    desc: "A weekend drive packing and distributing 50,000 school kits to children in rural communities.",
    tag: "In person",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen">
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-green-800 via-green-700 to-green-900"
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-green-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-300/10 rounded-full blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <HugeiconsIcon
                icon={HandHeartIcon}
                className="w-4 h-4 text-green-200"
              />
              <span className="text-sm font-medium text-green-50">
                Compassion in action
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              Changing lives
              <span className="block bg-linear-to-r from-green-200 via-emerald-200 to-green-300 bg-clip-text text-transparent">
                around the world
              </span>
              together.
            </h1>

            <p className="text-lg lg:text-xl text-green-50/90 max-w-xl mb-10 leading-relaxed">
              WorldCharity brings food, clean water, healthcare, and education
              to communities in need — one family, one village, one future at a
              time.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#programs"
                className="group inline-flex items-center gap-2 bg-white text-green-800 font-semibold px-7 py-4 rounded-full hover:bg-green-50 transition-all shadow-xl shadow-green-900/30 hover:scale-105"
              >
                Join the mission
                <HugeiconsIcon
                  icon={ArrowRight01Icon}
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#impact"
                className="group inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-all"
              >
                <HugeiconsIcon
                  icon={PlayCircleIcon}
                  className="w-5 h-5 fill-white"
                />
                Watch our story
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <HugeiconsIcon
                    icon={HandHeartIcon}
                    className="w-5 h-5 text-green-200"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold">5.2M+</div>
                  <div className="text-sm text-green-100/80">Lives helped</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <HugeiconsIcon
                    icon={UserGroupIcon}
                    className="w-5 h-5 text-green-200"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold">220K</div>
                  <div className="text-sm text-green-100/80">Volunteers</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <HugeiconsIcon
                    icon={Globe02Icon}
                    className="w-5 h-5 text-green-200"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold">60</div>
                  <div className="text-sm text-green-100/80">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-tr from-green-400/30 to-emerald-300/20 rounded-[2.5rem] blur-2xl" />
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Volunteers helping community"
                className="relative rounded-4xl shadow-2xl object-cover w-full h-140"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 w-64">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <HugeiconsIcon
                      icon={HandHeartIcon}
                      className="w-6 h-6 text-green-600"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">
                      This month
                    </div>
                    <div className="text-lg font-bold text-gray-900">
                      +42,800 meals
                    </div>
                  </div>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-linear-to-r from-green-500 to-green-600 rounded-full" />
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  75% of monthly goal
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700">
                    Live aid delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 100"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L0,100Z"
            />
          </svg>
        </div>
      </section>
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Volunteers helping communities"
                className="rounded-3xl shadow-xl object-cover w-full h-120"
              />
              <div className="absolute -bottom-8 -right-8 bg-green-600 text-white rounded-2xl p-6 shadow-2xl hidden sm:block">
                <div className="text-4xl font-extrabold">25+</div>
                <div className="text-sm text-green-50">Years of service</div>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                Who we are
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-6 leading-tight">
                A global movement for{" "}
                <span className="text-green-600">human dignity</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded in 2001, WorldCharity began as a small group of
                volunteers delivering food and medical supplies to a single
                crisis region. Today we are a global network of aid workers,
                donors, and local partners operating across 60 countries.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We believe the best way to fight poverty and suffering is to
                empower the people closest to it. Our programs are built with
                local communities, led by their needs, and measured by the lives
                changed.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Community-led",
                  "Transparent",
                  "Non-profit",
                  "Global reach",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium border border-green-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group p-8 rounded-2xl border border-gray-300 hover:border-green-200 hover:shadow-xl transition-all bg-white"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${v.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                >
                  <HugeiconsIcon icon={v.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="programs" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              What we do
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
              Programs that change lives
            </h2>
            <p className="text-lg text-gray-600">
              Every initiative is community-designed and locally led. Here are
              the four pillars of our work on the ground.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <HugeiconsIcon
                      icon={p.icon}
                      className="w-6 h-6 text-green-600"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs font-semibold text-green-600">
                      {p.tag}
                    </span>
                    <HugeiconsIcon
                      icon={ArrowUpRight01Icon}
                      className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section
        id="impact"
        className="py-24 bg-linear-to-br from-green-800 to-green-950 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-green-200 uppercase tracking-wider">
              Our impact
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-3 mb-5">
              Every number is a person
            </h2>
            <p className="text-lg text-green-50/80">
              We measure what matters. Every meal served, every well drilled,
              every child in school is tracked and reported transparently.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <HugeiconsIcon
                    icon={s.icon}
                    className="w-7 h-7 text-green-200"
                  />
                </div>
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-green-100/70">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Meals served",
                value: "38M meals",
                sub: "Hot meals and food parcels distributed",
              },
              {
                title: "People with clean water",
                value: "4.6M people",
                sub: "Safe drinking water access established",
              },
              {
                title: "Children educated",
                value: "780,000+",
                sub: "Kids enrolled in schools we support",
              },
            ].map((m) => (
              <div
                key={m.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <div className="text-sm text-green-200 font-medium mb-2">
                  {m.title}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {m.value}
                </div>
                <div className="text-sm text-green-50/70">{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="stories" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
              Community voices
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3 mb-5">
              Stories from the ground
            </h2>
            <p className="text-lg text-gray-600">
              The real impact of WorldCharity is best told by the people who
              live it every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((s) => (
              <figure
                key={s.name}
                className="group relative bg-linear-to-b from-green-50 to-white rounded-3xl p-8 border border-green-100 hover:shadow-2xl transition-all"
              >
                <HugeiconsIcon
                  icon={Quote}
                  className="w-10 h-10 text-green-200 mb-4"
                />
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{s.quote}"
                </blockquote>
                <figcaption className="flex items-center gap-4 pt-4 border-t border-green-100">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-green-200"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{s.name}</div>
                    <div className="text-sm text-gray-500">{s.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section id="events" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">
                Upcoming
              </span>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
                Events near you
              </h2>
            </div>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-green-700 font-semibold hover:gap-3 transition-all"
            >
              View all events
              <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {events.map((e) => (
              <div
                key={e.title}
                className="group grid md:grid-cols-12 gap-4 items-center p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all bg-white"
              >
                <div className="md:col-span-2 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                    <HugeiconsIcon
                      icon={Calendar01Icon}
                      className="w-6 h-6 text-green-600"
                    />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {e.date}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {e.title}
                    </h3>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                      {e.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{e.desc}</p>
                </div>
                <div className="md:col-span-3 flex md:justify-end items-center gap-3">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <HugeiconsIcon icon={MapPinIcon} className="w-4 h-4" />
                    {e.location}
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-semibold text-green-700 whitespace-nowrap">
                    Register →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
};

export default Home;
