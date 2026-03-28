export interface Note {
  id: string;
  folder: string;
  title: string;
  subtitle: string;
  body: string;
  image?: string;
  images?: string[];
  pinned: boolean;
}

export interface FolderItem {
  id: string;
  name: string;
  icon: 'folder';
}
