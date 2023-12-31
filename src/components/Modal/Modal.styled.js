import styled from "styled-components";
import Close from '../../images/close.svg?react'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);

  transition: opacity 2500ms cubic-bezier(0.4, 0, 0.2, 1), visibility 2500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ModalStyle = styled.div`
  position: absolute;
    top: 50%;
    left: 50%;
     box-sizing: border-box;
    width: 541px;
    padding: 40px;
    background-color: white;
    border-radius: 24px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 2px 1px rgba(0, 0, 0, 0.2);
    transform: translate(-50%, -50%) scale(1);
    transition: transform 2500ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CloseBtn = styled.button`
  position: absolute;
  padding: 0;
  top: 16px;
  right: 16px;

  border: 0px;
  background-color: transparent;
`;

export const CloseIcon = styled(Close)`
display: block;
  width: 24px;
  height: 24px;
`;
