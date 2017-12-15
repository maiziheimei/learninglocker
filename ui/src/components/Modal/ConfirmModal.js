import React, { PropTypes } from 'react';
import { compose, setPropTypes, defaultProps } from 'recompose';
import ConfirmTextIconButton from 'ui/components/TextIconButton/ConfirmTextIconButton';
import CancelTextIconButton from 'ui/components/TextIconButton/CancelTextIconButton';
import Modal from 'ui/components/Modal/Modal';

const enhanceConfirmModal = compose(
  setPropTypes({
    isOpen: PropTypes.bool,
    title: PropTypes.string.isRequired,
    message: PropTypes.element,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
  }),
  defaultProps({
    isOpen: false,
  })
);

const renderModalMessage = ({ message }) => (
  <div
    className="modal-body clearfix"
    style={{ maxHeight: '500px', overflow: 'auto', textAlign: 'center' }}>
    {message}
  </div>
);

const renderModalActions = ({ onConfirm, onCancel }) => (
  <div className="modal-footer" style={{ textAlign: 'center' }}>
    <ConfirmTextIconButton onClick={onConfirm} />
    <CancelTextIconButton onClick={onCancel} />
  </div>
);

const renderConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => (
  <Modal isOpen={isOpen} title={title} onCancel={onCancel}>
    {renderModalMessage({ message })}
    {renderModalActions({ onConfirm, onCancel })}
  </Modal>
);

export default enhanceConfirmModal(renderConfirmModal);