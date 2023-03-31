import React, { useEffect,useState } from "react";
import Layout from "./Layout";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import './Dashboard.css'
import { useNavigate } from "react-router-dom";
import NoteCard from "../components/NoteCard";
import axios from "../http-common";
import Row from 'react-bootstrap/Row';
import {
  findNotesByTitle,
}  from "../features/notesSlice";



const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState("");
  const [currentNote, setCurrentNote] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const { user } = useSelector((state) => state.auth);
  const note = useSelector(state => state.notes);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const refreshData = () => {
    setCurrentNote(null);
    setCurrentIndex(-1);
  };

  const setActiveNote = (note, index) => {
    setCurrentNote(note);
    setCurrentIndex(index);
  };
 
  const findByTitle =() => {
    refreshData()
    dispatch(findNotesByTitle({ title: searchTitle }));
  
  };


  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await axios.get("/notes/find-all-notes");
    setNotes(response.data);

  };

  
  

  return (
    <Layout>
      <div className="input">
          <input
            type="text"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div>
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      
      <Welcome />
      <hr/>
    <div className="col-md-6">
      <h4>Seach-List</h4>
        <ul className="list-group">
          {note &&
            note.map((note, index) => (
              <li className={
                "list-group-item " + (index === currentIndex ? "active" : "")
              }
              onClick={() => setActiveNote(note, index)}
              key={index}>
              <h1><span className="search_title">{note.title}</span>{"   "}CLICK TO VIEW DETAILS BELOW</h1>
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentNote ? (
          <div>
            <h4>Notes</h4>
            <div>
              <label>
                <strong>Title:</strong>
              </label>{" "}
              {currentNote.title}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentNote.description}
            </div>
            <div>
              <label>
                <strong>Date-Created:</strong>
              </label>{" "}
              {currentNote.createdAt}
            </div>
          </div>
        ) : (
          <div>
            <br />
            <p>Search Details....</p>
          </div>
        )}
      </div>
      <hr/>
    
        <Row>  
          {notes.map((note, index) => (
            <NoteCard note={note} key={index}/> 
          ))}
        </Row>
    
    </Layout>
    
  );
};

export default Dashboard;
