export interface Section {
  heading: string;
  body?: string;
  checklist?: boolean;
  numbered?: boolean;
  image?: string;
}

export interface Note {
  id: string;
  folder: string;
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  images?: string[];
  sections?: Section[];
  pinned: boolean;
}

export interface FolderItem {
  id: string;
  name: string;
  icon: 'folder';
}
