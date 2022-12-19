import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./MyNotes.css";
import axios from "axios";

const MyNotes = () => {

  const [notes,setNotes] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes  = async () => {
    const { data } = await axios.get("http://localhost:5000/api/notes")
    setNotes(data); 
  }

  console.log(notes)

  useEffect(() => {
    fetchNotes();

  },[])

  return (
    <div>
      <MainScreen title="Hello user reviewer">
        <Link to="/createnote">
          <Button variant="primary" size="xs">
            create note
          </Button>{" "}
        </Link>{" "}
        {notes.map((note) => (
          <Card key={note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span className="reviewtitle">{note.title}</span>
              <div>
                <Button
                  variant="succes"
                  size="xs"
                  className="mx-2"
                >
                  <Link to={`/note/${note._id}`}>edit note</Link>
                </Button>
                <Button
                  variant="danger"
                  size="xs"
                  className="mx-2"
                  onClick={() =>deleteHandler(note._id)}
                >
                  delete note
                </Button>
              </div>
            </Card.Header>
            <Card.Body>
                <h4>
                  <bg>
                    Category = {note.category}
                  </bg>
                </h4>


              <blockquote className="blockquote mb-0">
                <p> {note.content}</p>
                <footer className="blockquote-footer">
                  created on date
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </MainScreen>
    </div>
  );
};

export default MyNotes;
