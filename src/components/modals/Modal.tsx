import React from 'react';

type ModalProps = {
  children: React.ReactNode;
  label: string;
  id: string;
};

function Modal({ children, id }: ModalProps) {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          {children}
        </label>
      </label>
    </>
  );
}

export default Modal;
