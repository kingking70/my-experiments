import { Note } from '../types';

const what: Note = {
  id: 'what',
  folder: 'projects',
  title: 'what',
  subtitle: 'dos',
  body: '',
  sections: [
    { heading: 'doing', body: '', numbered: true },
    { heading: 'want to', body: '', numbered: true },
  ],
  pinned: true,
};

export default what;
