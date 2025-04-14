import NoteCard from "./NoteCard";

const NotesList = ({ notes, deleteNote, onEdit }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center text-white">📒 Mis Notas</h2>
      <div className="row">
        {notes.length > 0 ? (
          notes.map((note) => (
            <div className="col-md-4" key={note.id}>
              <NoteCard note={note} deleteNote={deleteNote} onEdit={onEdit}/>
            </div>
          ))
        ) : (
          <p className="text-center">No hay notas aún.</p>
        )}
      </div>
    </div>
  );
};

export default NotesList;
