import { useState } from "react";
import NotesList from "./components/NotesList";
import NoteForm from "./components/NoteForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Comprar víveres", content: "Leche, pan, huevos y café." },
    { id: 2, title: "Revisar emails", content: "Responder a los correos pendientes del trabajo." },
    { id: 3, title: "Hacer ejercicio", content: "30 minutos de cardio y 20 minutos de pesas." },
  ]);

  const [noteToEdit, setNoteToEdit] = useState(null);

  const addNote = (title, content) => {
    const newNote = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString()
    };
    setNotes([...notes, newNote]);
  };

  const editNote = (updatedNote) => {
    setNotes(notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    ));
    setNoteToEdit(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (noteToEdit && noteToEdit.id === id) {
      setNoteToEdit(null);
    }
  };

  return (
    <div className="bg-dark text-white min-vh-100">
      <div className="container py-5">
        <h1 className="text-center">📝 Aplicación de Notas</h1>
        <NoteForm addNote={addNote} editNote={editNote}
          noteToEdit={noteToEdit}
          setNoteToEdit={setNoteToEdit} />
        <NotesList notes={notes} 
          deleteNote={deleteNote}
          onEdit={setNoteToEdit} />
      </div>
    </div>
  );
};

export default App;
