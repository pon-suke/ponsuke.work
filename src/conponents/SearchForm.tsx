// src/components/SearchForm.tsx

import { Dialog, Transition } from "@headlessui/react";
import SearchIcon from "./SearchIcon";
import { useState, Fragment } from "react";

export default function SearchForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="flex items-center px-4 py-3 text-sm text-gray-500 rounded-full shadow focus:outline-none w-72 hover:bg-[#f1f7f8] hover:text-primary-dark hover:shadow-lg hover:duration-500"
      >
        <SearchIcon />
        <span className="ml-2">記事を検索</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Dialog.Overlay className="fixed inset-0 opacity-50 bg-primary-lightest" />

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle bg-white shadow-xl transition-all transform rounded-2xl">
                <Dialog.Title as="h3" className="text-lg font-medium text-gray-900 leading-6">
                  検索結果
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">ここに検索結果を挿入していきます 。</p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
