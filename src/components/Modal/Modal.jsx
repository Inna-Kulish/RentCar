import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle, CloseBtn, CloseIcon } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, onClose }) {
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalStyle>
        <CloseBtn type="button" onClick={()=> onClose()}><CloseIcon/></CloseBtn>
        {children}
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
}