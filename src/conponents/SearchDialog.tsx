// src/components/SearchDialog
// 検索ボタンを押したら表示する

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SearchIcon from "./SearchIcon";
import Search from "./Search";

export default function searchDialog() {
  let [isOpen, setIsOpen] = useState(false);
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <div className="searchBox">
      <button onClick={openDialog} className="searchButton">
        <SearchIcon />
        <span>記事を検索</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={closeDialog}>
          <Dialog.Overlay className="dialogOverlay" />
          <div className="modalDialog">
            <Search />
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
