import { useState, useEffect } from 'react';
import NoteItem from './NoteItem';
import Pagination from './Pagination';
import { Note, getNotes, deleteNote } from '../utils/noteStorage';

interface NoteListProps {
    onEdit: (note: Note) => void;
}

const NoteList: React.FC<NoteListProps> = ({ onEdit }) => {
    const [notes, setNotes] = useState<Note[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        setNotes(getNotes());
    }, []);

    const handleDelete = (id: string) => {
        deleteNote(id);
        setNotes(getNotes());
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const filteredNotes = notes.filter(
        note => note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.content.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const notesPerPage = 10;
    const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
    const displayedNotes = filteredNotes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            </div>
            <div className="space-y-4">
                {displayedNotes.map(note => (
                    <NoteItem key={note.id} note={note} onEdit={onEdit} onDelete={handleDelete} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div >
    );
};

export default NoteList;

