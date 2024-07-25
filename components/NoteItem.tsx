import { Note } from '../utils/noteStorage';

interface NoteItemProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded-md space-y-2">
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p>{note.content}</p>
      <div className="text-sm text-gray-500">Last modified: {new Date(note.timestamp).toLocaleString()}</div>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(note)}
          className="inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(note.id)}
          className="inline-flex items-center px-2 py-1 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
