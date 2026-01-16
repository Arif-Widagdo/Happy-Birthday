import { Fragment, useState } from "react";
import {
  Bars3BottomLeftIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Dialog, Switch, Transition } from "@headlessui/react";

import { useTheme, useThemeUpdate } from "../providers/ThemeContext";
import arifWidagdo from "../assets/img/arifWidagdo.jpg";

export default function Navbar() {
  const theme = useTheme();
  const toggleTheme = useThemeUpdate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-40 backdrop-blur bg-slate-200/60 dark:bg-black border-b border-slate-200/50 dark:border-slate-800">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800 shadow"
          >
            <Bars3BottomLeftIcon className="h-6 w-6 text-black dark:text-white" />
          </button>

          {/* Theme Switch */}
          <Switch
            checked={theme === "dark"}
            onChange={toggleTheme}
            className="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-200 dark:bg-slate-800 transition shadow"
          >
            <span className="sr-only">Toggle theme</span>
            <span
              className={`${
                theme === "dark" ? "translate-x-7" : "translate-x-1"
              } inline-flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-slate-700 transition shadow`}
            >
              {theme === "dark" ? (
                <MoonIcon className="h-4 w-4 text-white" />
              ) : (
                <SunIcon className="h-4 w-4 text-slate-800" />
              )}
            </span>
          </Switch>
        </div>
      </nav>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}

/* -------------------------------------------------------------------------- */
/* SIDEBAR */
/* -------------------------------------------------------------------------- */

function Sidebar({ open, onClose }) {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 flex">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative w-full max-w-md bg-slate-200/50 dark:bg-black/80 backdrop-blur-sm border-r border-slate-200/50 dark:border-slate-800">
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <XMarkIcon className="h-6 w-6 text-black dark:text-white" />
              </button>

              {/* Content */}
              <div className="p-8 pt-20">
                <figure className="flex flex-col items-center gap-6 text-center">
                  <img
                    src={arifWidagdo}
                    alt="Arif Widagdo"
                    className="h-32 w-32 rounded-full object-cover ring-4 ring-slate-200 dark:ring-slate-800"
                  />

                  <figcaption>
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      Arif Widagdo
                    </h3>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Software Engineer · RSUD Kemayoran
                    </p>
                  </figcaption>

                  <blockquote className="relative mt-4 rounded-2xl p-6 bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm shadow-sm ring-1 ring-slate-200/60 dark:ring-white/10">
                    {/* Accent line */}
                    <span className="absolute left-0 top-6 h-[60%] w-1 rounded-full bg-gradient-to-b from-slate-500 to-slate-500" />

                    {/* Quote mark */}
                    <span className="absolute -top-4 -left-2 text-7xl font-serif leading-none text-black dark:text-white select-none">
                      “
                    </span>

                    <p className="relative z-10 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      Kata-kata hampir tidak dapat menggambarkan cinta,
                      kegembiraan, dan kebahagiaan yang kamu bawa. Selamat ulang
                      tahun, semoga hari ini seindah dampak yang kamu berikan.
                    </p>
                  </blockquote>
                </figure>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
