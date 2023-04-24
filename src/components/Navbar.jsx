import React, { Fragment, useState } from "react";
import {
  Bars3BottomLeftIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import { useTheme, useThemeUpdate } from "../providers/ThemeContext";
import { Dialog, Switch, Transition } from "@headlessui/react";

export default function Navbar() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  let [sidebar, setSidebar] = useState(false);

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
          <button type="button" onClick={openModal} className="btn-sidebar">
            <Bars3BottomLeftIcon />
          </button>
          <Switch
            checked={darkTheme === "dark"}
            onChange={toggleTheme}
            className={`bg-gray-200 dark:bg-[#6811D1] relative inline-flex h-8 w-16 items-center rounded-full`}
          >
            <span className="sr-only">Themes</span>
            <span
              className={`${
                darkTheme === "dark" ? "translate-x-8" : "translate-x-1"
              } inline-block h-6 w-6 transform rounded-full bg-white dark:bg-[#b070ff] transition`}
            >
              {darkTheme === "dark" ? (
                <MoonIcon className="text-black transform" />
              ) : (
                <SunIcon className="text-black transform" />
              )}
            </span>
          </Switch>
        </div>
      </nav>
      <Sidebar
        sidebar={sidebar}
        closeModal={closeModal}
        openModal={openModal}
      />
    </>
  );
}

function Sidebar({ sidebar, closeModal, openModal }) {
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
          <div className="flex min-h-full items-start justify-start text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-x-full"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 -translate-x-full"
            >
              <Dialog.Panel className="w-full h-screen max-w-lg transform overflow-hidden  bg-white dark:bg-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900 flex justify-end "
                >
                  <div>Halo Ncyem</div>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent
                    bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
