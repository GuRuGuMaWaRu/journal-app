import React, { useReducer } from "react";

import ModalContext from "./modalContext";
import modalReducer from "./modalReducer";
import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const ModalState = ({ children }) => {
  const initialState = {
    isOpen: true
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  // Open modal
  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  // Close modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen: state.isOpen,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
