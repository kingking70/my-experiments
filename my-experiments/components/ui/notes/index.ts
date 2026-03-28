import { FolderItem, Note } from './types';
import notesFolder from './Notes';
import writings from './writings';
import projects from './projects';
import ideas from './ideas';

export const folders: FolderItem[] = [
  { id: 'notes', name: 'Notes', icon: 'folder' },
  { id: 'writings', name: 'writings', icon: 'folder' },
  { id: 'projects', name: 'projects', icon: 'folder' },
  { id: 'ideas', name: 'ideas', icon: 'folder' },
];

export const allNotes: Note[] = [
  ...notesFolder,
  ...writings,
  ...projects,
  ...ideas,
];

export type { Note, FolderItem };
