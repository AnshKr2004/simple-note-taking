import { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { Note } from '../utils/noteStorage';

const Home = () => {
  const [editingNote, setEditingNote] = useState<Note | undefined>(undefined);
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setShowForm(true);
  };

  const handleSave = () => {
    setShowForm(false);
    setEditingNote(undefined);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Simple Note Taking App</h1>
      <div className="mb-4">
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          {showForm ? 'Close' : 'Add Note'}
        </button>
      </div>
      {showForm && (
        <NoteForm note={editingNote} onSave={handleSave} />
      )}
      <NoteList onEdit={handleEdit} />
    </div>
  );
};

export default Home;
