import React, { Fragment, useState } from "react";
import {
  Bars3BottomLeftIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

import { useTheme, useThemeUpdate } from "../providers/ThemeContext";
import { Dialog, Switch, Transition } from "@headlessui/react";
import arifWidagdo from "../assets/img/arifWidagdo.jpg";

export default function Navbar() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  let [sidebar, setSidebar] = useState(true);

  function closeModal() {
    setSidebar(false);
  }

  function openModal() {
    setSidebar(true);
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-section">
          <button type="button" onClick={openModal} className="btn-sidebar ">
            <Bars3BottomLeftIcon className="w-6 h-6 text-black transform dark:text-white" />
          </button>
          <Switch
            checked={darkTheme === "dark"}
            onChange={toggleTheme}
            className={`bg-slate-200 dark:bg-slate-800 relative inline-flex h-8 w-16 items-center rounded-full`}
          >
            <span className="sr-only">Themes</span>
            <span
              className={`${
                darkTheme === "dark" ? "translate-x-8" : "translate-x-1"
              } inline-block h-6 w-6 transform rounded-full bg-white dark:bg-slate-600 transition`}
            >
              {darkTheme === "dark" ? (
                <MoonIcon className="text-black transform dark:text-white" />
              ) : (
                <SunIcon className="text-black transform" />
              )}
            </span>
          </Switch>
        </div>
      </nav>
      <Sidebar sidebar={sidebar} closeModal={closeModal} />
    </>
  );
}

function Sidebar({ sidebar, closeModal }) {
  return (
    <Transition appear show={sidebar} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-start justify-start min-h-full text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-x-full"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 -translate-x-full"
            >
              <Dialog.Panel className="w-full h-screen p-6 overflow-hidden text-left align-middle transition-all transform shadow-xl md:max-w-xl bg-gradient-to-r from-slate-200 to-black dark:bg-black">
                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-end text-lg font-medium leading-6 text-slate-900 "
                >
                  <button
                    type="button"
                    className="btn-sidebar"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-6 h-6 text-black transform dark:text-white" />
                  </button>
                </Dialog.Title>
                <div className="mt-4">
                  <figure className="p-8 overflow-hidden md:flex bg-slate-100 rounded-xl md:p-0 dark:bg-slate-800">
                    <img
                      className="object-cover w-56 h-56 mx-auto rounded-full md:w-48 md:h-auto md:rounded-none"
                      src={arifWidagdo}
                      alt=""
                    />
                    <div className="pt-6 space-y-4 text-center md:p-8 md:text-left">
                      <blockquote>
                        <p className="text-lg font-medium dark:text-white">
                          “Kata-kata hampir tidak dapat menggambarkan cinta,
                          kegembiraan dan kebahagiaan yang kamu bawa ke dalam
                          hari ini. Selamat ulang tahun, semoga kamu mendapatkan
                          semua itu dan lebih banyak lagi di hari istimewamu!”
                        </p>
                      </blockquote>
                      <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                          {/* <a
                            href="https://www.instagram.com/arif_widagdo/"
                            target="_blank"
                          > */}
                          Arif Widagdo
                          {/* </a> */}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                          Backend Developer, PanoramaID
                        </div>
                      </figcaption>
                    </div>
                  </figure>
                  {/* <Plants /> */}
                  {/* <div className="flex items-center justify-center w-full overflow-hidden border-2 shadow bg-slate-200 h-72 rounded-xl">
                    <img
                      src={arifWidagdo}
                      alt=""
                      className="object-cover w-56 h-auto"
                    />
                  </div> */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
