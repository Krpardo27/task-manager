import { useState, useEffect } from 'react';

const NoteForm = ({ addNote, editNote, noteToEdit, setNoteToEdit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Cargar datos de la nota a editar
  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    if (noteToEdit) {
      editNote({
        ...noteToEdit,
        title,
        content
      });
    } else {
      addNote(title, content);
    }

    setTitle("");
    setContent("");
  };

  const handleCancel = () => {
    setNoteToEdit(null);
    setTitle("");
    setContent("");
  };

  return (
    <div className="container my-4">
      <div className='row justify-content-center'>
      <form onSubmit={handleSubmit} className="p-3 bg-secondary rounded">
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control"
            placeholder="Contenido de la nota..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-light flex-grow-1">
            {noteToEdit ? "Actualizar Nota" : "Agregar Nota"}
          </button>
          {noteToEdit && (
            <button 
              type="button" 
              className="btn btn-outline-light"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
      </div>
    </div>
  );
};

export default NoteForm;