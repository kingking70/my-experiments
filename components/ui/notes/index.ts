import { FolderItem, Note } from './types';
import notesFolder from './Notes';
import writings from './writings';
import projects from './projects';

export const folders: FolderItem[] = [
  { id: 'notes', name: 'Notes', icon: 'folder' },
  { id: 'projects', name: 'projects', icon: 'folder' },
  { id: 'writings', name: 'writings', icon: 'folder' },
];

export const allNotes: Note[] = [
  ...notesFolder,
  ...writings,
  ...projects,
];

export type { Note, FolderItem };
