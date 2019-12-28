import React from "react";
import PropTypes from "prop-types";
import "./Note.css";

const Note = ({ note, handleSelectNote, handleDeleteNote }) => (
  <div className="note">
    <div>
      <h3 className="note-title">{note.title}</h3>
      <p>{note.body}</p>
    </div>
    <div className="note-actions">
      <button
        className="note-btn note-btn-edit"
        onClick={() => handleSelectNote(note._id)}
      >
        Edit
      </button>
      <button
        className="note-btn note-btn-delete"
        onClick={() => handleDeleteNote(note._id)}
      >
        Delete
      </button>
    </div>
  </div>
);

Note.propTypes = {
  note: PropTypes.object.isRequired,
  handleSelectNote: PropTypes.func.isRequired,
  handleDeleteNote: PropTypes.func.isRequired
};

export default Note;
