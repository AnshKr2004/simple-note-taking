export interface Note {
    id: string;
    title: string;
    content: string;
    timestamp: string;
  }
  
  const STORAGE_KEY = 'notes';
  
  export const getNotes = (): Note[] => {
    if (typeof window !== 'undefined') {
      const notes = localStorage.getItem(STORAGE_KEY);
      return notes ? JSON.parse(notes) : [];
    }
    return [];
  };
  
  export const saveNotes = (notes: Note[]) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
    }
  };
  
  export const createNote = (note: Note) => {
    const notes = getNotes();
    notes.push(note);
    saveNotes(notes);
  };
  
  export const updateNote = (updatedNote: Note) => {
    let notes = getNotes();
    notes = notes.map(note => (note.id === updatedNote.id ? updatedNote : note));
    saveNotes(notes);
  };
  
  export const deleteNote = (id: string) => {
    let notes = getNotes();
    notes = notes.filter(note => note.id !== id);
    saveNotes(notes);
  };
  