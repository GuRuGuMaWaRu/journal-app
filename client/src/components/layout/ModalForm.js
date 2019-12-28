import React, { useState, useEffect, useContext } from "react";

import NotesContext from "../../context/notes/notesContext";
import "./ModalForm.css";

const ModalForm = () => {
  const [values, setValues] = useState({
    title: "",
    body: ""
  });
  const [alert, setAlert] = useState("");
  const notesContext = useContext(NotesContext);
  const { currentNote, createNote, updateNote, closeModal } = notesContext;

  useEffect(() => {
    if (currentNote) {
      setValues({
        title: currentNote.title,
        body: currentNote.body
      });
    }
  }, [currentNote]);

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
      currentNote ? updateNote(values, currentNote._id) : createNote(values);
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-window" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">
          {currentNote ? "Edit Note" : "Add Note"}
        </h2>
        <form className="modal-form">
          <div className="modal-form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              value={values.title}
              onChange={handleChange}
            ></input>
          </div>
          <div className="modal-form-group">
            <label htmlFor="body">Body:</label>
            <textarea
              type="text"
              name="body"
              id="body"
              rows="5"
              cols="50"
              value={values.body}
              onChange={handleChange}
            />
          </div>
          {alert.length > 0 && <div className="form-alert">{alert}</div>}
          <div className="modal-actions">
            <button
              className="form-btn save-btn"
              type="submit"
              onClick={handleSave}
            >
              {currentNote ? "Update" : "Save"}
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
