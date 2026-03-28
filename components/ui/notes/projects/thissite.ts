import { Note } from '../types';

const thissite: Note = {
  id: 'thissite',
  folder: 'projects',
  title: 'this site',
  subtitle: 'kingstonkoh.com',
  body: '',
  sections: [{ heading: 'info', body: 'my public inbox of experiments' },
    { heading: 'next', body: 'port https://kkohs.com/\'s content to this site; maybe replace "kingston\'s experiments" section?', checklist: true },
    ],
  pinned: true,
};

export default thissite;
