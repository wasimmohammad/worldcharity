import { Link } from "react-router";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, ArrowLeft01Icon, Home01Icon } from "@hugeicons/core-free-icons";

const PageNotFound = () => {
  return (
    <main className="flex items-center justify-center px-4 mt-30 mb-10 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full rounded-[32px] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-green-50 p-8 shadow-[0_20px_60px_rgba(19,78,74,0.08)] sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              404 Error
            </span>

            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              This page does not exist.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              The page you are looking for may have moved, been removed, or the link may be incorrect.
              Let’s get you back to a safe place.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
              >
                <HugeiconsIcon icon={Home01Icon} className="h-4 w-4" />
                Back to home
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-200 hover:text-emerald-700"
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
                Explore services
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full bg-white shadow-inner shadow-emerald-100 ring-8 ring-emerald-50 sm:h-80 sm:w-80">
              <div className="absolute inset-5 rounded-full border border-dashed border-emerald-200" />
              <div className="absolute -right-3 top-8 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                404
              </div>
              <HugeiconsIcon
                icon={Search01Icon}
                className="h-24 w-24 text-emerald-600 sm:h-28 sm:w-28"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;