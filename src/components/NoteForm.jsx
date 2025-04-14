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
  <div className="row justify-content-center">
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
      <form onSubmit={handleSubmit} className="p-3 bg-secondary rounded">
        <div className="mb-2">
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <textarea
            className="form-control form-control-sm"
            placeholder="Contenido de la nota..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-light btn-sm flex-grow-1">
            {noteToEdit ? "Actualizar Nota" : "Agregar Nota"}
          </button>
          {noteToEdit && (
            <button
              type="button"
              className="btn btn-outline-light btn-sm"
              onClick={handleCancel}
            >
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default NoteForm;