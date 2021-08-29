import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function MyDialog() {
  let [isOpen, setIsOpen] = useState(true);
  const openDialog = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={openDialog}>open</button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" open={isOpen} onClose={() => setIsOpen(false)}>
          <Dialog.Overlay className="dialogOverlay" />

          <div className="modalDialog">
            <Dialog.Title>Deactivate account</Dialog.Title>
            <Dialog.Description>This will permanently deactivate your account</Dialog.Description>

            <p>
              Are you sure you want to deactivate your account? All of your data will be permanently
              removed. This action cannot be undone.
            </p>

            <button onClick={() => setIsOpen(false)}>Deactivate</button>
            <button onClick={() => setIsOpen(false)}>Cancel</button>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
