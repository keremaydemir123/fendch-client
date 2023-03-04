import React from 'react';
import Modal from './Modal';

function ProjectSubmitModal({ id }: { id: string }) {
  return (
    <Modal label="submit" id={id}>
      <div>askdjalksdja</div>
      <div>askdjalksdja</div>
      <div className="modal-action">
        <label htmlFor={id} className="btn">
          Yay!
        </label>
      </div>
    </Modal>
  );
}

export default ProjectSubmitModal;
