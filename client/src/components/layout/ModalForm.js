import React, { useState, useContext } from "react";

import ModalContext from "../../context/modal/modalContext";
import "./ModalForm.css";

const ModalForm = () => {
  const [values, setValues] = useState({
    title: "",
    body: ""
  });
  const [alert, setAlert] = useState("");
  const modalContext = useContext(ModalContext);
  const { closeModal } = modalContext;

  const handleChange = e => {
    if (alert.length > 0) {
      setAlert("");
    }

    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSave = e => {
    e.preventDefault();

    const { title, body } = values;

    if (!title || !body) {
      setAlert("Please fill in all fields");
    } else {
      closeModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">Add Note</h2>
        <form className="modal-form">
          <div className="modal-form-group">
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" id="title"></input>
          </div>
          <div className="modal-form-group">
            <label htmlFor="body">Body:</label>
            <textarea type="text" name="body" id="body" rows="5" cols="50" />
          </div>
          {alert.length > 0 && <div className="form-alert">{alert}</div>}
          <div className="modal-actions">
            <button
              className="form-btn save-btn"
              type="submit"
              onClick={handleSave}
            >
              Save
            </button>
            <button className="cancel-btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
