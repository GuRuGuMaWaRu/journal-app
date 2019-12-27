import React from "react";
import PropTypes from "prop-types";
import "./Note.css";

const Note = ({ note }) => (
  <div className="note">
    <div>
      <h3 className="note-title">{note.title}</h3>
      <p>{note.body}</p>
    </div>
    <div className="note-actions">
      <button className="note-btn note-btn-edit">Edit</button>
      <button className="note-btn note-btn-delete">Delete</button>
    </div>
  </div>
);

Note.propTypes = {
  note: PropTypes.object.isRequired
};

export default Note;
