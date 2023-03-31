import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../http-common";

const NotesList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get("/notes/find-all-notes");
    setNotes(response.data);
  };

  const deleteNotes = async (noteId) => {
      await axios.delete(`/notes/${noteId}`);
      getNotes();
  };

  return (
    <div>
      <h1 className="title">Notes</h1>
      <h2 className="subtitle">List of Notes</h2>
      <Link to="/notes/add" className="button is-primary mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Note Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr key={note.id}>
              <td>{index + 1}</td>
              <td>{note.title}</td>
              <td>{note.description}</td>
              <td>
                <Link
                  to={`/notes/edit/${note.id}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteNotes(note.id)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NotesList;
