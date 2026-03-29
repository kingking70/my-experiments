import { FolderItem, Note } from './types';
import notesFolder from './Notes';
import writings from './writings';
import experiments from './experiments';

export const folders: FolderItem[] = [
  { id: 'notes', name: 'Notes', icon: 'folder' },
  { id: 'experiments', name: 'experiments', icon: 'folder' },
  { id: 'writings', name: 'writings', icon: 'folder' },
];

export const allNotes: Note[] = [
  ...notesFolder,
  ...writings,
  ...experiments,
];

export type { Note, FolderItem };
