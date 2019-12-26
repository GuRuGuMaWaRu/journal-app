import React, { useContext } from "react";

import ModalContext from "../../context/modal/modalContext";
import "./AddNoteButton.css";

const AddNoteButton = () => {
  const modalContext = useContext(ModalContext);
  const { openModal } = modalContext;

  return (
    <button className="add-note-btn" onClick={openModal}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddNoteButton;
