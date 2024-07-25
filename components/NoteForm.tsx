import { useState, useEffect } from 'react';
import { Note, createNote, updateNote } from '../utils/noteStorage';

interface NoteFormProps {
  note?: Note;
  onSave: () => void;
}

const NoteForm: React.FC<NoteFormProps> = ({ note, onSave }) => {
  const [title, setTitle] = useState(note ? note.title : '');
  const [content, setContent] = useState(note ? note.content : '');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toISOString();
    const newNote = note
      ? { ...note, title, content, timestamp }
      : { id: Math.random().toString(36).substr(2, 9), title, content, timestamp };
    
    if (note) {
      updateNote(newNote);
    } else {
      createNote(newNote);
    }

    setTitle('');
    setContent('');
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;
